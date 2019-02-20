import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import PersonPinIcon from "@material-ui/icons/PersonPin";
import Typography from "@material-ui/core/Typography";

import S from "./S";
import K from "./K";
import P from "./P";
function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = {
  root: {
    flexGrow: 1,
    width: "100%"
  }
};

class ScrollableTabsButtonForce extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={this.handleChange}
            variant="scrollable"
            scrollButtons="on"
            indicatorColor="primary"
            textColor="primary"
          >
            <Tab label="ระดับ ส" icon={<PersonPinIcon />} />
            <Tab label="ระดับ ก" icon={<PersonPinIcon />} />
            <Tab label="ระดับ ผู้ปฏิบัติงาน" icon={<PersonPinIcon />} />
          </Tabs>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <S />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <K />
          </TabContainer>
        )}
        {value === 2 && (
          <TabContainer>
            <P />
          </TabContainer>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(ScrollableTabsButtonForce);
