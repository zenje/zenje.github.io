import { createGlobalStyle } from "styled-components"
import "bootstrap/dist/css/bootstrap.min.css"
import modernNormalize from "styled-modern-normalize"
import Josefin from "../assets/JosefinSans-VariableFont_wght.ttf"
import JosefinItalic from "../assets/JosefinSans-Italic-VariableFont_wght.ttf"
import Karla from "../assets/Karla-VariableFont_wght.ttf"
import KarlaItalic from "../assets/Karla-Italic-VariableFont_wght.ttf"

const GlobalStyle = createGlobalStyle`

    // Import normalize.css
    ${modernNormalize}

    // Import fonts
    @font-face {
      font-family: 'Josefin Sans';
      src: url(${Josefin}) format('truetype');
      font-weight: 200 700;
    }
    @font-face {
      font-family: 'Josefin Sans';
      src: url(${JosefinItalic}) format('truetype');
      font-style: italic;
    }
    @font-face {
      font-family: 'Karla';
      src: url(${Karla}) format('truetype');
      font-weight: 200 700;
    }
    @font-face {
      font-family: 'Karla';
      src: url(${KarlaItalic}) format('truetype');
      font-style: italic;
    }

    * {
        box-sizing: border-box;
    }

    html {
        width: 100%;
        height: 100%;
    }

    body {
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
        background-color: ${({ theme }) => theme.colors.background};
        color: ${({ theme }) => theme.colors.text};
        font-size: 1rem;
        font-family: ${({ theme }) => theme.fonts.primary};
        line-height: 1.5rem;
        font-weight: 300;
        text-rendering: optimizeLegibility;
        &.blur {
            overflow: hidden;
            #___gatsby #main-content > * {
              filter: blur(5px) ;
              transition: all .3s ease-out;
              pointer-events: none;
              user-select: none;
            }
          }
        }
        &.splashScreen {
              position: fixed;
              overflow: hidden;
        }

    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: ${({ theme }) => theme.colors.highlight};
        font-weight: 500;
        cursor: pointer;
        &:hover,
        &:focus {
          outline: 0;
        }
    }

    h1, h2, h3, h4 {
      font-family: ${({ theme }) => theme.fonts.header};
    }

    h1 {
        font-weight: 500;
        font-size: 3rem;
        line-height: 3.375rem;
        color: ${({ theme }) => theme.colors.primary};
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            font-size: 3.625rem;
            line-height: 4rem;
        }
    }

    h2 {
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 1.5rem;
        color: ${({ theme }) => theme.colors.primary};
        @media (min-width: ${({ theme }) => theme.breakpoints.sm}) {
            font-size: 2rem;
            line-height: 3rem;
        }
    }

    h3 {
        font-weight: 500;
        font-size: 1.75rem;
        line-height: 2.25rem;
        color: ${({ theme }) => theme.colors.primary};
        margin-bottom: 3rem;
    }

    h4 {
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
    }

    hr {
        margin: 3rem auto;
        border-width: .05rem;
        color: ${({ theme }) => theme.colors.tertiary};
        opacity: 0.1;
      }

`

export default GlobalStyle
