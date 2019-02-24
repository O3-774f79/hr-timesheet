import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import DataTable from './Table'
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
  }
};

class UserProfile extends React.Component {
  state= {
    userType:{Type:"s",level:"4"},
    dataMasterK:{  
      income_th_4: 1000,
      income_A_4: 130,
      income_B_4: 120,
      income_C_4: 110,
      place_TH_4: 5000,
      place_A_4: 220,
      place_B_4: 99999,
      place_C_4: 99999,
      costume_4: 8000,
      oil_4: 200,
      taxi_4: 6,
      car_4: 1000,
      expressway_4: 1000,
      wash_pard_4: 2000,
  
      income_th_3: 800,
      income_A_3: 120,
      income_B_3: 100,
      income_C_3: 100,
      place_TH_3: 4000,
      place_A_3: 200,
      place_B_3: 180,
      place_C_3: 180,
      costume_3: 8000,
      oil_3: 200,
      taxi_3: 6,
      car_3: 1000,
      expressway_3: 1000,
      wash_pard_3: 2000,
  
      income_th_2: 600,
      income_A_2: 110,
      income_B_2: 100,
      income_C_2: 90,
      place_TH_2: 3000,
      place_A_2:  180,
      place_B_2: 180,
      place_C_2: 200,
      costume_2: 8000,
      oil_2: 200,
      taxi_2: 6,
      car_2: 1000,
      expressway_2: 1000,
      wash_pard_2: 2000,
  
      income_th_1: 400,
      income_A_1: 100,
      income_B_1: 90,
      income_C_1: 80,
      place_TH_1: 2000,
      place_A_1: 160,
      place_B_1: 160,
      place_C_1: 180,
      costume_1: 8000,
      oil_1: 200,
      taxi_1: 6,
      car_1: 1000,
      expressway_1: 1000,
      wash_pard_1: 2000},      
    dataMasterP:{   
      income_th_4: 1000,
      income_A_4: 130,
      income_B_4: 120,
      income_C_4: 110,
      place_TH_4: 5000,
      place_A_4: 220,
      place_B_4: 99999,
      place_C_4: 99999,
      costume_4: 8000,
      oil_4: 200,
      taxi_4: 6,
      car_4: 1000,
      expressway_4: 1000,
      wash_pard_4: 2000,
  
      income_th_3: 800,
      income_A_3: 120,
      income_B_3: 100,
      income_C_3: 100,
      place_TH_3: 4000,
      place_A_3: 200,
      place_B_3: 180,
      place_C_3: 180,
      costume_3: 8000,
      oil_3: 200,
      taxi_3: 6,
      car_3: 1000,
      expressway_3: 1000,
      wash_pard_3: 2000,
  
      income_th_2: 600,
      income_A_2: 110,
      income_B_2: 100,
      income_C_2: 90,
      place_TH_2: 3000,
      place_A_2:  180,
      place_B_2: 180,
      place_C_2: 200,
      costume_2: 8000,
      oil_2: 200,
      taxi_2: 6,
      car_2: 1000,
      expressway_2: 1000,
      wash_pard_2: 2000,
  
      income_th_1: 400,
      income_A_1: 100,
      income_B_1: 90,
      income_C_1: 80,
      place_TH_1: 2000,
      place_A_1: 160,
      place_B_1: 160,
      place_C_1: 180,
      costume_1: 8000,
      oil_1: 200,
      taxi_1: 6,
      car_1: 1000,
      expressway_1: 1000,
      wash_pard_1: 2000,},
    dataMasterS:{    
      income_th_4: 1000,
      income_A_4: 130,
      income_B_4: 120,
      income_C_4: 110,
      place_TH_4: 5000,
      place_A_4: 220,
      place_B_4: 99999,
      place_C_4: 99999,
      costume_4: 8000,
      oil_4: 200,
      taxi_4: 6,
      car_4: 1000,
      expressway_4: 1000,
      wash_pard_4: 2000,
  
      income_th_3: 800,
      income_A_3: 120,
      income_B_3: 100,
      income_C_3: 100,
      place_TH_3: 4000,
      place_A_3: 200,
      place_B_3: 180,
      place_C_3: 180,
      costume_3: 8000,
      oil_3: 200,
      taxi_3: 6,
      car_3: 1000,
      expressway_3: 1000,
      wash_pard_3: 2000,
  
      income_th_2: 600,
      income_A_2: 110,
      income_B_2: 100,
      income_C_2: 90,
      place_TH_2: 3000,
      place_A_2:  180,
      place_B_2: 180,
      place_C_2: 200,
      costume_2: 8000,
      oil_2: 200,
      taxi_2: 6,
      car_2: 1000,
      expressway_2: 1000,
      wash_pard_2: 2000,
  
      income_th_1: 400,
      income_A_1: 100,
      income_B_1: 90,
      income_C_1: 80,
      place_TH_1: 2000,
      place_A_1: 160,
      place_B_1: 160,
      place_C_1: 180,
      costume_1: 8000,
      oil_1: 200,
      taxi_1: 6,
      car_1: 1000,
      expressway_1: 1000,
      wash_pard_1: 2000,},
  }
  componentDidMount(){
    sessionStorage.setItem("user", JSON.stringify(this.state.userType))
    sessionStorage.setItem("setting_S", JSON.stringify(this.state.dataMasterS))
    sessionStorage.setItem("setting_P", JSON.stringify(this.state.dataMasterP))
    sessionStorage.setItem("setting_K", JSON.stringify(this.state.dataMasterK))
  }
  render(){
   const { classes } = this.props;
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={12} md={12}>
          <Card>
            <CardHeader color="info">
              <h3 className={classes.cardTitleWhite}>Inbox</h3>
              <p className={classes.cardCategoryWhite}></p>
            </CardHeader>
            <CardBody>
             <DataTable />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}
}
export default withStyles(styles)(UserProfile);
