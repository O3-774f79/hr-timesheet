import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import TextField from "@material-ui/core/TextField";
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

function SimpleExpansionPanel(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
          <Typography className={classes.heading}>ค่าอาหาร</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
          <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="ค่าอาหารมื้อเช้า"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-uncontrolled"
          label="ค่าอาหารมื้อกลางวัน"
          className={classes.textField}
          margin="normal"
        />
          <TextField
          id="standard-uncontrolled"
          label="ค่าอาหารมื้อเย็น"
          className={classes.textField}
          margin="normal"
        />
         </form>
         <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-name"
          label="ค่าเครื่องดื่มมื้อเช้า"
          className={classes.textField}
          margin="normal"
        />

        <TextField
          id="standard-uncontrolled"
          label="ค่าเครื่องดื่มกลางวัน"
          className={classes.textField}
          margin="normal"
        />
          <TextField
          id="standard-uncontrolled"
          label="ค่าเครื่องดื่มเย็น"
          className={classes.textField}
          margin="normal"
        />
         </form>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel>
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
        />

        <TextField
          id="standard-uncontrolled"
          label="สถานที่"
          className={classes.textField}
          margin="normal"
        />
          <TextField
          id="standard-uncontrolled"
          label="ความสัมพันธ์(2)"
          className={classes.textField}
          margin="normal"
        />
         <TextField
          id="standard-name"
          label="วัตถุประสงค์ (3)"
          className={classes.textField}
          margin="normal"
        />
         </form>
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

SimpleExpansionPanel.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleExpansionPanel);