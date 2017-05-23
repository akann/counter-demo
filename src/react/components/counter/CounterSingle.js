import React from 'react';
import PropTypes from 'prop-types';

import CounterContainer from './CounterContainer';


const CounterSingle = (props) => {
  if (props.visible) {
    return <CounterContainer id={0} count={0} />;
  } else {
    return null;
  }
};

CounterSingle.propTypes = {
  visible: PropTypes.bool
};

export default CounterSingle;
