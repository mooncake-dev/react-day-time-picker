import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

const _propTypes = {
  className: PropTypes.string
};

export const PrevIcon = ({ className }) => (
  <FontAwesomeIcon icon={faChevronLeft} className={className} />
);
PrevIcon.propTypes = _propTypes;

export const NextIcon = ({ className }) => (
  <FontAwesomeIcon icon={faChevronRight} className={className} />
);
NextIcon.propTypes = _propTypes;
