import React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      async
      key="adsense"
      src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
    />,
  ])
}
