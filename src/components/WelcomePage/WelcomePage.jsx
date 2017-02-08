import React from 'react';
import { Link } from 'react-router';
import { Row, Col, Well }  from 'react-bootstrap/lib';

const WelcomePage = () => (
  <div>
    <Row className="welcome-page">
      <Col md={4}>
        <Well>
          <h3><Link to="/year">Top videos of the year</Link></h3>
          <p className="description">
            10 most viewed videos on YouTube of each year since 2005. Just choose the year and enjoy.
          </p>
        </Well>
      </Col>

      <Col md={4}>
        <Well>
          <h3><Link to="/location">Search by location</Link></h3>
          <p className="description">
            Search YouTube videos by filming location. You can choose a location on the map, setting a marker
            or set the coordinates (latitude and longitude) manually. You should also specify a search radius.
            After that, you can use following input fields to filter the received videos by publication dates and
            sort the results by view count, date or rating.
          </p>
        </Well>
      </Col>

      <Col md={4}>
        <Well>
          <h3><Link to="/live">Most viewed Broadcasts</Link></h3>
          <p className="description">
            Most viewed YouTube broadcasts. Just select one of the menu items. You can see the most popular
            current live streams or most viewed completed broadcasts of all time from YouTube archive.
            You can also see most viewed completed broadcasts by different categories such as music, sport, news, etc.
          </p>
        </Well>
      </Col>
    </Row>
  </div>
);

export default WelcomePage;
