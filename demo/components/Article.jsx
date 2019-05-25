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
  margin-bottom: 2em;
`;

export const Title = styled.h1`
  margin: 0;
  text-align: center;
  font-size: 2.8em;
  font-weight: 500;
`;

export const ByLine = styled.p`
  margin: 0;
  text-align: center;
  font-size: 0.8em;
  color: #666;
`;

const SubHeading = styled.h2`
  font-size: 1.8em;
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

export const Caption = styled.div`
  margin: 2em 0;
  text-align: center;
  color: #aaa;
`;
