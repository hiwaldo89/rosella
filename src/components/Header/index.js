import React from "react"
import Headroom from "react-headroom"

import Helperbar from "./Helperbar"
import MainHeader from "./MainHeader"

const Header = () => {
  return (
    <Headroom>
      <Helperbar />
      <MainHeader />
    </Headroom>
  )
}

export default Header
