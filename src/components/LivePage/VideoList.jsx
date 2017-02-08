import React from 'react';
import { Col, Thumbnail } from 'react-bootstrap/lib';

const VideoList = props => (
  <div className="videos-list">
    {props.videoID.map((item, index) => (
      <Col md={4} key={index}>
        <h5 className="video-title">
          {`${index+1}.`} <a href={`https://www.youtube.com/embed/${item}`} target="_blank">{props.titles[index]}</a>
        </h5>
        <Thumbnail
          className="thumb"
          src={props.thumbnails[index]}
          href={`https://www.youtube.com/embed/${item}`}
          target="_blank"
        />
      </Col>
    ))}
  </div>
);

export default VideoList;
