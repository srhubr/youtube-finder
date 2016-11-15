import React, { Component, PropTypes } from 'react';
import Row  from 'react-bootstrap/lib/Row';

class VideoList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { videoID, titles, publishDates } = this.props;

    return (
      <Row>
        {videoID.map(function(item, index){
          return (
            <Row key={index} className='list-item'>
                <h3>{`${index+1}.`} {titles[index]}</h3>
                <h4 className='publication-date'>Upload date: {publishDates[index]}</h4>
                <iframe src={`https://www.youtube.com/embed/${item}`} frameBorder="0" allowFullScreen></iframe>
            </Row>
          );
        })}
      </Row>
    );
  }
}

export default VideoList;
