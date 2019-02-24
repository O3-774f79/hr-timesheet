import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from "@material-ui/core/TextField";
import Button from "components/CustomButtons/Button.jsx";
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
const styles = theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: 20
  }
});

class SimpleExpansionPanel extends React.Component {
  state = {
    expanded: 'panel1',
    expressway:'',
    travelSum: 0,
    user:{},
    data: {},
    dataSetting_income_th: '',
    dataSetting_income_A: '',
    dataSetting_income_B: '',
    dataSetting_income_C: '',
    dataSetting_place_TH: '',
    dataSetting_place_A: '',
    dataSetting_place_B: '',
    dataSetting_place_C: '',
    dataSetting_costume: '',
    dataSetting_oil: '',
    dataSetting_taxi: '',
    dataSetting_car: '',
    dataSetting_expressway:'',
    dataSetting_wash_pard:'',
    income_th: '',
    FlightTicket:'',
    income_A: '',
      income_B: '',
      income_C: '',
      place_TH: '',
      place_A: '',
      place_B: '',
      place_C: '',
      costume: '',
      oil: '',
      taxi: '',
      car: '',
      wash_pard:'',
      tax:'',
      bugetPlace: '',
      food_morning:'',
      food_afternoon:'',
      food_diner:'',
      drink_morning:'',
      drink_afternoon:'',
      drink_diner:'',
      cd: '',
      picture: '',
      type:'',
      place:'',
      target:'',
      relation:'',
      helperText: '',
      country:'',
      inregion: '',
      allowances: '',
      exchangeDate:''
  };
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  componentDidMount(){
   const user = sessionStorage.getItem("user")
   const dataMaster = sessionStorage.getItem("setting_S")
   const dataMasterS = JSON.parse(dataMaster)
   const datauser = JSON.parse(user)
   console.log(dataMasterS)
   if(datauser.level==="4"){
     this.setState({
       dataSetting_expressway:dataMasterS.expressway_4,
       dataSetting_income_th:dataMasterS.income_th_4,
       dataSetting_income_A:dataMasterS.income_A_4,
       dataSetting_income_B:dataMaster.income_B_4,
       dataSetting_income_C:dataMasterS.income_C_4,
       dataSetting_place_TH:dataMasterS.place_TH_4,
       dataSetting_place_A:dataMasterS.place_A_4,
       dataSetting_place_B:dataMasterS.place_B_4,
       dataSetting_place_C:dataMasterS.place_C_4,
       dataSetting_costume:dataMasterS.costume_4,
       dataSetting_oil:dataMasterS.oil_4,
       dataSetting_taxi:dataMasterS.taxi_4,
       dataSetting_car:dataMasterS.car_4,
       dataSetting_wash_pard:dataMasterS.wash_pard_4
      })
   }
   }
   
  onhandleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };
  onhandleChangeExpressway = event => {
    this.setState({ expressway: event.target.value })
    if(event.target.value>this.state.dataSetting_expressway){
      this.setState({ 
        expressway: this.state.dataSetting_expressway })
    }
  };
  onhandleChangeOil = event => {
    this.setState({ oil: event.target.value })
    if(event.target.value>this.state.dataSetting_oil){
      this.setState({ 
        oil: this.state.dataSetting_oil })
    }
  };
  onhandleChangePark= event => {
    this.setState({ wash_pard: event.target.value })
    if(event.target.value>this.state.dataSetting_wash_pard){
      this.setState({ 
        wash_pard: this.state.dataSetting_oil })
    }
  };
  onhandleChangeTaxi = event => {
    this.setState({ taxi: event.target.value })
    if(event.target.value>this.state.dataSetting_taxi){
      this.setState({ 
        taxi: this.state.dataSetting_taxi })
    }
  };
  onhandleChangeBugetPlace = event => {
    this.setState({ bugetPlace: event.target.value })
    if(this.state.country==="a"){
      if(event.target.value>this.state.dataSetting_place_A){
        this.setState({ 
          bugetPlace: this.state.dataSetting_place_A })
      }
    } else if(this.state.country==="b"){
      if(event.target.value>this.state.dataSetting_place_B){
        this.setState({ 
          bugetPlace: this.state.dataSetting_place_B })
      }
    } else if(this.state.country==="c"){
      if(event.target.value>this.state.dataSetting_place_C){
        this.setState({ 
          bugetPlace: this.state.dataSetting_place_C })
      }
    }else if(this.state.country==="th"){
      if(event.target.value>this.state.dataSetting_place_TH){
        this.setState({ 
          bugetPlace: this.state.dataSetting_place_TH })
      }
    }
  };
  onhandleChangeallowances = event =>{
    this.setState({allowances:event.target.value})
    if(this.state.country==="a"){
      if(event.target.value>this.state.dataSetting_place_A){
        this.setState({ 
          allowances: this.state.dataSetting_place_A })
      }
    } else if(this.state.country==="b"){
      if(event.target.value>this.state.dataSetting_place_B){
        this.setState({ 
          allowances: this.state.dataSetting_place_B })
      }
    } else if(this.state.country==="c"){
      if(event.target.value>this.state.dataSetting_place_C){
        this.setState({ 
          allowances: this.state.dataSetting_place_C })
      }
    }else if(this.state.inregion===1){
      if(event.target.value>this.state.dataSetting_place_TH){
        this.setState({ 
          allowances: this.state.dataSetting_place_TH })
      }
    }
  }
  handleChangeSelect = event => {
    this.setState({ country: event.target.value,bugetPlace:'' });
  };
  handleChangeSelectProvince  = event => {
    this.setState({inregion: event.target.value,allowances:'' })
  }
  onhandleChangeCustume= event=>{
    this.setState({costume:event.target.value})
    if(event.target.value>this.state.dataSetting_costume){
      this.setState({ 
        costume: this.state.dataSetting_costume})
    }
  }
  render(){
  const { classes } = this.props;
  const {expanded} = this.state
  return (
    <div className={classes.root}>
          <ExpansionPanel
              square
              expanded={expanded === 'panel1'}
              onChange={this.handleChange('panel1')}
            >
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>ค่าเบี้ยเลี้ยง</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              <form className={classes.container} noValidate autoComplete="off">
              <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">เดินทาง</InputLabel>
                    <Select
                      value={this.state.inregion}
                      onChange={this.handleChangeSelectProvince}
                      style={{width:200,marginTop: 30}}
                      inputProps={{
                        name: 'age',
                        id: 'age-simple',
                      }}
                    >
                      <MenuItem value={2}>เดินทางไป ประเทศ</MenuItem>
                      <MenuItem value={1}>เดินทางไป จังหวัด</MenuItem>
                     
                    </Select>
                  </FormControl>
                  {this.state.inregion===1?<TextField
                    id="standard-name"
                    label="จังหวัด"
                    className={classes.textField}
                    onChange={this.onhandleChangeExpressway}
                    value={this.state.expressway}
                    type="text"
                    margin="normal"
                  />:
                  <span>
                   <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">ประเทศ</InputLabel>
                    <Select
                      value={this.state.country}
                      onChange={this.handleChangeSelect}
                      style={{width:200,marginTop: 30}}
                      inputProps={{
                        name: 'age',
                        id: 'age-simple',
                      }}
                    >
                      <MenuItem value="">
                        <em>ประเทศ</em>
                      </MenuItem>
                      <MenuItem value={"a"}>United Kingdom</MenuItem>
                      <MenuItem value={"b"}>Vatican City State</MenuItem>
                      <MenuItem value={"c"}>Myanmar</MenuItem>Myanmar
                    </Select>
                  </FormControl>
                       <TextField
                  id="standard-name"
                  label="อัตราแลกเงิน ณ วันที่"
                  className={classes.textField}
                  onChange={this.handleChange('exchangeDate')}
                  value={this.state.exchangeDate}
                  width={200}
                  type="date"
                  margin="normal"
                />
                       <TextField
                  id="standard-name"
                  label="อัตราแลกเปลี่ยน/บาท"
                  className={classes.textField}
                  onChange={this.onc}
                  value={this.state.expressway}
                  type="text"
                  margin="normal"
                />
                </span>
                }
                
         </form>
         <form>
         <TextField
                  id="standard-name"
                  label="เบี้ยเลี้ยง"
                  className={classes.textField}
                  onChange={this.onhandleChangeallowances}
                  value={this.state.allowances}
                  type="text"
                  margin="normal"
                />
         </form>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
          <ExpansionPanel
              square
              expanded={expanded === 'panel1'}
              onChange={this.handleChange('panel1')}
            >
          >
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography className={classes.heading}>ค่าเดินทางและพาหนะ บาท</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="ค่าทางด่วน"
              className={classes.textField}
              onChange={this.onhandleChangeExpressway}
              value={this.state.expressway}
              type="number"
              margin="normal"
            />
            <TextField
              id="standard-uncontrolled"
              label="ค่าจอด รถล้างรถ"
              className={classes.textField}
              onChange={this.onhandleChangePark}
              value={this.state.wash_pard}
              margin="normal"
            />
              <TextField
              id="standard-uncontrolled"
              label="ค่าแท็กซี่"
              className={classes.textField}
              onChange={this.onhandleChangeTaxi}
              value={this.state.taxi}
              margin="normal"
            />
            </form>
            <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="ค่าภาษีสนามบิน"
              onChange={this.onhandleChange('tax')}
              value={this.state.tax}
              className={classes.textField}
              margin="normal"
            />

            <TextField
              id="standard-uncontrolled"
              label="ค่าตั๋วสนามบิน"
              className={classes.textField}
              onChange={this.onhandleChange('FlightTicket')}
              value={this.state.FlightTicket}
              margin="normal"
            />
              <TextField
              id="standard-uncontrolled"
              label="ค่าน้ำมัน"
              onChange={this.onhandleChangeOil}
              value={this.state.oil}
              className={classes.textField}
              margin="normal"
            />
         </form>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel 
          square
          expanded={expanded === 'panel2'}
          onChange={this.handleChange('panel2')}
        >
      >
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>ค่าอาหาร</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="ค่าอาหารมื้อเช้า"
          onChange={this.onhandleChange('food_morning')}
          value={this.state.food_morning}
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-uncontrolled"
          label="ค่าอาหารมื้อกลางวัน"
          onChange={this.onhandleChange('food_afternoon')}
          value={this.state.food_afternoon}
          className={classes.textField}
          margin="normal"
        />
          <TextField
          id="standard-uncontrolled"
          label="ค่าอาหารมื้อเย็น"
          onChange={this.onhandleChange('food_diner')}
          value={this.state.food_diner}
          className={classes.textField}
          margin="normal"
        />
         </form>
         <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="ค่าเครื่องดื่มมื้อเช้า"
          onChange={this.onhandleChange('drink_morning')}
          value={this.state.drink_morning}
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-uncontrolled"
          label="ค่าเครื่องดื่มกลางวัน"
          className={classes.textField}
          onChange={this.onhandleChange('drink_afternoon')}
          value={this.state.drink_afternoon}
          margin="normal"
        />
          <TextField
          id="standard-uncontrolled"
          label="ค่าเครื่องดื่มเย็น"
          onChange={this.onhandleChange('drink_diner')}
          value={this.state.drink_diner}
          className={classes.textField}
          margin="normal"
        />
         </form>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel     
          square
          expanded={expanded === 'panel3'}
          onChange={this.handleChange('panel3')}
        >>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>ค่ารับรอง</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="ประเภท (1)"
          className={classes.textField}
          margin="normal"
          onChange={this.onhandleChange('type')}
          value={this.state.Type}
        />

        <TextField
          id="standard-uncontrolled"
          label="สถานที่"
          className={classes.textField}
          onChange={this.onhandleChange('place')}
          value={this.state.Place}
          margin="normal"
        />
          <TextField
          id="standard-uncontrolled"
          label="ความสัมพันธ์(2)"
          className={classes.textField}
          onChange={this.onhandleChange('relation')}
          value={this.state.relation}
          margin="normal"
        />
         <TextField
          id="standard-name"
          label="วัตถุประสงค์ (3)"
          className={classes.textField}
          onChange={this.onhandleChange('target')}
          value={this.state.target}
          margin="normal"
        />
         </form>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel     
          square
          expanded={expanded === 'panel4'}
          onChange={this.handleChange('panel4')}
        >>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>ค่าที่พัก</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <form className={classes.container} noValidate autoComplete="off">
                  <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="age-simple">ประเทศที่พัก</InputLabel>
                    <Select
                      value={this.state.country}
                      onChange={this.handleChangeSelect}
                      style={{width:200,marginTop: 30}}
                      inputProps={{
                        name: 'age',
                        id: 'age-simple',
                      }}
                    >
                      <MenuItem value="">
                        <em>ประเทศ</em>
                      </MenuItem>
                      <MenuItem value={"a"}>United Kingdom</MenuItem>
                      <MenuItem value={"b"}>Vatican City State</MenuItem>
                      <MenuItem value={"th"}>Thailand</MenuItem>Myanmar
                      <MenuItem value={"c"}>Myanmar</MenuItem>Myanmar
                    </Select>
                  </FormControl>
                  <TextField
                  id="standard-uncontrolled"
                  label="ค่าที่พัก"
                  className={classes.textField}
                  onChange={this.onhandleChangeBugetPlace}
                  value={this.state.bugetPlace}
                  margin="normal"
                />            
         </form>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>

      <ExpansionPanel     
          square
          expanded={expanded === 'panel4'}
          onChange={this.handleChange('panel4')}
        >>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>อื่นๆ</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="ค่าอัดรูป"
          className={classes.textField}
          onChange={this.onhandleChange('picture')}
          value={this.state.picture}
          margin="normal"
        />

        <TextField
          id="standard-uncontrolled"
          label="ค่าแผ่น CD"
          className={classes.textField}
          onChange={this.onhandleChange('cd')}
          value={this.state.cd}
          margin="normal"
        />
           <TextField
          id="standard-uncontrolled"
          label="ค่าแต่งกาย"
          className={classes.textField}
          onChange={this.onhandleChangeCustume}
          value={this.state.costume}
          margin="normal"
        />
         </form>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Button  className={classes.buttonSubmit} style={{align:"right",fontSize:16}}>ตกลง
       </Button>
    </div>
  );
}
}
SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);