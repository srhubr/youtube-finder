import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import Form from 'react-bootstrap/lib/Form';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';
import InputGroup from 'react-bootstrap/lib/InputGroup';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import ControlLabel from 'react-bootstrap/lib/ControlLabel';
import Button from 'react-bootstrap/lib/Button';
import Select from 'react-select';
import { getVideos1 } from '../../actions/locationPageActions';
import { YEARS } from './data/years';
import { MONTHS } from './data/months';
import { DAYS } from './data/days';
import { ORDER } from './data/order';

import 'react-select/dist/react-select.css';

class SearhForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: 50.454,
      longitude: 30.525,

      yearAfterValue: '2012',
      monthAfterValue: '01',
      dayAfterValue: '01',

      yearBeforeValue: '2016',
      monthBeforeValue: '12',
      dayBeforeValue: '31',

      orderValue: 'viewCount',

      radiusValue: 50
    }

    this.onBtnClick = this.onBtnClick.bind(this);
    this.onSelected = this.onSelected.bind(this);
    this.inputChange = this.inputChange.bind(this);

    this.updateLatitudeValue = this.updateLatitudeValue.bind(this);
    this.updateLongitudeValue = this.updateLongitudeValue.bind(this);

    this.updateYearAfterValue = this.updateYearAfterValue.bind(this);
    this.updateMonthAfterValue = this.updateMonthAfterValue.bind(this);
    this.updateDayAfterValue = this.updateDayAfterValue.bind(this);

    this.updateYearBeforeValue = this.updateYearBeforeValue.bind(this);
    this.updateMonthBeforeValue = this.updateMonthBeforeValue.bind(this);
    this.updateDayBeforeValue = this.updateDayBeforeValue.bind(this);

    this.updateOrderValue = this.updateOrderValue.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ latitude: nextProps.lat, longitude: nextProps.lng });
  }

  onBtnClick() {
    let lat = +this.state.latitude;
    let lng = +this.state.longitude;
    let rad = this.state.radiusValue;

    let timeAfter = `${this.state.yearAfterValue}-${this.state.monthAfterValue}-${this.state.dayAfterValue}T00:00:00Z`;
    let timeBefore = `${this.state.yearBeforeValue}-${this.state.monthBeforeValue}-${this.state.dayBeforeValue}T00:00:00Z`;

    let order = this.state.orderValue;

    this.props.dispatch(getVideos1(lat, lng, rad, timeAfter, timeBefore, order));
  }

  onSelected(eventKey, event) {
    this.setState({ radiusValue: eventKey})
  }

  inputChange(e) {
    this.setState({ radiusValue: e.target.value });
  }

  updateLatitudeValue(e) {
    this.setState({ latitude: e.target.value });
  }

  updateLongitudeValue(e) {
    this.setState({ longitude: e.target.value });
  }

  updateYearAfterValue(newValue) {
    this.setState({ yearAfterValue: newValue.value });
  }

  updateMonthAfterValue(newValue) {
    this.setState({ monthAfterValue: newValue.value });
  }

  updateDayAfterValue(newValue) {
    this.setState({ dayAfterValue: newValue.value });
  }

  updateYearBeforeValue(newValue) {
    this.setState({ yearBeforeValue: newValue.value });
  }

  updateMonthBeforeValue(newValue) {
    this.setState({ monthBeforeValue: newValue.value });
  }

  updateDayBeforeValue(newValue) {
    this.setState({ dayBeforeValue: newValue.value });
  }

  updateOrderValue(newValue) {
    this.setState({ orderValue: newValue.value });
  }

  render() {
    return (
      <Form horizontal>
        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Latitude
          </Col>
          <Col sm={10}>
            <FormControl type="text" value={this.state.latitude} onChange={this.updateLatitudeValue} />
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} sm={2}>
            Longitude
          </Col>
          <Col sm={10}>
            <FormControl type="text" value={this.state.longitude} onChange={this.updateLongitudeValue} />
          </Col>
        </FormGroup>

        <FormGroup controlId='radius-field'>
          <Col sm={2}>
            <ControlLabel htmlFor='radius-field' className='centred-label'>
              Search Radius
            </ControlLabel>
          </Col>
          <Col sm={10}>
            <InputGroup>
              <FormControl type="text" ref="radius" value={this.state.radiusValue} onChange={this.inputChange} />
              <DropdownButton
                componentClass={InputGroup.Button}
                id="radius-select"
                title="Radius"
              >
                <MenuItem eventKey={1} onSelect={this.onSelected}>1km</MenuItem>
                <MenuItem eventKey={10} onSelect={this.onSelected}>10km</MenuItem>
                <MenuItem eventKey={50} onSelect={this.onSelected}>50km</MenuItem>
                <MenuItem eventKey={100} onSelect={this.onSelected}>100km</MenuItem>
                <MenuItem eventKey={200} onSelect={this.onSelected}>200km</MenuItem>
                <MenuItem eventKey={300} onSelect={this.onSelected}>300km</MenuItem>
                <MenuItem eventKey={500} onSelect={this.onSelected}>500km</MenuItem>
                <MenuItem eventKey={1000} onSelect={this.onSelected}>1000km</MenuItem>
              </DropdownButton>
            </InputGroup>
          </Col>
        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} className='centred-label' sm={2}>
            Publiched After
          </Col>

          <Col sm={2} className='day-select'>
            <Select
              name="dayAfterSelect"
              value={this.state.dayAfterValue}
              clearable={false}
              searchable={false}
              options={DAYS}
              onChange={this.updateDayAfterValue}
            />
          </Col>

          <Col sm={4} className='month-select'>
            <Select
              name="monthAfterSelect"
              value={this.state.monthAfterValue}
              clearable={false}
              searchable={false}
              options={MONTHS}
              onChange={this.updateMonthAfterValue}
            />
          </Col>

          <Col sm={3} className='year-select'>
            <Select
              name="yearAfterSelect"
              value={this.state.yearAfterValue}
              clearable={false}
              searchable={false}
              options={YEARS}
              onChange={this.updateYearAfterValue}
            />
          </Col>

        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} className='centred-label' sm={2}>
            Publiched Before
          </Col>

          <Col sm={2} className='day-select'>
            <Select
              name="dayBeforeSelect"
              value={this.state.dayBeforeValue}
              clearable={false}
              searchable={false}
              options={DAYS}
              onChange={this.updateDayBeforeValue}
            />
          </Col>

          <Col sm={4} className='month-select'>
            <Select
              name="monthBeforeSelect"
              value={this.state.monthBeforeValue}
              clearable={false}
              searchable={false}
              options={MONTHS}
              onChange={this.updateMonthBeforeValue}
            />
          </Col>

          <Col sm={3} className='year-select'>
            <Select
              name="yearBeforeSelect"
              value={this.state.yearBeforeValue}
              clearable={false}
              searchable={false}
              options={YEARS}
              onChange={this.updateYearBeforeValue}
            />
          </Col>

        </FormGroup>

        <FormGroup>
          <Col componentClass={ControlLabel} className='centred-label' sm={2}>
            Order by
          </Col>

          <Col sm={4} className='order-select'>
            <Select
              name="orderSelect"
              value={this.state.orderValue}
              clearable={false}
              searchable={false}
              options={ORDER}
              onChange={this.updateOrderValue}
            />
          </Col>

        </FormGroup>

        <FormGroup>
          <Col smOffset={2} sm={10}>
            <Button onClick={this.onBtnClick}>
              Search
            </Button>
          </Col>
        </FormGroup>
      </Form>
    );
  }
}

export default SearhForm;
