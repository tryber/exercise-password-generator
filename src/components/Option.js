import React from 'react';
import PropTypes from 'prop-types';

function Option(props) {
  return (
    <label>
      {props.label}
      <input type="checkbox" />
    </label>
  );
}

Option.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Option;
