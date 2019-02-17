import React from "react";
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
    marginTop:30
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

function FormReq(props) {
  const { classes } = props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="primary">
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
                <CardBody>
                <GridContainer>
                  <GridItem xs={12} sm={12} md={1}>
                  <h5 className={classes.label}>วันที่ :</h5>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  <TextField
                      id="date"
                      label=""
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
                  <GridItem xs={12} sm={12} md={2}>
                  <h5 className={classes.label}>อัตราแลกเงินต่างประเทศ วันที่</h5>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                  <TextField
                      id="date"
                      label=""
                      type="date"
                      variant="outlined"                 
                      defaultValue=""
                      className={classes.textField}
                  />
                  </GridItem>
                  <GridItem xs={12} sm={12} md={1}>
                  <h5 className={classes.label}>เป็นเงิน</h5>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                  <TextField
                      id="date"
                      label=""
                      type="text"
                      variant="outlined"                 
                      defaultValue=""
                      className={classes.textField}
                  />
                  </GridItem>
                  <h5 className={classes.label}>บาท</h5>
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

export default withStyles(styles)(FormReq);
