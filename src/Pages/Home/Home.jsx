import React, { Fragment } from 'react';
import { Showcase } from './Showcase/Showcase';
import PropTypes from 'prop-types';

export const Home = (props) => {
  const { children } = props;

  return (
    <Fragment>
      {children}
      <Showcase />
    </Fragment>
  );
};

Home.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};
