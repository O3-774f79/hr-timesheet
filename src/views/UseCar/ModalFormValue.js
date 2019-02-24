import React from "react";
//@antD component
import "antd/dist/antd.css";
import { Table, Input, Popconfirm, Form, Modal, Steps, Icon } from "antd";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Datatable from './Table'
import Table2 from './Table2'
import Modalform2 from "./Modalform2";

const Step = Steps.Step;

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  },
  labelFlow: {
    float: "right"
  },
  label: {
    float: "right",
    marginTop: 30
  },
  headerAppBar: {
    backgroundColor: "rgb(255, 230, 204)",
    color: "rgb(0, 0, 0)"
  },
  buttonSubmit: {
    backgroundColor: "rgb(51, 204, 51)",
    color: "rgb(0, 0, 0)"
  },
  positionButton: {
    display: "flex",
    justifyContent: "center"
  }
};

class Modalform3 extends React.Component {
  state={
    type: "car",
    EmpID: "12345",
    EmpFName: "Ananchai",
    EmpLName: "Phahupongsub",
    EmpGroup: "IT",
    EmpDepartment: "Programming",
    EmpLevel: "ปฏิบัติการ",
    CarID: 'ฬงฬ999',
    Carleange: '60',
    visible: false,
    visible2: false,
    startDate:'',
    start: '',
    finish: '',
    miStart:'',
    miFinish:'',
    summary:'',
    carApprove:[
      { 
      topic: "การเบิกชดเชยการใช้รถส่วนตัวในกิจการบริษัท",
      EmpID: "12345",
      id:"BRT-6200001",
      requester:"Ananchai",
      EmpFName: "Ananchai",
      EmpLName: "Phahupongsub",
      EmpGroup: "IT",
      EmpDepartment: "Programming",
      startdate: new Date().getDate()+`-`+new Date().getMonth()+1+`-`+new Date().getYear(),
      enddate: '',
      EmpLevel: "ปฏิบัติการ",
      CarID: 'ฬงฬ999',
      Carleange: '60',
      startDate:'',
      start: '',
      finish: '',
      miStart:'',
      miFinish:'',
      summary:'',}
    ],
    dataSource:[]
  }
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  onHandleClick= ()=>{
    this.setState({
      visible: false,
      startDate:'',
      start: '',
      finish: '',
      miStart:'',
      miFinish:'',
      summary:'',
    });
    this.state.dataSource.push(this.state)
  }
  onHandleApprove=()=>{
    this.setState({
      visible2:false,
      dataSource:[]
    })
    sessionStorage.setItem("Approve",JSON.stringify(this.state.carApprove))
    const dataWaitApprove = JSON.parse(sessionStorage.getItem("Approve"))
    sessionStorage.setItem("Approve",JSON.stringify(dataWaitApprove))
  }
  showModal = () => {
    this.setState({
      visible: true
    });
  };
  showModal2 = () => {
    this.setState({
      visible2: true
    });
  };
  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
      visible2: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
      visible2: false
    });
  };
  render(){
  const { classes } = this.props;
  return (
    <div>
        <Button 
        // onClick={this.handleAdd}
        onClick={this.showModal} 
        type="primary" 
        style={{ marginBottom: 16 }}>
          Add a row
        </Button>
        <Modal
          style={{ marginLeft: "15%", marginTop: "10" }}
          width="75%"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
             <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h3 className={classes.cardTitleWhite}>
              การเบิกชดเชยการใช้รถส่วนตัวในกิจการบริษัท
              </h3>
              {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <AppBar className={classes.headerAppBar} position="static">
                    <Toolbar variant="dense">
                      <Typography variant="h6" color="inherit">
                        <PersonPinIcon /> รายละเอียด
                      </Typography>
                    </Toolbar>
                  </AppBar>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={2}>
                        <h7 className={classes.label}>วันที่เริ่มเดินทาง</h7>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}>
                        <TextField
                          id="date"
                          label="  "
                          type="date"
                          onChange={this.handleChange("startDate")}
                          value={this.state.startDate}
                          fullWidth
                          defaultValue=""
                          className={classes.textField}
                        />
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={2}>
                        <h7 className={classes.label}>เดินทางจาก</h7>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}>
                        <TextField
                          id="date"
                          label="จังหวัด"
                          type="text"
                          onChange={this.handleChange("start")}
                          value={this.state.start}
                          fullWidth
                          defaultValue=""
                          className={classes.textField}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}>
                        <h7 className={classes.label}>ปลายทาง</h7>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}>
                        <TextField
                          id="date"
                          label="ปลายทาง"
                          type="text"
                          onChange={this.handleChange("finish")}
                          value={this.state.finish}
                          fullWidth
                          defaultValue=""
                          className={classes.textField}
                        />
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={2}>
                        <h7 className={classes.labelFlow}>เลขที่มิเตอระยะทาง: เริ่มต้น</h7>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}>
                        <TextField
                          id="date"
                          label=""
                          type="text"
                          onChange={this.handleChange("miStart")}
                          value={this.state.miStart}
                          fullWidth
                          defaultValue=""
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}>
                        <h7 className={classes.labelFlow}>เลขที่มิเตอระยะทาง: สิ้นสุด</h7>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}>
                        <TextField
                          id="date"
                          label=""
                          type="text"
                          fullWidth
                          onChange={this.handleChange("miFinish")}
                          value={this.state.miFinish}
                          defaultValue=""
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}>
                        <h7 className={classes.labelFlow}>ระยะทางรวม</h7>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}>
                        <TextField
                          id="date"
                          label=""
                          type="text"
                          fullWidth
                          onChange={this.handleChange("summary")}
                          value={this.state.summary}
                          defaultValue=""
                          className={classes.textField}
                          InputLabelProps={{
                            shrink: true
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </GridItem>
              </GridContainer>          
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <CardBody>
                    <GridContainer>
                    <GridItem xs={12} sm={12} md={1} />
                      <GridItem xs={12} sm={12} md={11}>
                      
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </GridItem>
              </GridContainer>
           
            </CardBody>
            <CardFooter className={classes.positionButton}>
              <Button  onClick={this.onHandleClick} className={classes.buttonSubmit}>
                ตกลง
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
        </Modal>
        <Datatable dataSource={this.state.dataSource}/>
        <CardFooter className={classes.positionButton}>
                <Button
                  color="success"
                  className={classes.buttonSubmit}
                  onClick={this.showModal2}
                >
                  ตรวจสอบรายการอนุมัติ
                </Button>
                <Modal
                  style={{ marginLeft: "15%", marginTop: "10" }}
                  width="75%"
                  visible={this.state.visible2}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                  footer={null}
                >
                  {/* <Modalform2  this.state={this.state} dataSource={this.state.dataSource}/> */}
                  <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h3 className={classes.cardTitleWhite}>
                การเบิกชดเชยการใช้รถส่วนตัวในกิจการบริษัท
              </h3>
              {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
            <CardBody>
              <Steps>
                <Step status="finish" title="Emp" icon={<Icon type="user" />} />
                <Step
                  status="finish"
                  title="Manager"
                  icon={<Icon type="solution" />}
                />
                <Step
                  status="wait"
                  title="Done"
                  icon={<Icon type="smile-o" />}
                />
              </Steps>
            </CardBody>

            <CardBody>
              <GridContainer>
                <GridItem xs={12} sm={12} md={12}>
                  <AppBar className={classes.headerAppBar} position="static">
                    <Toolbar variant="dense">
                      <Typography variant="h6" color="inherit">
                        <PersonPinIcon /> พนักงาน
                      </Typography>
                    </Toolbar>
                  </AppBar>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={1}>
                        <h7 className={classes.label}>รหัสพนักงาน</h7>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          id="outlined-email-input"
                          label="รหัสพนักงาน"
                          className={classes.textField}
                          type="email"
                          fullWidth
                          value={this.state.EmpID}
                          onChange={this.handleChange("EmpID")}
                          margin="normal"
                          disabled
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={1}>
                        <h7 className={classes.label}>ชื่อ</h7>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          id="outlined-email-input"
                          label="ชื่อ"
                          className={classes.textField}
                          type="email"
                          value={this.state.EmpFName}
                          onChange={this.handleChange("EmpFName")}
                          fullWidth
                          margin="normal"
                          disabled
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={1}>
                        <h7 className={classes.label}>ชื่อสกุล</h7>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <TextField
                          id="outlined-email-input"
                          label="ชื่อสกุล"
                          className={classes.textField}
                          type="email"
                          value={this.state.EmpLName}
                          onChange={this.handleChange("EmpLName")}
                          fullWidth
                          margin="normal"
                          disabled
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={1}>
                          <h7 className={classes.label}>แผนก :</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <TextField
                            id="outlined-email-input"
                            label="แผนก"
                            className={classes.textField}
                            type="email"
                            onChange={this.handleChange("EmpGroup")}
                            value={this.state.EmpGroup}
                            fullWidth
                            autoComplete="email"
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={1}>
                          <h7 className={classes.label}>ฝ่าย :</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <TextField
                            id="outlined-email-input"
                            label="ฝ่าย"
                            className={classes.textField}
                            type="email"
                            onChange={this.handleChange("EmpDepartment")}
                            value={this.state.EmpDepartment}
                            fullWidth
                            autoComplete="email"
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={1}>
                          <h7 className={classes.label}>ระดับ :</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="ระดับ"
                            className={classes.textField}
                            type="email"
                            fullWidth
                            onChange={this.handleChange("EmpLevel")}
                            value={this.state.EmpLevel}
                            autoComplete="email"
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                      </GridContainer>
                  </CardBody>
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardBody>
              <Table2 dataSource={this.state.dataSource}/>
            </CardBody>
            <CardFooter className={classes.positionButton}>
              <Button color="success"onClick={this.onHandleApprove}className={classes.buttonSubmit}>
                ส่งอนุมัติ
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
                </Modal>
              </CardFooter>
    </div>
  );
}
}
export default withStyles(styles)(Modalform3);
