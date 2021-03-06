import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import { Table, Input, Button, Popconfirm, Form,Modal } from "antd";
import ModalFormValue from './ModalFormValue'
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
    this.state = {
      dataSource: [{
        dateStart: "10-10-2019",
        dateFinish: "20-10-2019",
        timeStart:"8:00",
        timeFinish: "18:00",
        total: "10",
        country: "ลาว",
        detail: "Contact",
      }],
      count: 2,
      visible: false ,
      country: ""
    };
    this.columns = [
      {
        title: "วันที่",
        dataIndex: "dateStart",
        editable: true,
        width: 150,
      },
      {
        title: "วันที่สิ้นสุด",
        dataIndex: "dateFinish",
        editable: true,
        width: 150,
      },
      {
        title: "เวลาเริ่มปฎิบัติงาน",
        dataIndex: "timeStart",
        editable: true,
        width: 150,
      },
      {
        title: "เวลาสิ้นสุด",
        dataIndex: "timeFinish",
        editable: true,
        width: 150,
      },
      {
        title: "จุดหมายปลายทาง",
        dataIndex: "country",
        editable: true,
        width: 150,
      },
      {
        title: "รวมวันปฏิบัติงาน",
        dataIndex: "total",
        editable: true,
        width: 150,
      },
      {
        title: "รายละเอียด",
        dataIndex: "detail",
        editable: true,
      },
    ];
  }

  handleDelete = key => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: ``,
      name: ``,
      age: ``,
      address: ``
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1
    });
  };
  expandedRowRender = () => {
    const columns = [
      { title: "รายการ", dataIndex: "list",width: "30%"}, 
      { title: "เป็นเงิน/บาท", dataIndex: "sum",width: 5},
    ];
    const data = [{
      list: "ค่าเบี้ยเลี้ยง",
      sum: "10,000",
    },{
      list: "ค่าที่พัก",
      sum: "10,000",
    },{
      list:"ค่าเดินทางและพาหนะ",
      sum: "10,000",
    },{
      list: "รวมค่าอาหาร",
      sum: "10,000",
    },{
      list: "รวมค่ารับรอง",
      sum: "10,000",
    },{
      list: "อื่นๆ",
      sum: "6000",
    },]
    return <Table columns={columns} dataSource={data} pagination={false} size="middle"/>;
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
    return (
      <div>
        <ModalFormValue />
        <Table
          components={components}
          rowClassName={() => "editable-row"}
          bordered
          dataSource={dataSource}
          columns={columns}
          footer={null}
          expandedRowRender={this.expandedRowRender}
        />

      </div>
    );
  }
}
