import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/dracula';

const Block = styled.div`
  width: 100%;
  overflow: auto;
`;

const Pre = styled.pre`
  text-align: left;
  padding: 1em;
  border-radius: 8px;
  font-size: 1em;
  line-height: 1;
  white-space: pre-wrap;
  word-break: break-word;

  & .token-line {
    line-height: 1;
    height: 1;
  }
`;

const Code = styled.code``;

const Line = styled.div`
  margin: 0.4em 0;
`;

export function CodeBlock({ codeString, lang }) {
  return (
    <Block>
      <Highlight
        {...defaultProps}
        theme={theme}
        code={codeString}
        language={lang}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Pre className={className} style={style}>
            <Code>
              {tokens.map((line, i) => {
                /* eslint-disable */
                return (
                  <Line {...getLineProps({ line, key: i })}>
                    {line.map((token, key) => {
                      return <span {...getTokenProps({ token, key })} />;
                    })}
                  </Line>
                );
                /* eslint-enable */
              })}
            </Code>
          </Pre>
        )}
      </Highlight>
    </Block>
  );
}

CodeBlock.propTypes = {
  codeString: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired
};

export const InlineCode = styled.code`
  color: #333;
  background-color: rgba(27, 31, 35, 0.05);
  padding: 0.2em 0.4em;
  border-radius: 3px;
  vertical-align: middle;
`;
