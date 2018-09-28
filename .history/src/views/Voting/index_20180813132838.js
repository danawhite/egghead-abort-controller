import React from 'react';
import PropTypes from 'prop-types';

import { SWAPI_API_URL_PREFIX } from '../../constants';

export default class Voting extends React.Component {
  static propTypes = {};
  static defaultProps = {};

  state = {};

  componentDidMount() {
    console.log(SWAPI_API_URL_PREFIX);
    fetch(`$SWAPI_API_URL_PREFIX)
  }

  render() {
    return (
      <div>Star Wars</div>
    )
  }
}