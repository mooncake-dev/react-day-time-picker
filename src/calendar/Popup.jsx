import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dateFns from 'date-fns';

const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  width: 100%;
  height: 100%;
  z-index: 3;
  background-color: #fff;
  font-size: 1.1em;
`;

const ButtonLink = styled.a`
  color: #3a9ad9;
  text-decoration: underline;

  :hover {
    cursor: pointer;
  }
`;

function Popup({ handleClose, selectedDate }) {
  return (
    <Container>
      <p>{dateFns.format(selectedDate, 'dddd, MMMM Do YYYY')}</p>

      <ButtonLink onClick={handleClose}>Go Back</ButtonLink>
    </Container>
  );
}

Popup.propTypes = {
  handleClose: PropTypes.func.isRequired,
  selectedDate: PropTypes.instanceOf(Date)
};

export default Popup;
