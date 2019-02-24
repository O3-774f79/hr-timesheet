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
import FoodValue from './FoodValue'
import PersonPinIcon from "@material-ui/icons/PersonPin";
import LibraryBooks from "@material-ui/icons/LibraryBooks";
import Table2 from "./Table2";
import { Select } from 'antd';

const Option = Select.Option;
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
    country: 1,
    countryText: "จังหวัด"
  }
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
  render(){
  const { classes } = this.props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h3 className={classes.cardTitleWhite}>
                รายการเบิกรายการค่าใช้จ่าย
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
                        <h7 className={classes.label}>วันที่เริ่มปฏิบัติงาน</h7>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}>
                        <TextField
                          id="date"
                          label="  "
                          type="date"
                          fullWidth
                          defaultValue=""
                          className={classes.textField}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={1}>
                        <h7 className={classes.label}>วันที่สิ้นสุด</h7>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}>
                        <TextField
                          id="date"
                          label="  "
                          type="date"
                          fullWidth
                          defaultValue=""
                          className={classes.textField}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={2}>
                        <h7 className={classes.label}>เวลาเริ่มปฎิบัติงาน</h7>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={1}>
                        <TextField
                          id="date"
                          label="  "
                          type="time"
                          fullWidth
                          defaultValue=""
                          className={classes.textField}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={1}>
                        <h7 className={classes.label}>เวลาสิ้นสุด</h7>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={1}>
                        <TextField
                          id="date"
                          label=" "
                          fullWidth
                          type="time"
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
                        <h7 className={classes.labelFlow}>รายละเอียด</h7>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={10}>
                        <TextField
                          id="date"
                          label=""
                          type="text"
                          multiline
                          rowsMax="4"
                          fullWidth
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

                      <FoodValue /> 
                      
                      </GridItem>
                    </GridContainer>
                  </CardBody>
                </GridItem>
              </GridContainer>
           
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
}
export default withStyles(styles)(Modalform3);
