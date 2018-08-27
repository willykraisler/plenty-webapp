import React from 'react';
import PropTypes from 'prop-types'

const Counter = ({ value, onInc, onDec }) => (
  <div>
    <h1>
      {value}
    </h1>
    <button onClick={onInc}>+</button>
    <button onClick={onDec}>-</button>
  </div>
);

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  onInc: PropTypes.func.isRequired,
  onDec: PropTypes.func.isRequired
}

export default Counter;

