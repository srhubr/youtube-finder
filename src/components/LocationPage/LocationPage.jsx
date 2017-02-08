import React from 'react';
import { connect } from 'react-redux';
import GMap from './GMap';
import SearhForm from './SearhForm';
import VideoList from './VideoList';
import { Grid, Row, Col } from 'react-bootstrap/lib';

const LocationPage = props => (
  <Grid className="location-page">
    <Row className="page-title">
      <h2>Search YouTube videos by filming location</h2>
    </Row>
    <Row className="main-content">
      <Col md={6}>
        <div className="gmap">
          <GMap lat={props.lat} lng={props.lng} dispatch={props.dispatch} />
        </div>
      </Col>
      <Col md={6} className="search-form">
        <SearhForm lat={props.lat} lng={props.lng} dispatch={props.dispatch} />
      </Col>
    </Row>
    <Row>
      <VideoList videoID={props.videoID1} titles={props.titles1} thumbnails={props.thumbnails}></VideoList>
    </Row>
  </Grid>
);

const mapStateToProps = (state) => {
  const { lat, lng, videoID1, titles1, thumbnails } = state.locationPage;

  return { lat, lng, videoID1, titles1, thumbnails };
}

export default connect(mapStateToProps)(LocationPage);
