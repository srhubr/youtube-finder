import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from 'react-bootstrap/lib/Grid';
import Row  from 'react-bootstrap/lib/Row';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem  from 'react-bootstrap/lib/NavItem';
import NavDropdown  from 'react-bootstrap/lib/NavDropdown';
import MenuItem  from 'react-bootstrap/lib/MenuItem';
import { getVideos2 } from 'redux/actions/livePageActions';
import { changeActiveNavKey } from 'redux/actions/livePageActions';
import VideoList from './VideoList';

import './LivePage.css'

class LivePage extends Component {
  constructor(props) {
    super(props);

    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(selectedKey) {
    this.props.dispatch(changeActiveNavKey(selectedKey));

    switch(selectedKey) {
      case '1':
        return this.props.dispatch(getVideos2('live'));
      case '2':
        return this.props.dispatch(getVideos2('completed'));
      case '3.1':
        return this.props.dispatch(getVideos2('completed', '1'));
      case '3.2':
        return this.props.dispatch(getVideos2('completed', '2'));
      case '3.3':
        return this.props.dispatch(getVideos2('completed', '10'));
      case '3.4':
        return this.props.dispatch(getVideos2('completed', '17'));
      case '3.5':
        return this.props.dispatch(getVideos2('completed', '20'));
      case '3.6':
        return this.props.dispatch(getVideos2('completed', '23'));
      case '3.7':
        return this.props.dispatch(getVideos2('completed', '25'));
      case '3.8':
        return this.props.dispatch(getVideos2('completed', '27'));
      case '3.9':
        return this.props.dispatch(getVideos2('completed', '28'));
      case '3.10':
        return this.props.dispatch(getVideos2('completed', '30'));

    }
  }

  render() {
    const { videoID2, titles2, thumbnails1, activeNavKey }= this.props;

    return (
      <Grid>
        <Row>
          <h2 className='livepage-title'>Most viewed YouTube Broadcasts</h2>
        </Row>
        <Row className='nav-row'>
          <Nav bsStyle="tabs" activeKey={activeNavKey} onSelect={this.handleSelect} className='livepage-nav'>
            <NavItem eventKey="1">Live Now</NavItem>
            <NavItem eventKey="2">Most viewed of all time</NavItem>
            <NavDropdown eventKey="3" title="Most viewed by category">
              <MenuItem eventKey="3.1">Film & Animation</MenuItem>
              <MenuItem eventKey="3.2">Autos & Vehicles</MenuItem>
              <MenuItem eventKey="3.3">Music</MenuItem>
              <MenuItem eventKey="3.4">Sports</MenuItem>
              <MenuItem eventKey="3.5">Gaming</MenuItem>
              <MenuItem eventKey="3.6">Comedy</MenuItem>
              <MenuItem eventKey="3.7">News & Politics</MenuItem>
              <MenuItem eventKey="3.8">Education</MenuItem>
              <MenuItem eventKey="3.9">Science & Technology</MenuItem>
              <MenuItem eventKey="3.10">Movies</MenuItem>
            </NavDropdown>
          </Nav>
        </Row>
        <Row>
          <VideoList videoID={videoID2} titles={titles2} thumbnails={thumbnails1} />
        </Row>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  const { videoID2, titles2, thumbnails1, activeNavKey } = state.livePage;

  return { videoID2, titles2, thumbnails1, activeNavKey };
}

export default connect(mapStateToProps)(LivePage);
