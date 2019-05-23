import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';

const Pre = styled.pre`
  text-align: left;
  margin: 1em 0;
  padding: 0.5em;
  border-radius: 4px;
  font-size: 1.3em;

  & .token-line {
    line-height: 1;
    height: 1;
  }
`;

const LineNo = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.3;
`;

function Code({ codeString, lang }) {
  return (
    <Highlight
      {...defaultProps}
      theme={theme}
      code={codeString}
      language={lang}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Pre className={className} style={style}>
          <code>
            {tokens.map((line, i) => {
              /* eslint-disable */
              return (
                <div {...getLineProps({ line, key: i })}>
                  <LineNo>{i + 1}</LineNo>

                  {line.map((token, key) => {
                    return <span {...getTokenProps({ token, key })} />;
                  })}
                </div>
              );
              /* eslint-enable */
            })}
          </code>
        </Pre>
      )}
    </Highlight>
  );
}

Code.propTypes = {
  codeString: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired
};

export default Code;
