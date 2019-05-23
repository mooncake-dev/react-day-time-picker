import styled from 'styled-components';

const Container = styled.div`
  margin: 0;
  padding: 1em 0;
`;

export const Success = styled(Container)`
  color: ${props => props.theme.feedback.success.color};
`;

export const Failed = styled(Container)`
  color: ${props => props.theme.feedback.failed.color};
`;
