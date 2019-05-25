import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export const Article = styled.article`
  padding: 1em;
  font-size: 1.2em;
  line-height: 1.5;

  width: 750px;
  margin: auto;

  @media (max-width: 900px) {
    width: 100%;
    margin: 0;
  }

  @media (max-width: 520px) {
    font-size: 1em;
  }
`;

export const Header = styled.header`
  & p {
    color: #666;
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.8em;
  font-weight: 500;
`;

const SubHeading = styled.h2`
  font-size: 1.6em;
  font-weight: 500;
`;

const SubSubHeading = styled.h3`
  font-size: 1.4em;
  font-weight: 500;
`;

const AnchorLink = styled.a`
  color: inherit;
  text-decoration: none;

  :visited {
    color: inherit;
  }

  :hover {
    cursor: pointer;
  }
`;

export function SubTitle({ level, children }) {
  let _Component;
  switch (level) {
    case 1: {
      _Component = SubHeading;
      break;
    }
    case 2: {
      _Component = SubSubHeading;
      break;
    }
  }

  const anchor = children
    .toString()
    .toLowerCase()
    .replace(/\s/g, '-');

  return (
    <_Component id={anchor}>
      <AnchorLink href={`#${anchor}`}>{children}</AnchorLink>
    </_Component>
  );
}

SubTitle.propTypes = {
  level: PropTypes.number.isRequired,
  children: PropTypes.string.isRequired
};

SubTitle.defaultProps = {
  level: 1
};

export const Interactive = styled.div`
  margin: 3em 0;
  font-size: 0.8em;
`;

export const Container = styled.div`
  width: 475px;
  margin: 1em auto;
  padding: 1em;
  background-color: #fff;
  color: #333;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 4px #00000018;

  @media (max-width: 520px) {
    width: 100%;
  }
`;

export const Caption = styled.div`
  margin: 2em 0;
  text-align: center;
  color: #aaa;
`;
