import styled from 'styled-components';

export const Main = styled.main`
  box-sizing: border-box;
  display: grid;
  height: 100vh;
  margin: 0;
  padding: 0;
`;

export const Header = styled.header`
  text-align: center;
`;

export const Content = styled.div`
  padding: 1em;
  font-size: 1.25em;
  line-height: 1.5;

  @media (max-width: 520px) {
    font-size: 1em;
  }
`;

export const Section = styled.section`
  width: 900px;
  margin: auto;

  @media (max-width: 900px) {
    width: 100%;
    margin: 0;
  }
`;

export const Interactive = styled.div`
  margin: 3em 0;
  font-size: 1rem;

  @media (max-width: 520px) {
    font-size: 0.8rem;
  }
`;

export const Caption = styled.div`
  text-align: center;
  font-size: 0.9rem;
  color: #aaa;

  @media (max-width: 520px) {
    font-size: 0.7rem;
  }
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
