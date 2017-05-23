
import React from 'react';
import PropTypes from 'prop-types';

const Counter = props => {
  return (
      <div>
          <button className="btn btn-primary"
              onClick={() => props.onDec(props.counterId)}>-
      </button>
          {' '}
          <button className="btn btn-success"
              onClick={() => props.onReset(props.counterId)}>{props.count}</button>
          {' '}
          <button className="btn btn-primary"
              onClick={() => props.onInc(props.counterId)}>+
      </button>
          {' '}
          {props.label}
      </div>
  );
};

Counter.defaultProps = {
  label: null
};

Counter.propTypes = {
  onDec: PropTypes.func,
  onInc: PropTypes.func,
  onReset: PropTypes.func,
  count: PropTypes.number,
  counterId: PropTypes.number,
  label: PropTypes.object
};

export default Counter;
