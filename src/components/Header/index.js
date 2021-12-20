import React from 'react';
import PropTypes from 'prop-types';

export const Header = ({ appTitle }) => (
  <header>
    <div className="wrapper">
      <div>
        <h1>{appTitle}</h1>
      </div>
    </div>
  </header>
);

Header.propTypes = {
  appTitle: PropTypes.string,
};

Header.defaultProps = {
  appTitle: null,
};
