import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import config from "../../config.js";

const styles = theme => ({
  grow: {
    flexGrow: 1
  },
  marginRight: {
    marginRight: theme.spacing.unit
  },
  menuLink: {
    textDecoration: "none",
    color: theme.palette.common.white
  }
});

function Navbar(props) {
  const { classes, switchTab } = props;
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" color="inherit" className={classes.grow}>
          {config.title}
        </Typography>
        {config.items.length > 1
          ? config.items.map((element, index) => (
              <Button
                color="inherit"
                size="large"
                className={
                  index !== config.items.length ? classes.marginRight : null
                }
                onClick={() => {
                  switchTab(element.label);
                }}
                key={element.label}
              >
                {element.label}
              </Button>
            ))
          : null}
      </Toolbar>
    </AppBar>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  switchTab: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(Navbar);
