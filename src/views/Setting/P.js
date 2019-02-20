import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
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
  textField:{
    width: 300,
  }

};

class S extends Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
      };
    
      handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };
  render(){
    const { classes } = this.props;
  return (
      <div>
            <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                <h4>ผู้ปฏิบัติงาน4</h4>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    id="standard-name"
                    label="ค่าเบี้ยเลี้ยงในประเทศ (THB)"
                    className={classes.textField}
                    value={"200"}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    id="standard-name"
                    label="ค่าเบี้ยเลี้ยงต่างประเทศ Zone A (US)"
                    className={classes.textField}
                    value={"90"}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />
                </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={2}></GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    id="standard-name"
                    label="ค่าเบี้ยเลี้ยงต่างประเทศ Zone B"
                    className={classes.textField}
                    value={"80"}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    id="standard-name"
                    label="ค่าเบี้ยเลี้ยงต่างประเทศ Zone C"
                    className={classes.textField}
                    value={"70"}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />
                </GridItem>   
              </GridContainer>
              <Divider />
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                <h4>ผู้ปฏิบัติงาน3</h4>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    id="standard-name"
                    label="ค่าเบี้ยเลี้ยงในประเทศ (THB)"
                    className={classes.textField}
                    value={"800"}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    id="standard-name"
                    label="ค่าเบี้ยเลี้ยงต่างประเทศ Zone A (US)"
                    className={classes.textField}
                    value={"80"}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />
                </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={2}></GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    id="standard-name"
                    label="ค่าเบี้ยเลี้ยงต่างประเทศ Zone B"
                    className={classes.textField}
                    value={"70"}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    id="standard-name"
                    label="ค่าเบี้ยเลี้ยงต่างประเทศ Zone C"
                    className={classes.textField}
                    value={"100"}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />
                </GridItem>   
              </GridContainer>
              <Divider />
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                <h4>ผู้ปฏิบัติงาน2</h4>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    id="standard-name"
                    label="ค่าเบี้ยเลี้ยงในประเทศ (THB)"
                    className={classes.textField}
                    value={"600"}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    id="standard-name"
                    label="ค่าเบี้ยเลี้ยงต่างประเทศ Zone A (US)"
                    className={classes.textField}
                    value={"70"}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />
                </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={2}></GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    id="standard-name"
                    label="ค่าเบี้ยเลี้ยงต่างประเทศ Zone B"
                    className={classes.textField}
                    value={"100"}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    id="standard-name"
                    label="ค่าเบี้ยเลี้ยงต่างประเทศ Zone C"
                    className={classes.textField}
                    value={"90"}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />
                </GridItem>   
              </GridContainer>
              <Divider />
              <GridContainer>
                <GridItem xs={12} sm={12} md={2}>
                <h4>ผู้ปฏิบัติงาน1</h4>
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    id="standard-name"
                    label="ค่าเบี้ยเลี้ยงในประเทศ (THB)"
                    className={classes.textField}
                    value={"400"}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    id="standard-name"
                    label="ค่าเบี้ยเลี้ยงต่างประเทศ Zone A (US)"
                    className={classes.textField}
                    value={"100"}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />
                </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={2}></GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    id="standard-name"
                    label="ค่าเบี้ยเลี้ยงต่างประเทศ Zone B"
                    className={classes.textField}
                    value={"90"}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                <TextField
                    id="standard-name"
                    label="ค่าเบี้ยเลี้ยงต่างประเทศ Zone C"
                    className={classes.textField}
                    value={"80"}
                    onChange={this.handleChange('name')}
                    margin="normal"
                    />
                </GridItem>   
              </GridContainer>
              <Divider />
              </div>
  )
}
}

export default withStyles(styles)(S);