import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import Button from "./Button"
import { mq } from "../utils/mediaQueries"

const CardWrapper = styled.div`
  border: solid 2px transparent;
  padding: 10px;
  transition: all 0.3s ease-in-out;
  height: 100%;
  .viewMore {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease-in-out;
    ${mq[2]} {
      opacity: 0;
    }
  }
  &:hover {
    border-color: ${({ theme }) => theme.colors.gold};
    .viewMore {
      opacity: 1;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;
  margin-bottom: 22px;
  margin-left: 10px;
  margin-right: 10px;
  &:after {
    content: "";
    display: block;
    padding-top: 100%;
  }
`

const CategoryWrapper = styled.div`
  color: ${({ theme }) => theme.colors.gray};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.25em;
  font-size: 0.8rem;
  font-weight: 500;
  margin-bottom: 18px;
`

const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.secondary};
  text-align: center;
  text-transform: uppercase;
  line-height: 1.3rem;
  letter-spacing: 0.25em;
  margin-bottom: 11px;
`

const Description = styled.div`
  line-height: 1.4rem;
  margin-bottom: 47px;
`

const Author = styled.span`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkgray};
  margin-bottom: 12px;
  letter-spacing: 0.1em;
`

const Date = styled.span`
  display: block;
  text-align: center;
  color: ${({ theme }) => theme.colors.darkgray};
  letter-spacing: 0.1em;
`

const PostCard = ({
  coverImage,
  category,
  title,
  shortDescription,
  author,
  date,
}) => {
  return (
    <CardWrapper>
      <ImageWrapper>
        <div className="viewMore">
          <Button>Ver más</Button>
        </div>
        <Img
          fluid={coverImage.fluid}
          alt={coverImage.alt}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: "-1",
          }}
        />
      </ImageWrapper>
      {!!category && <CategoryWrapper>{category}</CategoryWrapper>}
      {!!title && <Title>{title}</Title>}
      {!!shortDescription && (
        <Description dangerouslySetInnerHTML={{ __html: shortDescription }} />
      )}
      <Author>Por: {author || "Rosella Magazine"}</Author>
      <Date>{date}</Date>
    </CardWrapper>
  )
}

export default PostCard
