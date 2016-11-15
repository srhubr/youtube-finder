import React, { Component, PropTypes } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Thumbnail from 'react-bootstrap/lib/Thumbnail';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { videoID, titles, thumbnails } = this.props;

    return (
      <div>
        {videoID.map(function(item, index){
          return (
            <Col md={4} key={index}>
              <h5 className='video-title'>
                {`${index+1}.`} <a href={`https://www.youtube.com/embed/${item}`} target='_blank'>{titles[index]}</a>
              </h5>
              <Thumbnail
                className='thumb'
                src={thumbnails[index]}
                href={`https://www.youtube.com/embed/${item}`}
                alt="242x200"
                target='_blank' 
              />
            </Col>
          );
        })}
      </div>
    );
  }
}

export default VideoList;
