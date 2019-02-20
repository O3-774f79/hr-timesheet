import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table, Input, Button, Popconfirm, Form } from "antd";

import Delete from "@material-ui/icons/Delete";
import Description from "@material-ui/icons/Description";
import Done from "@material-ui/icons/Done";

const FormItem = Form.Item;
const EditableContext = React.createContext();

const EditableRow = ({ form, index, ...props }) => (
  <EditableContext.Provider value={form}>
    <tr {...props} />
  </EditableContext.Provider>
);

const EditableFormRow = Form.create()(EditableRow);

class EditableCell extends React.Component {
  state = {
    editing: false
  };

  componentDidMount() {
    if (this.props.editable) {
      document.addEventListener("click", this.handleClickOutside, true);
    }
  }

  componentWillUnmount() {
    if (this.props.editable) {
      document.removeEventListener("click", this.handleClickOutside, true);
    }
  }

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  };

  handleClickOutside = e => {
    const { editing } = this.state;
    if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
      this.save();
    }
  };

  save = () => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  };

  render() {
    const { editing } = this.state;
    const {
      editable,
      dataIndex,
      title,
      record,
      index,
      handleSave,
      ...restProps
    } = this.props;
    return (
      <td ref={node => (this.cell = node)} {...restProps}>
        {editable ? (
          <EditableContext.Consumer>
            {form => {
              this.form = form;
              return editing ? (
                <FormItem style={{ margin: 0 }}>
                  {form.getFieldDecorator(dataIndex, {
                    rules: [
                      {
                        required: true,
                        message: `${title} is required.`
                      }
                    ],
                    initialValue: record[dataIndex]
                  })(
                    <Input
                      ref={node => (this.input = node)}
                      onPressEnter={this.save}
                    />
                  )}
                </FormItem>
              ) : (
                <div
                  className="editable-cell-value-wrap"
                  style={{ paddingRight: 24 }}
                  onClick={this.toggleEdit}
                >
                  {restProps.children}
                </div>
              );
            }}
          </EditableContext.Consumer>
        ) : (
          restProps.children
        )}
      </td>
    );
  }
}

export default class EditableTable extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
        title: "หมายเลข",
        dataIndex: "id",
        width: 5,
        editable: true
      },
      {
        title: "เรื่อง",
        dataIndex: "topic",
        width: 200
      },
      {
        title: "วันที่ขอ",
        dataIndex: "startdate",
        width: 8
      },
      {
        title: "วันที่สิ้นสุด",
        dataIndex: "enddate",
        width: 8
      },
      {
        title: "ผู้ขอ",
        dataIndex: "requester",
        width: 100
      },
      // {
      //   title: 'ผู้อนุมัติ',
      //   dataIndex: 'approver',
      //   width: '15%',
      // },
      {
        title: "operation",
        dataIndex: "operation",
        width: 10,

        render: (text, record) => [
          <Button style={{ backgroundColor: "rgb(51, 204, 51)" }}>
            <Done />
          </Button>,
          <Button style={{ backgroundColor: "rgb(255, 153, 0)" }}>
            <Description />
          </Button>,
          <Button style={{ backgroundColor: "rgb(204, 0, 0)" }}>
            <Delete />
          </Button>
        ]
      }
    ];

    this.state = {
      dataSource: [
        {
          key: "0",
          id: "BRT-6200001",
          topic: "เบิกเบี้ยเลี้ยงภายในประเทศและต่างประเทศ",
          startdate: "15/02/2562",
          enddate: "",
          requester: "นาย อนันต์ชัย พหุพงศ์ทรัพย์"
        },
        {
          key: "1",
          id: "BRT-6200002",
          topic: "เบิกชดเชยการใช้รถส่วนตัวในกิจการบริษัท",
          startdate: "15/02/2562",
          enddate: "",
          requester: "นาย อนันต์ชัย พหุพงศ์ทรัพย์"
        }
      ],
      count: 2,
      selectedRowKeys: []
    };
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      name: `Edward King ${count}`,
      age: 32,
      address: `London, Park Lane no. ${count}`
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1
    });
  };

  handleSave = row => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row
    });
    this.setState({ dataSource: newData });
  };

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell
      }
    };
    const columns = this.columns.map(col => {
      if (!col.editable) {
        return col;
      }
      return {
        ...col,
        onCell: record => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave
        })
      };
    });
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange,
      hideDefaultSelections: true,
      selections: [
        {
          key: "all-data",
          text: "Select All Data",
          onSelect: () => {
            this.setState({
              selectedRowKeys: [...Array(46).keys()] // 0...45
            });
          }
        },
        {
          key: "odd",
          text: "Select Odd Row",
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return false;
              }
              return true;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          }
        },
        {
          key: "even",
          text: "Select Even Row",
          onSelect: changableRowKeys => {
            let newSelectedRowKeys = [];
            newSelectedRowKeys = changableRowKeys.filter((key, index) => {
              if (index % 2 !== 0) {
                return true;
              }
              return false;
            });
            this.setState({ selectedRowKeys: newSelectedRowKeys });
          }
        }
      ],
      onSelection: this.onSelection
    };
    return (
      <div>
        <Button
          onClick={this.handleAdd}
          type="success"
          style={{
            marginBottom: 16,
            marginLeft: 5,
            backgroundColor: "rgb(51, 204, 51)"
          }}
        >
          อนุมัติ
        </Button>
        <Button
          onClick={this.handleAdd}
          type="danger"
          style={{ marginBottom: 16 }}
        >
          ไม่อนุมัติ
        </Button>
        <Table
          rowSelection={rowSelection}
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
        />
      </div>
    );
  }
}
