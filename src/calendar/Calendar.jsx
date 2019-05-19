import styled, { keyframes, css } from 'styled-components';

const prev = keyframes`
  0% {
    transform: translateX(-110%);
  }
  100% {
    transform: translateX(0);
  }
`;

const fakePrev = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(110%);
  }
`;

const next = keyframes`
  0% {
    transform: translateX(110%);
  }
  100% {
    transform: translateX(0);
  }
`;

const fakeNext = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-110%);
  }
`;

const ANIM_TIME_SEC = 0.4;
const _makeAnimation = type => css`
  ${type} ${ANIM_TIME_SEC}s ease-in-out normal both;
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

export const Calendar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  animation: ${animation};
  z-index: 1;
`;

export const FakeCalendar = styled.div`
  animation: ${fakeAnimation};
  opacity: ${props => (props.animation ? 1 : 0)};
  z-index: 0;
`;
