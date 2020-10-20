import React from "react"
import "slick-carousel/slick/slick.css"
import SlickSlider from "react-slick"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import Container from "./Container"
import Row from "./Row"
import Column from "./Column"
import Button from "./Button"
import { mq } from "../utils/mediaQueries"

const Slide = styled.div`
  width: 100%;
  position: relative;
  color: #fff;
  &:after {
    content: "";
    display: block;
    padding-top: 100%;
    ${mq[1]} {
      padding-top: 80%;
    }
    ${mq[2]} {
      padding-top: 50%;
    }
  }
`

const SlideContainer = styled(Container)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  display: flex;
  align-items: center;
`

const TopText = styled.p`
  font-family: ${({ theme }) => theme.fonts.secondary};
  letter-spacing: 0.25em;
  margin-bottom: 19px;
`

const BgImage = styled(Img)`
  position: absolute !important;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  z-index: -1;
`

const Title = styled.h2`
  line-height: 40px;
  font-weight: 400;
  font-size: 2.5rem;
  margin-bottom: 40px;
`

const Description = styled.div`
  margin-bottom: 50px;
`

const StyledSlider = styled(SlickSlider)`
  position: relative;
  .slick-dots {
    list-style: none;
    position: absolute;
    bottom: 30px;
    left: 0;
    right: 0;
    margin: auto;
    display: flex !important;
    justify-content: center;
    align-items: center;
    li {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      border: solid 1px #fff;
      overflow: hidden;
      margin: 0 7px;
      &.slick-active {
        background: #fff;
      }
      button {
        opacity: 0;
      }
    }
  }
`

const settings = {
  arrows: false,
  dots: true,
}

const Slider = ({ slides }) => {
  return (
    <StyledSlider {...settings}>
      {slides.map(
        slide =>
          !!slide.image.fluid && (
            <Slide key={slide}>
              <SlideContainer>
                <Row>
                  <Column md={5}>
                    {!!slide.top_text.text && (
                      <TopText>{slide.top_text.text}</TopText>
                    )}
                    {!!slide.title.text && <Title>{slide.title.text}</Title>}
                    {!!slide.description.html && (
                      <Description
                        dangerouslySetInnerHTML={{
                          __html: slide.description.html,
                        }}
                      />
                    )}
                    {!!slide.button_text.text && (
                      <Button outlined size="lg">
                        {slide.button_text.text}
                      </Button>
                    )}
                  </Column>
                </Row>
              </SlideContainer>
              <BgImage fluid={slide.image.fluid} />
            </Slide>
          )
      )}
    </StyledSlider>
  )
}

export default Slider
