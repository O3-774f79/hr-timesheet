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
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Modalform from "./Modalform";

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
  state = { visible: false };

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
                            type="email"
                            fullWidth
                            name="email"
                            margin="normal"
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
                            name="email"
                            fullWidth
                            margin="normal"
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
                            name="email"
                            fullWidth
                            margin="normal"
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
                            fullWidth
                            name="email"
                            margin="normal"
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
                            name="email"
                            fullWidth
                            margin="normal"
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
                            type="email"
                            name="email"
                            fullWidth
                            margin="normal"
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
                            type="email"
                            name="email"
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
                            type="email"
                            name="email"
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
                            type="email"
                            name="email"
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
                            type="email"
                            name="email"
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
                            type="email"
                            name="email"
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
                            type="email"
                            name="email"
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
                <Button color="success" onClick={this.showModal}>
                  ตกลง
                </Button>
                <Modal
                  style={{ marginLeft: "15%", marginTop: "10" }}
                  width="75%"
                  visible={this.state.visible}
                  onOk={this.handleOk}
                  onCancel={this.handleCancel}
                >
                  <Modalform />{" "}
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
