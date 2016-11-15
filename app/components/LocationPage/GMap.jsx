import React, { Component } from 'react';
import { setLatitude } from 'redux/actions/locationPageActions';
import { setLongitude } from 'redux/actions/locationPageActions';

class GMap extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillReceiveProps(nextProps) {
    this.marker.setMap(null);
    this.marker.setPosition({ lat: nextProps.lat, lng: nextProps.lng });
    this.marker.setMap(this.map);
    this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });
  }

  componentDidMount() {
    const dispatch = this.props.dispatch;

    this.map = new google.maps.Map(this.refs.map, {
      center: { lat: this.props.lat, lng: this.props.lng },
      zoom: 5
    });

    this.marker = new google.maps.Marker({
      position: { lat: this.props.lat, lng: this.props.lng },
      map: this.map
    });

    this.map.addListener('click', (e) => {
      let lat = e.latLng.lat();
      let lng = e.latLng.lng();

      this.props.dispatch(setLatitude(lat));
      this.props.dispatch(setLongitude(lng));
    });
  }

  render() {
    return (
      <div id="map" ref="map" />
    );
  }
}

export default GMap;
