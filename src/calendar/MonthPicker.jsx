import styled, { keyframes, css } from 'styled-components';

const prev = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-25px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fakePrev = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(25px);
  }
`;

const next = keyframes`
  0% {
    opacity: 0;
    transform: translateX(25px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fakeNext = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  100% {
    opacity: 0;
    transform: translateX(-25px);
  }
`;

const ANIM_TIME_SEC = 0.2;
const ANIM_DELAY_TIME_SEC = 0.1;
const _makeAnimation = type => css`
  ${type} ${ANIM_TIME_SEC}s ease-out ${ANIM_DELAY_TIME_SEC}s normal both;
`;

const animation = props => {
  const { animation } = props;

  if (animation === 'prev') {
    return _makeAnimation(prev);
  }

  if (animation === 'next') {
    return _makeAnimation(next);
  }
};

const fakeAnimation = props => {
  const { animation } = props;

  if (animation === 'prev') {
    return _makeAnimation(fakePrev);
  }

  if (animation === 'next') {
    return _makeAnimation(fakeNext);
  }
};

export const MonthPicker = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  grid-template-rows: 1fr;
  grid-gap: 0;
  align-items: center;
  padding: 0 0.5em;
  font-size: 1.2em;
`;

const Button = styled.button`
  border-radius: 50%;
  border: 0;
  color: inherit;
  background-color: ${props => props.theme.secondary};
  box-sizing: border-box;
  outline: 0;
  transition: all 0.25s ease;
  padding: 0;
  font-size: 1em;
  height: 60px;
  width: 60px;

  :hover {
    cursor: pointer;
    color: ${props => props.theme.primary};
  }
`;

export const PrevMonth = styled(Button)``;
export const NextMonth = styled(Button)``;

export const CurrentMonth = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  font-weight: 500;
  animation: ${animation};
`;

export const FakeCurrentMonth = styled.div`
  font-weight: 500;
  animation: ${fakeAnimation};
  visibility: ${props => (props.animation ? 'visible' : 'hidden')};
`;
