import React, { Component } from 'react';
import { connect } from 'react-redux';
import GMap from './GMap';
import ControlForm from './ControlForm';
import VideoList from './VideoList';
import Grid  from 'react-bootstrap/lib/Grid';
import Row  from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';

import './LocationPage.css'

class LocationPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { lat, lng, rad, videoID1, titles1, thumbnails }= this.props;

    return (
      <Grid>
        <Row className='page-title'>
          <h2>Search YouTube videos by filming location</h2>
        </Row>
        <Row className='main-content'>
          <Col md={6}>
            <div className='gmap'>
              <GMap lat={lat} lng={lng} dispatch={this.props.dispatch} />
            </div>
          </Col>
          <Col md={6} className='control-form'>
            <ControlForm lat={lat} lng={lng} dispatch={this.props.dispatch} />
          </Col>
        </Row>
        <Row>
          <VideoList videoID={videoID1} titles={titles1} thumbnails={thumbnails}></VideoList>
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  const { lat, lng, videoID1, titles1, thumbnails } = state.locationPage;

  return { lat, lng, videoID1, titles1, thumbnails };
}

export default connect(mapStateToProps)(LocationPage);
