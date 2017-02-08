import React, { Component } from "react";
import { connect } from "react-redux";
import { getVideos } from "../../actions/yearPageActions";
import VideoList from "./VideoList";
import {
  Grid,
  Row,
  ButtonToolbar,
  Button
} from "react-bootstrap/lib";

class YearPage extends Component {
  onYearBtnClick(selectedYear) {
    this.props.dispatch(getVideos(selectedYear));
  }

  render() {
    const { videoID, titles, publishDates, year } = this.props;

    return (
      <Grid className="year-page">
        <Row className="page-title">
          <h2>Top 10 most viewed YouTube videos of {year}</h2>
        </Row>
        <Row className="page-nav">
          <ButtonToolbar>
              <Button onClick={this.onYearBtnClick.bind(this, "all time")}>All time</Button>
              <Button onClick={this.onYearBtnClick.bind(this, "2016")}>2016</Button>
              <Button onClick={this.onYearBtnClick.bind(this, "2015")}>2015</Button>
              <Button onClick={this.onYearBtnClick.bind(this, "2014")}>2014</Button>
              <Button onClick={this.onYearBtnClick.bind(this, "2013")}>2013</Button>
              <Button onClick={this.onYearBtnClick.bind(this, "2012")}>2012</Button>
              <Button onClick={this.onYearBtnClick.bind(this, "2011")}>2011</Button>
              <Button onClick={this.onYearBtnClick.bind(this, "2010")}>2010</Button>
              <Button onClick={this.onYearBtnClick.bind(this, "2009")}>2009</Button>
              <Button onClick={this.onYearBtnClick.bind(this, "2008")}>2008</Button>
              <Button onClick={this.onYearBtnClick.bind(this, "2007")}>2007</Button>
              <Button onClick={this.onYearBtnClick.bind(this, "2006")}>2006</Button>
              <Button onClick={this.onYearBtnClick.bind(this, "2005")}>2005</Button>
          </ButtonToolbar>
        </Row>
        <VideoList videoID={videoID} titles={titles} publishDates={publishDates} />
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  const { videoID, titles, publishDates, year } = state.yearPage;

  return { videoID, titles, publishDates, year };
}

export default connect(mapStateToProps)(YearPage);
