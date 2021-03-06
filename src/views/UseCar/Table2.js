
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {
  Table, Input, Button, Popconfirm, Form,
} from 'antd';
import data from './data'
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
    editing: false,
  }

  componentDidMount() {
    if (this.props.editable) {
      document.addEventListener('click', this.handleClickOutside, true);
    }
  }

  componentWillUnmount() {
    if (this.props.editable) {
      document.removeEventListener('click', this.handleClickOutside, true);
    }
  }

  toggleEdit = () => {
    const editing = !this.state.editing;
    this.setState({ editing }, () => {
      if (editing) {
        this.input.focus();
      }
    });
  }

  handleClickOutside = (e) => {
    const { editing } = this.state;
    if (editing && this.cell !== e.target && !this.cell.contains(e.target)) {
      this.save();
    }
  }

  save = () => {
    const { record, handleSave } = this.props;
    this.form.validateFields((error, values) => {
      if (error) {
        return;
      }
      this.toggleEdit();
      handleSave({ ...record, ...values });
    });
  }

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
            {(form) => {
              this.form = form;
              return (
                editing ? (
                  <FormItem style={{ margin: 0 }}>
                    {form.getFieldDecorator(dataIndex, {
                      rules: [{
                        required: true,
                        message: `${title} is required.`,
                      }],
                      initialValue: record[dataIndex],
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
                )
              );
            }}
          </EditableContext.Consumer>
        ) : restProps.children}
      </td>
    );
  }
}

export default class Table2 extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [
      {
      title: 'วันที่เดินทาง',
      dataIndex: 'startDate',
      editable: true,
    }, {
      title: 'เดินทางจาก',
      dataIndex: 'start',
      editable: true,
    }, {
      title: 'ถึง',
      dataIndex: 'finish',
      editable: true,
    }, 
    {
      title: 'เลขที่มิเตอระยะทาง: เริ่มต้น',
      editable: true,
      dataIndex: 'miStart',
    }, 
    {
      title: 'เลขที่มิเตอระยะทาง: สิ้นสุด',
      editable: true,
      dataIndex: 'miFinish',
      }, 
    {
      title: "ระยะทางรวม",
      editable: true,
      dataIndex: 'summary',
    },
    // {
    //   title: '',
    //   dataIndex: 'operation',
    //   render: (text, record) => (
    //     this.state.dataSource.length >= 1
    //       ? (
    //         <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
    //           <a href="javascript:;"><Button type="danger">Delete</Button></a>
    //         </Popconfirm>
    //       ) : null
    //   ),
    // }
  ];

    this.state = {
      dataSource: [],
      count: 2,
      no:1
    };
  }

  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({ dataSource: dataSource.filter(item => item.key !== key) });
  }

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      No: this.state.no++,
      key: ``,
      startDate: ``,
      start: ``,
      finish: ``,
      miStart: ``,
      miFinish: ``,
      summary: ``
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  }

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex(item => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, {
      ...item,
      ...row,
    });
    this.setState({ dataSource: newData });
  }

  render() {
    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableFormRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
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
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div>
        {/* <Button onClick={this.handleAdd} type="primary" style={{ marginBottom: 16 }}>
          Add a row
        </Button> */}
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={this.props.dataSource}
          columns={columns}
          footer={null}
        />
      </div>
    );
  }
}

          