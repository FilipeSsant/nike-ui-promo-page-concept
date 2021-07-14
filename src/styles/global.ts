import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }

    :root {
        --black-400:#131212;
        --black-500:#000000;
        --white-500:#FFFFFF;
        --white-600:#F6F6F6;
        --red-500:#FF0000;
    }

    html {
        font-size: 62.5%;
    }

    body {
        background:var(--white-600);
        color:var(--blue-400);
        height:100%;
    }

    button {
        cursor: pointer;
    }


    body,
    input,
    textarea,
    select,
    button {    
        font-family: 'Roboto Condensed', sans-serif;
        font-weight: 400;
    }

`
