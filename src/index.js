import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
body {
  margin : 0;
  font-family: 'Poppins', sans-serif;
}
p{
  color : #9e9aa7;
  font-size : 18px;
  font-weight : 700;
}
`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);