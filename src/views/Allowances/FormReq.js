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
import DataTable from './Table'

import PersonPinIcon from "@material-ui/icons/PersonPin";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Modalform3 from "./Modalform3";
import { Divider } from "@material-ui/core";

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

class FormReq extends React.Component{

  state = { visible: false }


  showModal = () => {
    this.setState({
      visible: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }


  render()
  {const { classes } = this.props;
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
                  <GridItem xs={12} sm={12} md={1}>
                  <h7 className={classes.label}>รหัสพนักงาน</h7>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <TextField
                      id="date"
                      label="รหัสพนักงาน"
                      type="text"
                      fullWidth
                      defaultValue=""
                      className={classes.textField}
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
                      fullWidth          
                      defaultValue=""
                      className={classes.textField}
                  />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={1}>
                  <h7 className={classes.label}>ชื่อสกุล</h7>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <TextField
                      id="date"
                      label="ชื่อสกุล"
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
                  <GridItem xs={12} sm={12} md={1}>
                  <h7 className={classes.label}>ฝ่าย</h7>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <TextField
                      id="date"
                      label="ฝ่าย"
                      type="text"
                      fullWidth
                      defaultValue=""
                      className={classes.textField}
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
                      fullWidth          
                      defaultValue=""
                      className={classes.textField}
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
                  <GridItem xs={12} sm={12} md={1}>
                  <h7 className={classes.label}>วันที่ :</h7>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <TextField
                      id="date"
                      label=""
                      type="date"
                      fullWidth
                      defaultValue=""
                      className={classes.textField}
                      InputLabelProps={{
                      shrink: true,
                      }}
                  />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                  <h7 className={classes.label}>อัตราแลกเงินต่างประเทศ วันที่</h7>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                  <TextField
                      id="date"
                      label=""
                      type="date"               
                      defaultValue=""
                      className={classes.textField}
                  />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={1}>
                  <h7 className={classes.label}>เป็นเงิน</h7>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                  <TextField
                      id="date"
                      label=""
                      type="text"                 
                      defaultValue=""
                      className={classes.textField}
                  />
                  </GridItem>
                  <h7 className={classes.label}>บาท</h7>
                </GridContainer>         
                </CardBody>           
                </GridItem>
              </GridContainer>
              <Divider />
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
              <GridContainer>
              <GridItem xs={12} sm={12} md={12}>
                <CardBody>
                    <DataTable />
                </CardBody>           
                </GridItem>
              </GridContainer>
            </CardBody>
            <CardFooter className={classes.positionButton}>
                <Button color="success"className={classes.buttonSubmit} onClick={this.showModal} >ตกลง</Button>
              <Modal
              style={{marginLeft:"15%" ,marginTop:"10"}}
            
              width="85%"
              visible={this.state.visible}
              onOk={this.handleOk}
              onCancel={this.handleCancel}           
              ><Modalform3 /> </Modal>
            </CardFooter>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
}
export default withStyles(styles)(FormReq);
