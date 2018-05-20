import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Conditional = props => {
  const { expression, trueChild, falseChild } = props;

  if (expression) {
    return <Fragment>{trueChild}</Fragment>;
  }

  if (!expression && falseChild) {
    return <Fragment>{falseChild}</Fragment>;
  }

  return null;
};

export default Conditional;

Conditional.propTypes = {
  expression: PropTypes.bool.isRequired,
  trueChild: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.array.isRequired
  ]),
  falseChild: PropTypes.oneOfType([
    PropTypes.node.isRequired,
    PropTypes.array.isRequired
  ])
};
