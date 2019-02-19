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
import Table2 from './Table2'


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

function Modalform3(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
           
              <h3 className={classes.cardTitleWhite}>การเบิกเบี้ยเลี้ยงภายในและต่างประเทศ</h3>
              {/* <p className={classes.cardCategoryWhite}>Complete your profile</p> */}
            </CardHeader>
            <CardBody>
            <Steps>
    <Step status="finish" title="Emp" icon={<Icon type="user" />} />
    <Step status="finish" title="Manager" icon={<Icon type="solution" />} />
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
                <h7 className={classes.label}>รหัสพนักงาน</h7>
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
                    
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <h7 className={classes.label}>ชื่อ :</h7>
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
                    
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <h7 className={classes.label}>ชื่อสกุล :</h7>
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
                    
                    />
                </GridItem>
              </GridContainer>
              <GridContainer>
              <GridItem xs={12} sm={12} md={1}>
                <h7 className={classes.label}>ฝ่าย :</h7>
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
                    
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <h7 className={classes.label}>แผนก :</h7>
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
                    
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <h7 className={classes.label}>ระดับ :</h7>
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
                <h7 className={classes.label}>จุดประสงการเดินทาง :</h7>
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
                    
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <h7 className={classes.label}>ประเภทงาน :</h7>
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
                    
                    />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={1}>
                <h7 className={classes.label}>ตั้งแต่วันที่ :</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    
                    fullWidth
                    defaultValue=""
                    className={classes.textField}
                    InputLabelProps={{
                    shrink: true,
                    }}
                />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <h7 className={classes.label}>ถึงวันที่ :</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="date"
                    label="Birthday"
                    type="date"
                    
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
                <h7 className={classes.label}>เวลาเริ่มต้น :</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                    <TextField
                        id="time"
                        // label="เวลาเริ่มต้น"
                        type="time"
                        // defaultValue="07:30"
                        
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
                <h7 className={classes.label}>เวลาสิ้นสุด :</h7>
                </GridItem>
                <GridItem xs={12} sm={12} md={3}>
                <TextField
                    id="time"
                    // label="เวลาสิ้นสุด"
                    type="time"
                    // defaultValue="07:30"
                    
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
                <h7 className={classes.label}>ศูนย์ต้นทุน :</h7>
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
                    
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <h7 className={classes.label}>ศูนย์ต้นทุนอื่น</h7>
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
                    
                    />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={1}>
                <h7 className={classes.label}>เดินทางไปประเทศ</h7>
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
                    
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={1}>
                <h7 className={classes.label}>จังหวัด</h7>
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
                    
                    />
                </GridItem>
              </GridContainer>
              <GridContainer>
                <GridItem xs={12} sm={12} md={1}>
                <h7 className={classes.label}>อัตราแลกเงิน</h7>
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
                    />
                </GridItem>
              </GridContainer>
                </CardBody>           
                </GridItem>
              </GridContainer>
              <hr />
                         <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}>
                  <h7 className={classes.label}>รวมค่าเบี้ยเลี้ยง :</h7>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={1}>
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
                  <h7 className={classes.label}>รวมค่าที่พัก</h7>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={1}>
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
                  <h7 className={classes.label}>รวมค่าพาหนะ</h7>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={1}>
                  <TextField
                      id="date"
                      label=""
                      fullWidth
                      type="text"                 
                      defaultValue=""
                      className={classes.textField}
                  />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={1}>
                  <h7 className={classes.label}>รวมค่าใช้รถยนต์ส่วนตัว</h7>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={1}>
                  <TextField
                      id="date"
                      label=""
                      type="text"
                      fullWidth                 
                      defaultValue=""
                      className={classes.textField}
                  />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={1}>
                  <h7 className={classes.label}>รวมค่าทางด่วน</h7>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={1}>
                  <TextField
                      id="date"
                      label=""
                      type="text"
                      fullWidth                 
                      defaultValue=""
                      className={classes.textField}
                  />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={1}>
                  <h7 className={classes.label}>รวมค่าจอด รถล้างรถ</h7>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={1}>
                  <TextField
                      id="date"
                      label=""
                      fullWidth
                      type="text"                 
                      defaultValue=""
                      className={classes.textField}
                  />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={1}>
                  <h7 className={classes.label}>รวมทั้งหมด</h7>
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
            </CardBody>
            <CardBody>
                    <Table2 />

            </CardBody>
            <CardFooter className={classes.positionButton}>      
            <Button colo="success"className={classes.buttonSubmit}>ตกลง</Button>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(Modalform3);
