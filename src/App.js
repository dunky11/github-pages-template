import React, { Fragment, PureComponent } from "react";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import Navbar from "./components/navigation/Navbar";
import ContentArea from "./ContentArea";
import config from "./config";

const styles = theme => ({
  contentWrapper: {
    maxWidth: 1400,
    width: "100%",
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  flexBox: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    justifyContent: "center"
  }
});

class App extends PureComponent {
  state = { timChain: null, chain: [], selectedTab: config.items[0].label };

  switchTab = selectedTab => {
    this.setState({ selectedTab });
  };

  render() {
    const { classes } = this.props;
    const { selectedTab } = this.state;
    return (
      <Fragment>
        <Navbar switchTab={this.switchTab} />
        <div className={classes.flexBox}>
          <div className={classes.contentWrapper}>
            <ContentArea selectedTab={selectedTab} />
          </div>
        </div>
      </Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(App);
