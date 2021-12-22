import React from 'react';
import PropTypes from 'prop-types';

import './button.scss';

const Button = ({ primary, backgroundColor, size, label, noBorder, ...props }) => {
  const mode = primary ? 'btn--primary' : 'btn--secondary';
  const border = noBorder ? 'btn--noborder' : ''
  return (
    <button
      type="button"
      className={['btn', `btn--${size}`, mode, border].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  primary: PropTypes.bool,
  backgroundColor: PropTypes.string,
  noBorder: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  noBorder: false,
  primary: false,
  size: 'medium',
  onClick: undefined,
};

export default Button