import React from 'react';
import Row  from 'react-bootstrap/lib/Row';

const VideoList = (props) =>
  <Row className="videos-list">
    {props.videoID.map((item, index) =>
      <Row key={index} className="list-item">
        <h3>{`${index+1}.`} {props.titles[index]}</h3>
        <h4>Upload date: {props.publishDates[index]}</h4>
        <div className="video-wrapper">
          <iframe src={`https://www.youtube.com/embed/${item}`} frameBorder="0" allowFullScreen></iframe>
        </div>
      </Row>
    )}
  </Row>

export default VideoList;
