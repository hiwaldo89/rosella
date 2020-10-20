import React from "react"
import styled from "@emotion/styled"

const StyledButton = styled.button`
  background: ${props =>
    props.outlined
      ? "transparent"
      : props.colored
      ? props.theme.colors.pink
      : "#fff"};
  border: ${props =>
    `solid 1px ${props.colored ? props.theme.colors.pink : "#fff"}`};
  color: ${props =>
    props.outlined && props.colored
      ? props.theme.colors.pink
      : props.colores
      ? "#fff"
      : props.theme.colors.gold};
  padding: ${props => (props.size === "lg" ? "1.5rem 2.5rem" : "1rem")};
  transition: all 0.3s ease-in-out;
  letter-spacing: 0.25em;
  &:hover {
    background: ${props =>
      props.outlined && props.colored ? props.theme.colors.pink : "#fff"};
    color: ${props =>
      props.outlined && props.colored ? "#fff" : props.theme.colors.bermellon};
  }
`

const Button = ({
  children,
  outlined = false,
  colored = false,
  size = "sm",
  ...props
}) => {
  return (
    <StyledButton outlined={outlined} colored={colored} size={size} {...props}>
      {children}
    </StyledButton>
  )
}

export default Button
