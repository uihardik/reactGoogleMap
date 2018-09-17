import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Storage from "@material-ui/icons/Storage";
import LocationOn from "@material-ui/icons/LocationOn";
import LocationSearching from "@material-ui/icons/LocationSearching";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import InfoArea from "components/InfoArea/InfoArea.jsx";

import productStyle from "assets/jss/material-kit-react/views/landingPageSections/productStyle.jsx";

class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Let's talk application</h2>
            <h5 className={classes.description}>
              This is the google map and matrial base used application where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn't scroll to get here. Add a button if you want
              the user to see more.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Search Location"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={LocationSearching}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Location"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={LocationOn}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Store Location"
                description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
                icon={Storage}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
