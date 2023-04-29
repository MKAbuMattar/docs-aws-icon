import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    scroll-behavior: smooth;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    margin: 0;
    font-family: "Montserrat", sans-serif;
    background-color: #EEEEEE;
    color: #212121;
  }

  a {
    text-decoration: none;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media screen and (min-width: 768px) {
    margin-top: calc(3rem + 1.5rem);
  }
`;

export const Section = styled.section`
  padding: 2rem 0;
`;

export const SectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const SectionSubtitle = styled.p`
  font-size: 1.1rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const SectionDescription = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const SectionTxt = styled.p`
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1rem;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2em;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

export const CardInfo = styled.div`
  padding: 2.5em 3em;
`;

export const CardTitle = styled.h4`
  margin: 0;
  font-size: 1.5em;

  &&:after {
    content: '';
    display: block;
    width: 100px;
    padding-top: 12px;
    border-bottom: 3px solid #2e2e2e;
  }
`;
