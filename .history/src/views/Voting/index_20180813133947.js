import React from 'react';
import PropTypes from 'prop-types';

import { SWAPI_API_URL_PREFIX } from '../../constants';

export default class Voting extends React.Component {
  static propTypes = {};
  static defaultProps = {};

  state = {};

  async componentDidMount() {
    console.log(SWAPI_API_URL_PREFIX);
    const people = await 
    fetch(`${SWAPI_API_URL_PREFIX}people/3`).then(results => console.log(results.json()))
  }

  render() {
    return (
      <div>Star Wars</div>
    )
  }
}