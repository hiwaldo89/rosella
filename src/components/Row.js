import styled from "@emotion/styled"

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -15px;
  margin-right: -15px;
  align-items: ${props => (props.alignItems ? props.alignItems : "stretch")};
  justify-content: ${props =>
    props.justifyContent ? props.justifyContent : "flex-start"};
`

export default Row
