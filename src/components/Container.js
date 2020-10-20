import styled from "@emotion/styled"

import { mq, breakpoints } from "../utils/mediaQueries"

const Container = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin: auto;
  ${mq[0]} {
    max-width: ${breakpoints[0]}px;
  }
  ${mq[1]} {
    max-width: ${breakpoints[1]}px;
  }
  ${mq[2]} {
    max-width: ${breakpoints[2]}px;
  }
  ${mq[3]} {
    max-width: ${breakpoints[3]}px;
  }
`

export default Container
