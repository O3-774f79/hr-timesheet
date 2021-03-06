import React from "react";
//@antD component
import "antd/dist/antd.css";
import { Modal } from "antd";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
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
import { Steps, Icon } from "antd";

import PersonPinIcon from "@material-ui/icons/PersonPin";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Modalform from "./Modalform";

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

class FormReq extends React.Component {
  state = {
    visible: false,
    EmpID: "12345",
    EmpFName: "Ananchai",
    EmpLName: "Phahupongsub",
    EmpGroup: "IT",
    EmpDepartment: "Programming",
    EmpLevel: "ปฏิบัติการ",
    TravelTarget: "Support program",
    WorkType: "Support",
    DateStart: "2019-01-12",
    DateFinish: "2019-01-13",
    TimeStart: "08:00",
    TimeFinish: "18:00",
    CostCenter: "LeaderPlanet",
    CostOther: "",
    County: "",
    Province: "นครปฐม",
    MoneyTran: "35",
    dataArray:[],
  };

  showModal = () => {
    this.setState({
      visible: true
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false
    });
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  _onhandleClick =  () => {
    this.setState({
      visible: false
    });
    const {dataArray} = this.state
    sessionStorage.setItem("TravelReq",JSON.stringify(dataArray))
  };
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="info">
                <h3 className={classes.cardTitleWhite}>การขอเดินทาง</h3>
                {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
              </CardHeader>
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
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>รหัสพนักงาน</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="รหัสพนักงาน"
                            className={classes.textField}
                            onChange={this.handleChange("EmpID")}
                            value={this.state.EmpID}
                            fullWidth
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
                            onChange={this.handleChange("EmpFName")}
                            value={this.state.EmpFName}
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
                            onChange={this.handleChange("EmpLName")}
                            value={this.state.EmpLName}
                            fullWidth
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>ฝ่าย</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="ฝ่าย"
                            className={classes.textField}
                            onChange={this.handleChange("EmpGroup")}
                            value={this.state.EmpGroup}
                            fullWidth
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={1}>
                          <h7 className={classes.label}>แผนก</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <TextField
                            id="outlined-email-input"
                            label="แผนก"
                            className={classes.textField}
                            onChange={this.handleChange("EmpDepartment")}
                            value={this.state.EmpDepartment}
                            fullWidth
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={1}>
                          <h7 className={classes.label}>ระดับ</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <TextField
                            id="outlined-email-input"
                            label="ระดับ"
                            className={classes.textField}
                            onChange={this.handleChange("EmpLevel")}
                            value={this.state.EmpLevel}
                            fullWidth
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <AppBar className={classes.headerAppBar} position="static">
                      <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                          <LibraryBooks /> ข้อมูลการเดินทาง
                        </Typography>
                      </Toolbar>
                    </AppBar>
                    <CardBody>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>จุดประสงการเดินทาง</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={4}>
                          <TextField
                            id="outlined-email-input"
                            label="จุดประสงการเดินทาง"
                            className={classes.textField}
                            onChange={this.handleChange("TravelTarget")}
                            value={this.state.TravelTarget}
                            type="email"
                            fullWidth
                            name="email"
                            margin="normal"
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>ประเภทงาน</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="ประเภทงาน"
                            className={classes.textField}
                            onChange={this.handleChange("WorkType")}
                            value={this.state.WorkType}
                            fullWidth
                            margin="normal"
                          />
                        </GridItem>
                      </GridContainer>

                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>ตั้งแต่วันที่</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            fullWidth
                            onChange={this.handleChange("DateStart")}
                            value={this.state.DateStart}
                            defaultValue=""
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>ถึงวันที่</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            fullWidth
                            onChange={this.handleChange("DateFinish")}
                            value={this.state.DateFinish}
                            defaultValue=""
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true
                            }}
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>เวลาเริ่มต้น</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="date"
                            label="เวลาเริ่มต้น"
                            type="time"
                            fullWidth
                            onChange={this.handleChange("TimeStart")}
                            value={this.state.TimeStart}
                            defaultValue=""
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>เวลาสิ้นสุด</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="date"
                            label="เวลาสิ้นสุด"
                            type="time"
                            onChange={this.handleChange("TimeFinish")}
                            value={this.state.TimeFinish}
                            fullWidth
                            defaultValue=""
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true
                            }}
                          />
                        </GridItem>
                      </GridContainer>

                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>ศูนย์ต้นทุน</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="ศูนย์ต้นทุน"
                            className={classes.textField}
                            onChange={this.handleChange("CostCenter")}
                            value={this.state.CostCenter}
                            fullWidth
                            margin="normal"
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>ศูนย์ต้นทุนอื่น</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="ศูนย์ต้นทุนอื่น"
                            className={classes.textField}
                            onChange={this.handleChange("CostOther")}
                            value={this.state.CostOther}
                            fullWidth
                            margin="normal"
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>เดินทางไปประเทศ</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="เดินทางไปประเทศ"
                            className={classes.textField}
                            onChange={this.handleChange("County")}
                            value={this.state.County}
                            fullWidth
                            margin="normal"
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>จังหวัด</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="จังหวัด"
                            className={classes.textField}
                            onChange={this.handleChange("Province")}
                            value={this.state.Province}
                            fullWidth
                            margin="normal"
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>อัตราแลกเงิน</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="อัตราแลกเงิน"
                            className={classes.textField}
                            onChange={this.handleChange("MoneyTran")}
                            value={this.state.MoneyTran}
                            fullWidth
                            margin="normal"
                          />
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter className={classes.positionButton}>
                <Button onClick={this.showModal} style={{fontSize:16}} className={classes.buttonSubmit}>
                  ตรวจสอบรายการอนุมัติ
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
                <h3 className={classes.cardTitleWhite}>การขอเดินทาง</h3>
                {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
              </CardHeader>
              <CardBody>
                <Steps>
                  <Steps>
                    <Step
                      status="finish"
                      title="Emp"
                      icon={<Icon type="user" />}
                    />
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
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>รหัสพนักงาน</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="รหัสพนักงาน"
                            className={classes.textField}
                            type="email"
                            fullWidth
                            value={this.state.EmpID}
                            onChange={this.handleChange("EmpID")}
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>ชื่อ :</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="ชื่อ"
                            className={classes.textField}
                            value={this.state.EmpFName}
                            onChange={this.handleChange("EmpFName")}
                            type="email"
                            name="email"
                            fullWidth
                            autoComplete="email"
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>ชื่อสกุล :</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="ชื่อสกุล"
                            className={classes.textField}
                            value={this.state.EmpLName}
                            onChange={this.handleChange("EmpLName")}
                            type="email"
                            name="email"
                            fullWidth
                            autoComplete="email"
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>ฝ่าย :</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="ฝ่าย"
                            className={classes.textField}
                            value={this.state.EmpGroup}
                            onChange={this.handleChange("EmpGroup")}
                            type="email"
                            fullWidth
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>แผนก :</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="แผนก"
                            className={classes.textField}
                            value={this.state.EmpDepartment}
                            onChange={this.handleChange("EmpDepartment")}
                            type="email"
                            name="email"
                            fullWidth
                            autoComplete="email"
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>ระดับ :</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="ระดับ"
                            className={classes.textField}
                            value={this.state.EmpLevel}
                            onChange={this.handleChange("EmpLevel")}
                            type="email"
                            name="email"
                            fullWidth
                            autoComplete="email"
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <AppBar className={classes.headerAppBar} position="static">
                      <Toolbar variant="dense">
                        <Typography variant="h6" color="inherit">
                          <LibraryBooks /> ข้อมูลการเดินทาง
                        </Typography>
                      </Toolbar>
                    </AppBar>
                    <CardBody>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={3}>
                          <h7 className={classes.label}>
                            จุดประสงการเดินทาง :
                          </h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={5}>
                          <TextField
                            id="outlined-email-input"
                            label="จุดประสงการเดินทาง"
                            className={classes.textField}
                            onChange={this.handleChange("TravelTarget")}
                            type="email"
                            fullWidth
                            value={this.state.TravelTarget}
                            name="email"
                            autoComplete="email"
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>ประเภทงาน :</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="ประเภทงาน"
                            className={classes.textField}
                            value={this.state.WorkType}
                            onChange={this.handleChange("WorkType")}
                            type="email"
                            name="email"
                            fullWidth
                            autoComplete="email"
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>ตั้งแต่วันที่ :</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            fullWidth
                            disabled
                            value={this.state.DateStart}
                            onChange={this.handleChange("DateStart")}
                            defaultValue=""
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>ถึงวันที่ :</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="date"
                            label="Birthday"
                            type="date"
                            disabled
                            value={this.state.DateFinish}
                            onChange={this.handleChange("DateFinish")}
                            fullWidth
                            defaultValue=""
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true
                            }}
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>เวลาเริ่มต้น :</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="time"
                            label="เวลาเริ่มต้น"
                            type="time"
                            disabled
                            // defaultValue="07:30"
                            value={this.state.TimeStart}
                            onChange={this.handleChange("TimeStart")}
                            fullWidth
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true
                            }}
                            inputProps={{
                              step: 600 // 5 min
                            }}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>เวลาสิ้นสุด :</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="time"
                            label="เวลาสิ้นสุด"
                            type="time"
                            disabled
                            // defaultValue="07:30"
                            value={this.state.TimeFinish}
                            onChange={this.handleChange("TimeFinish")}
                            fullWidth
                            className={classes.textField}
                            InputLabelProps={{
                              shrink: true
                            }}
                            inputProps={{
                              step: 600 // 5 min
                            }}
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>ศูนย์ต้นทุน :</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="ศูนย์ต้นทุน"
                            className={classes.textField}
                            value={this.state.CostCenter}
                            onChange={this.handleChange("CostCenter")}
                            type="email"
                            name="email"
                            fullWidth
                            autoComplete="email"
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>ศูนย์ต้นทุนอื่น</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="ศูนย์ต้นทุนอื่น"
                            className={classes.textField}
                            value={this.state.CostOther}
                            onChange={this.handleChange("CostOther")}
                            type="email"
                            name="email"
                            fullWidth
                            autoComplete="email"
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>เดินทางไปประเทศ</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="เดินทางไปประเทศ"
                            className={classes.textField}
                            value={this.state.County}
                            onChange={this.handleChange("County")}
                            type="email"
                            name="email"
                            fullWidth
                            autoComplete="email"
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>จังหวัด</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="จังหวัด"
                            className={classes.textField}
                            value={this.state.Province}
                            onChange={this.handleChange("Province")}
                            type="email"
                            name="email"
                            fullWidth
                            autoComplete="email"
                            margin="normal"
                            disabled
                          />
                        </GridItem>
                      </GridContainer>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>อัตราแลกเงิน</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="outlined-email-input"
                            label="อัตราแลกเงิน"
                            className={classes.textField}
                            value={this.state.MoneyTran}
                            onChange={this.handleChange("MoneyTran")}
                            type="email"
                            name="email"
                            fullWidth
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
              <CardFooter className={classes.positionButton}>
                <Button onClick={this._onhandleClick} color="success" style={{fontSize:16}}>
                  ส่งอนุมัติ
                </Button>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
                </Modal>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
export default withStyles(styles)(FormReq);
