import styled from "@emotion/styled"
import { mq } from "../utils/mediaQueries"

const Column = styled.div(props => {
  const styles = {
    width: !!props.xs ? `${(props.xs * 100) / 12}%` : "100%",
    flex: `0 0 ${!!props.xs ? `${(props.xs * 100) / 12}%` : "100%"}`,
    paddingLeft: "15px",
    paddingRight: "15px",
  }
  if (props.md) {
    styles[mq[1]] = {
      width: !!props.md ? `${(props.md * 100) / 12}%` : "100%",
      flex: !!props.md ? `0 0 ${(props.md * 100) / 12}%` : "0 0 100%",
    }
  }
  if (props.lg) {
    styles[mq[2]] = {
      width: `${(props.lg * 100) / 12}%`,
      flex: `0 0 ${(props.lg * 100) / 12}%`,
    }
  }
  return styles
})

export default Column
