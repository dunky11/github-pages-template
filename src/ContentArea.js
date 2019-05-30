import React from "react";
import PropTypes from "prop-types";
import config from "./config";

function ContentArea(props) {
  const { selectedTab } = props;
  for (var i = 0; i < config.items.length; i++) {
    if (config.items[i].label === selectedTab) {
      return config.items[i].content;
    }
  }
}

ContentArea.PropTypes = {
  selectedTab: PropTypes.string.isRequired
};

export default ContentArea;
