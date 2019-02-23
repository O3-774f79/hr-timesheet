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

import PersonPinIcon from "@material-ui/icons/PersonPin";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Modalform3 from "./Modalform3";
import { Divider } from "@material-ui/core";
import { Select } from 'antd';

const Option = Select.Option;
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
    marginTop: 28
  },
  labelFlow: {
    float: "right",
    marginTop: 3
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
    County: "นครปฐม",
    MoneyTran: "35",
    country: 1,
    countryText: "จังหวัด"
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
  onSelectChange = (value)=>{
    if(value===1){
      this.setState({countryText:"จังหวัด"})}
    else { 
      this.setState({countryText:"ประเทศ"})}
    this.setState({country:value})
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="info">
                <h3 className={classes.cardTitleWhite}>
                  การเบิกเบี้ยเลี้ยงภายในและต่างประเทศ
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
                  </GridItem>
                </GridContainer>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CardBody>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.label}>รหัสพนักงาน</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="date"
                            label="รหัสพนักงาน"
                            type="text"
                            onChange={this.handleChange("EmpID")}
                            value={this.state.EmpID}
                            fullWidth
                            defaultValue=""
                            className={classes.textField}
                            disabled
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={1}>
                          <h7 className={classes.label}>ชื่อ</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <TextField
                            id="date"
                            label="ชื่อ"
                            type="text"
                            onChange={this.handleChange("EmpFName")}
                            value={this.state.EmpFName}
                            fullWidth
                            defaultValue=""
                            className={classes.textField}
                            disabled
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={1}>
                          <h7 className={classes.label}>ชื่อสกุล</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <TextField
                            id="date"
                            onChange={this.handleChange("EmpLName")}
                            label="ชื่อสกุล"
                            value={this.state.EmpLName}
                            fullWidth
                            type="text"
                            defaultValue=""
                            className={classes.textField}
                            disabled
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
                          <h7 className={classes.label}>ฝ่าย</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="date"
                            label="ฝ่าย"
                            value={this.state.EmpGroup}
                            onChange={this.handleChange("EmpGroup")}
                            type="text"
                            fullWidth
                            defaultValue=""
                            className={classes.textField}
                            disabled
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={1}>
                          <h7 className={classes.label}>แผนก</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <TextField
                            id="date"
                            label="แผนก"
                            type="text"
                            onChange={this.handleChange("EmpDepartment")}
                            value={this.state.EmpDepartment}
                            fullWidth
                            defaultValue=""
                            className={classes.textField}
                            disabled
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={1}>
                          <h7 className={classes.label}>ระดับ</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={3}>
                          <TextField
                            id="date"
                            label="ระดับ"
                            fullWidth
                            onChange={this.handleChange("EmpLevel")}
                            value={this.state.EmpLevel}
                            type="text"
                            defaultValue=""
                            className={classes.textField}
                            disabled
                          />
                        </GridItem>
                      </GridContainer>
                    </CardBody>
                  </GridItem>
                </GridContainer>
                <Divider style={{ marginBottom: 5 }} />
                <GridContainer>
                  <GridItem xs={12} sm={12} md={12}>
                    <CardBody>
                      <GridContainer>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.labelFlow}>
                            รวมค่าเบี้ยเลี้ยง
                          </h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="date"
                            label=""
                            type="number"
                            fullWidth
                            defaultValue=""
                            className={classes.textField}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={1}>
                          <h7 className={classes.labelFlow}>รวมค่าที่พัก</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="date"
                            label=""
                            type="number"
                            fullWidth
                            defaultValue=""
                            className={classes.textField}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.labelFlow}>รวมค่าเดินทางและพาหนะ</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="date"
                            label=""
                            fullWidth
                            type="text"
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
                          <h7 className={classes.labelFlow}>
                            รวมค่าอาหาร
                          </h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="date"
                            label=""
                            type="number"
                            fullWidth
                            defaultValue=""
                            className={classes.textField}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={1}>
                          <h7 className={classes.labelFlow}>รวมค่ารับรอง</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="date"
                            label=""
                            type="number"
                            fullWidth
                            defaultValue=""
                            className={classes.textField}
                          />
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <h7 className={classes.labelFlow}>อื่นๆ</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="date"
                            label=""
                            fullWidth
                            type="text"
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
                          <h7 className={classes.labelFlow}>รวมทั้งหมด</h7>
                        </GridItem>
                        <GridItem xs={12} sm={12} md={2}>
                          <TextField
                            id="date"
                            label=""
                            type="text"
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
                      <DataTable country={this.state.country}/>
                    </CardBody>
                  </GridItem>
                </GridContainer>
              </CardBody>
              <CardFooter className={classes.positionButton}>
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
                  <Modalform3 dataTravelReq={this.state}/>
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
