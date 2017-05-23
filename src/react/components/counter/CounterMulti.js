
import React from 'react';
import PropTypes from 'prop-types';

import CounterContainer from './CounterContainer';

const Label = props => (
    <button className="btn btn-danger" onClick={props.onRemove}>Delete ({props.id})</button>
);

const CounterMulti = props => {
  if (!props.visible) {
    return null;
  }
  return (
      <div>
          <button className="btn btn-success" onClick={() => props.onAdd()}>Add</button>
          <hr />
          {
          props.counters.map(counter => {
            return (
                <div key={counter.id}>
                    <CounterContainer id={counter.id}
                        label={
                          Label({onRemove: () => props.onRemove(counter.id), id: counter.id})
                        }
                    />
                    <p></p>
                </div>
            );
          })
        }

      </div>
  );
};

Label.propTypes = {
  onRemove: PropTypes.func,
  id: PropTypes.number
};

CounterMulti.propTypes = {
  counters: PropTypes.array,
  onAdd: PropTypes.func,
  visible: PropTypes.bool
};

export default CounterMulti;
