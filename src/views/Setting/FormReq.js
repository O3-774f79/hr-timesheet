import React, { Component } from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Tabs from './Tabs'

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
  },
  CardFooter:{
    display: "flex",
    justifyContent: "center"  
  },
  ListMenu:{
    cursor: "pointer"
  }

};

class UserProfile extends Component {
    state = {
        name: 'Cat in the Hat',
        age: '',
        multiline: 'Controlled',
        currency: 'EUR',
        Comp: "บริษัท บุญรอด บริวเวอรี่ จำกัด"
      };
    
      handleChange = name => event => {
        this.setState({ [name]: event.target.value });
      };
      handleCompClick = (k)=> {
          this.setState({Comp:k})
      }
      
  render(){
    const { classes } = this.props;
  return (
    <div>
      <GridContainer>
      <GridItem xs={12} sm={12} md={3}>
          <Card profile>
            <CardBody profile>
            <h4>บริษัท</h4>
            <List component="nav" className={classes.root}>
                <ListItem button onClick={()=>this.handleCompClick("บริษัท บุญรอด บริวเวอรี่ จำกัด")} >
                    <ListItemText primary="บริษัท บุญรอด บริวเวอรี่ จำกัด" />
                </ListItem>
                <Divider light/>
                <ListItem button onClick={()=>this.handleCompClick("บริษัท สิงห์ คอร์เปอเรชั่น จำกัด")}>
                    <ListItemText primary="บริษัท สิงห์ คอร์เปอเรชั่น จำกัด" />
                </ListItem>
                <Divider light/>
                <ListItem button onClick={()=>this.handleCompClick("บริษัท บุญรอดเทรดดิ้ง จำกัด")}>
                    <ListItemText primary="บริษัท บุญรอดเทรดดิ้ง จำกัด" />
                </ListItem>
                <Divider light />
                <ListItem button onClick={()=>this.handleCompClick("บริษัท บุญรอดเทรดดิ้ง อินเตอร์เนชั่นแนล จำกัด")}>
                    <ListItemText primary="บริษัท บุญรอดเทรดดิ้ง อินเตอร์เนชั่นแนล จำกัด" />
                </ListItem>
                <Divider light />
                <ListItem button onClick={()=>this.handleCompClick("บริษัท สิงห์ อินเตอร์เนชั่นแนล เฮดควอร์เตอร์ จำกัด")}>
                    <ListItemText primary="บริษัท สิงห์ อินเตอร์เนชั่นแนล เฮดควอร์เตอร์ จำกัด" />
                </ListItem>
                <Divider light />
                <ListItem button onClick={()=>this.handleCompClick("บริษัท เอส บี พี ดิจิทัล เซอร์วิส จำกัด ")}>
                    <ListItemText primary="บริษัท เอส บี พี ดิจิทัล เซอร์วิส จำกัด " />
                </ListItem>
                <Divider light />
                <ListItem button onClick={()=>this.handleCompClick("บริษัท บีอาร์เอฟ โลจิสติกส์ จำกัด")}>
                    <ListItemText primary="บริษัท บีอาร์เอฟ โลจิสติกส์ จำกัด" />
                </ListItem>
                <Divider light />
                <ListItem button onClick={()=>this.handleCompClick("บริษัท บุญรอด ซัพพลายเชน จำกัด")}>
                    <ListItemText primary="บริษัท บุญรอด ซัพพลายเชน จำกัด" />
                </ListItem>
                <Divider light />
                <ListItem button onClick={()=>this.handleCompClick("บริษัท ฟู้ด แฟคเตอร์ จำกัด")}>
                    <ListItemText primary="บริษัท ฟู้ด แฟคเตอร์ จำกัด" />
                </ListItem>
                </List>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={8}>
          <Card>
            <CardHeader color="info">
              <h3 className={classes.cardTitleWhite}>ข้อมูลส่วนกลาง : {this.state.Comp}</h3>
              <p className={classes.cardCategoryWhite}></p>
            </CardHeader>
            <CardBody>
            <Tabs />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>

    </div>
  );
}
}

export default withStyles(styles)(UserProfile);
