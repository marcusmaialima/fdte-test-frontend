import { createGlobalStyle } from 'styled-components'
import '../../../node_modules/animate.css'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    outline: none !important;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    font-family: 'Open Sans', sans-serif;
    -ms-overflow-style: scrollbar;
  }

  html,
  body {
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #222;
  }

  a,
  p,
  span,
  label,
  div,
  b,
  i,
  strong,
  ul,
  li,
  input,
  textarea,
  select,
  td,
  th,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6  {
    font-weight: 400;
  }

  b,
  strong {
    font-weight: 700;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
  }

  input ,
  select {
    appearance: none;
  }

  ul {
    list-style: none;
  }

  .container__modalComponent {
    max-width: 450px;

    @media(max-width: 500px) {
      width: 100%;
      height: 100%;
      margin: 0px;
      max-width: 500px;
    }

    @media(min-width: 501px) and (max-width: 576px) {
      max-width: 100%;
      margin: 25px;
    }
  }

  .modal-content {
    border: none;
    height: auto;
    max-height: 70vh;
    border-radius: 1rem;

    @media(max-width: 500px) {
      width: 100%;
      height: 100%;
      max-height: 100%;
      margin: 0px;
      max-width: 500px;
    }
  }

  ::-webkit-scrollbar {
    display: none;
  }
`
