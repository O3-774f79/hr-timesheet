import React from "react";
//@antD component
import 'antd/dist/antd.css';
import {
  Table, Input, Popconfirm, Form, Modal, Steps, Icon,
} from 'antd';
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
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

import PersonPinIcon from "@material-ui/icons/PersonPin";
import LibraryBooks from "@material-ui/icons/LibraryBooks";


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
  label:{
    float: "right",
    marginTop: 30
  },
  headerAppBar:{
    backgroundColor: "rgb(255, 230, 204)",
    color: "rgb(0, 0, 0)"
  },
  buttonSubmit: {
    backgroundColor: "rgb(51, 204, 51)",
    color: "rgb(0, 0, 0)",
  },
  positionButton: {
    display:"flex",
    justifyContent:"center"
  }
};

function Modalform(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
           
              <h3 className={classes.cardTitleWhite}>การขอเดินทาง</h3>
              {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
            <CardBody>
            <Steps>
    <Step status="finish" title="Login" icon={<Icon type="user" />} />
    <Step status="finish" title="Verification" icon={<Icon type="solution" />} />
    <Step status="wait" title="Done" icon={<Icon type="smile-o" />} />
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
                <h5 className={classes.label}>รหัสพนักงาน</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    label="รหัสพนักงาน"
                    className={classes.textField}
                    type="email"
                    fullWidth
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <h5 className={classes.label}>ชื่อ :</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    label="ชื่อ"
                    className={classes.textField}
                    type="email"
                    name="email"
                    fullWidth
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <h5 className={classes.label}>ชื่อสกุล :</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    label="ชื่อสกุล"
                    className={classes.textField}
                    type="email"
                    name="email"
                    fullWidth
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    />
                </GridItem>
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={1}>
                <h5 className={classes.label}>ฝ่าย :</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    label="ฝ่าย"
                    className={classes.textField}
                    type="email"
                    fullWidth
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <h5 className={classes.label}>แผนก :</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    label="แผนก"
                    className={classes.textField}
                    type="email"
                    name="email"
                    fullWidth
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <h5 className={classes.label}>ระดับ :</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    label="ระดับ"
                    className={classes.textField}
                    type="email"
                    name="email"
                    fullWidth
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    />
                </GridItem>
              </GridContainer>
                </CardBody>           
                </GridItem>
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <AppBar className={classes.headerAppBar}  position="static">
                    <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit">
                       <LibraryBooks /> ข้อมูลการเดินทาง
                    </Typography>
                    </Toolbar>
                </AppBar>
                <CardBody>
                <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                <h5 className={classes.label}>จุดประสงการเดินทาง :</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    id="outlined-email-input"
                    label="จุดประสงการเดินทาง"
                    className={classes.textField}
                    type="email"
                    fullWidth
                    name="email"
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <h5 className={classes.label}>ประเภทงาน :</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    label="ประเภทงาน"
                    className={classes.textField}
                    type="email"
                    name="email"
                    fullWidth
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={1}>
                <h5 className={classes.label}>ตั้งแต่วันที่ :</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    variant="outlined"
                    fullWidth
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <h5 className={classes.label}>ถึงวันที่ :</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    variant="outlined"
                    fullWidth
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={1}>
                <h5 className={classes.label}>เวลาเริ่มต้น :</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                    <TextField
                        id="time"
                        // label="เวลาเริ่มต้น"
                        type="time"
                        // defaultValue="07:30"
                        variant="outlined"
                        fullWidth
                        className={classes.textField}
                        InputLabelProps={{
                        shrink: true,
                        }}
                        inputProps={{
                        step: 600, // 5 min
                        }}
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <h5 className={classes.label}>เวลาสิ้นสุด :</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="time"
                    // label="เวลาสิ้นสุด"
                    type="time"
                    // defaultValue="07:30"
                    variant="outlined"
                    fullWidth
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                    inputProps={{
                    step: 600, // 5 min
                    }}
                />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={1}>
                <h5 className={classes.label}>ศูนย์ต้นทุน :</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    label="ศูนย์ต้นทุน"
                    className={classes.textField}
                    type="email"
                    name="email"
                    fullWidth
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <h5 className={classes.label}>ศูนย์ต้นทุนอื่น</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    label="ศูนย์ต้นทุนอื่น"
                    className={classes.textField}
                    type="email"
                    name="email"
                    fullWidth
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={1}>
                <h5 className={classes.label}>เดินทางไปประเทศ</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    label="เดินทางไปประเทศ"
                    className={classes.textField}
                    type="email"
                    name="email"
                    fullWidth
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <h5 className={classes.label}>จังหวัด</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    label="จังหวัด"
                    className={classes.textField}
                    type="email"
                    name="email"
                    fullWidth
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={1}>
                <h5 className={classes.label}>อัตราแลกเงิน</h5>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="outlined-email-input"
                    label="อัตราแลกเงิน"
                    className={classes.textField}
                    type="email"
                    name="email"
                    fullWidth
                    autoComplete="email"
                    margin="normal"
                    variant="outlined"
                    />
                </GridItem>
              </GridContainer>
                </CardBody>           
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter>
                <div className={classes.positionButton}>
              <Button className={classes.buttonSubmit}>ตกลง</Button>
              </div>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(Modalform);
