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
import DataTable from "./Table";
import ModalFormValue from './ModalFormValue'
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Modalform2 from "./Modalform2";

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
    CarID: 'ฬงฬ999',
    Carleange: '60',
    total: '',
    Budget: ''
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
  render() {
    const { classes } = this.props;
    return (
      <div>
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
                            type="email"
                            fullWidth
                            name="email"
                            autoComplete="email"
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
                            onChange={this.handleChange("EmpFName")}
                            value={this.state.EmpFName}
                            fullWidth
                            autoComplete="email"
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
                            onChange={this.handleChange("EmpLName")}
                            value={this.state.EmpLName}
                            fullWidth
                            autoComplete="email"
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
                          <h7 className={classes.label}>แผนก</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <TextField
                            id="outlined-email-input"
                            label="แผนก"
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
                          <h7 className={classes.label}>ระดับ</h7>
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
                      <hr />
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={12}>
                          <GridContainer>
                            <GridItem xs={12} sm={12} md={2}>
                              <h7 className={classes.label}>
                                เลขที่ทะเบียนรถ
                              </h7>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2}>
                              <TextField
                                id="date"
                                label="เลขที่ทะเบียนรถ"
                                onChange={this.handleChange("CarID")}
                                value={this.state.CarID}
                                type="text"
                                fullWidth
                                className={classes.textField}
                              />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2}>
                              <h7 className={classes.label}>
                                ระยะทางไปกลับ(บริษัท-บ้าน)
                              </h7>
                            </GridItem>
                            <GridItem xs={12} sm={12} md={2}>
                              <TextField
                                id="date"
                                label="ระยะทางไปกลับ"
                                type="text"
                                onChange={this.handleChange("Carleange")}
                                value={this.state.Carleange}
                                fullWidth
                                className={classes.textField}
                              />
                            </GridItem>
                          </GridContainer>
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={2}>
                        <h7 className={classes.label}>จำนวนระยะทางรวม</h7>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}>
                        <TextField
                          id="date"
                          label="จำนวนระยะทางรวม"
                          type="text"
                          onChange={this.handleChange("total")}
                          value={this.state.total}
                          fullWidth
                          className={classes.textField}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={3}>
                        <h7 className={classes.label}>
                          การคำนวณเงินช่วยเหลือค่าพาหนะ ( 6 บาท / กิโลเมตร )
                        </h7>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}>
                        <TextField
                          id="date"
                          label="เงินช่วยเหลือค่าพาหนะ"
                          type="text"
                          onChange={this.handleChange("Budget")}
                          value={this.state.Budget}
                          fullWidth
                          className={classes.textField}
                        />
                      </GridItem>
                    </GridContainer>
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CardBody>
                      <ModalFormValue />
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </CardBody>
              {/* <CardFooter className={classes.positionButton}>
                <Button
                  color="success"
                  className={classes.buttonSubmit}
                  onClick={this.showModal}
                >
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
                  <Modalform2  dataTravelReq={this.state}/>
                </Modal>
              </CardFooter> */}
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
export default withStyles(styles)(FormReq);
