import "../styles/reset.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html{
  font-size:14px;

 
  @media (max-width: 900px) {
    font-size:12px;
  }
  @media (max-width: 768px) {
    font-size:10px;
  }

  @media (max-width: 500px) {
    font-size:8px;
  }

  @media (max-width: 400px) {
    font-size:6px;
  }

}
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
