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
      expressway:'',
      wash_pard:'',
      tax:'',
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
      relation:''

  };
  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false,
    });
  };
  componentDidMount(){
   const user = sessionStorage.getItem("user")
   const datauser = JSON.parse(user)
   this.setState({user:datauser})
   const dataMaster = sessionStorage.getItem("setting_S")
   const dataMasterS = JSON.parse(dataMaster)
   }
  onhandleChange = name => event => {
    event.target.value>100?
    this.setState({test:1000}):
    this.setState({ [name]: event.target.value });
  };
  _onChangeExpress = event => {
    console.log(this.state)
    console.log("123",this.state.datasetting_expressway)
    event.target.value>this.state.dataSetting_expressway?
    this.setState({expressway:this.state.dataSetting_expressway}):
    this.setState({expressway: event.target.value });
  };
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
              <Typography className={classes.heading}>ค่าเดินทางและพาหนะ บาท</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography>
              <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="ค่าทางด่วน"
              className={classes.textField}
              onChange={this.onhandleChange('expressway')}
              value={this.state.expressway}
              type="number"
              margin="normal"
            />
            <TextField
              id="standard-uncontrolled"
              label="ค่าจอด รถล้างรถ"
              className={classes.textField}
              onChange={this.onhandleChange('wash_pard')}
              value={this.state.wash_pard}
              margin="normal"
            />
              <TextField
              id="standard-uncontrolled"
              label="ค่าแท็กซี่"
              className={classes.textField}
              onChange={this.onhandleChange('texi')}
              value={this.state.taxi}
              margin="normal"
            />
            </form>
            <form className={classes.container} noValidate autoComplete="off">
            <TextField
              id="standard-name"
              label="ค่าภาษีสนามบิน"
              onChange={this.onhandleChange('wash_pard')}
              value={this.state.wash_pard}
              className={classes.textField}
              margin="normal"
            />

            <TextField
              id="standard-uncontrolled"
              label="ค่าตั๋วสนามบิน"
              className={classes.textField}
              onChange={this.onhandleChange('tax')}
              value={this.state.tax}
              margin="normal"
            />
              <TextField
              id="standard-uncontrolled"
              label="ค่าน้ำมัน"
              onChange={this.onhandleChange('oil')}
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
         </form>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <Button color="success" className={classes.buttonSubmit} style={{float:"right"}}>ตกลง
       </Button>
    </div>
  );
}
}
SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);