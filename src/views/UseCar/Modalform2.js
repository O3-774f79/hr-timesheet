import React,{Component} from "react";
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
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Table2 from "./Table2";

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
    marginTop: 22
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
class Modalform2 extends Component {
  state = {
    visible: false,
    EmpID: "",
    EmpFName: "",
    EmpLName: "",
    EmpGroup: "",
    EmpDepartment: "",
    EmpLevel: "",
    CarID: '',
    Carleange: ''
  };
  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
render(){
const { classes,dataTravelReq } = this.props;
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
                          value={dataTravelReq.EmpID}
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
                          value={dataTravelReq.EmpFName}
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
                          value={dataTravelReq.EmpLName}
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
                            value={dataTravelReq.EmpGroup}
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
                            value={dataTravelReq.EmpDepartment}
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
                            value={dataTravelReq.EmpLevel}
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
              <Table2 />
            </CardBody>
            <CardFooter className={classes.positionButton}>
              <Button color="success" className={classes.buttonSubmit}>
                ส่งอนุมัติ
              </Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
}
export default withStyles(styles)(Modalform2);
