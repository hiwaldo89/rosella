import React from "react"
import "normalize.css"
import { ThemeProvider } from "emotion-theming"
import { Global, css } from "@emotion/core"
import "typeface-roboto"

import Header from "./Header"
import { mq } from "../utils/mediaQueries"

const theme = {
  colors: {
    pink: "#F4E3D7",
    bermellon: "#CC6952",
    gold: "#B68B38",
    gray: "#C4C4C4",
    darkgray: "#9A9999",
  },
  fonts: {
    primary: "'Roboto', sans-serif",
    secondary: "Didot",
  },
  breakpoints: [640, 768, 1024, 1280],
}

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Global
        styles={css`
          @font-face {
            font-family: "Didot";
            src: url("../fonts/didot.ttf");
          }
          * {
            box-sizing: border-box;
          }
          body,
          html {
            font-size: 16px;
          }
          body {
            font-family: "Roboto", sans-serif;
          }
          button {
            cursor: pointer;
          }
          p {
            margin: 0;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            margin-top: 0;
            margin-bottom: 0;
          }
          a {
            color: inherit;
            text-decoration: none;
          }
          .d-none {
            display: none;
          }
          ${mq[1]} {
            .d-md-block {
              display: block;
            }
          }
        `}
      />
      <Header />
      <main>{children}</main>
    </ThemeProvider>
  )
}

export default Layout
