import PropTypes from 'prop-types';

const stringShape = (name) => {
  PropTypes.shape({
    [name]: PropTypes.string,
  });
};

export default stringShape;
