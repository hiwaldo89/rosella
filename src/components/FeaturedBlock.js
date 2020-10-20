import React from "react"
import styled from "@emotion/styled"
import Img from "gatsby-image"

import Container from "./Container"
import Row from "./Row"
import Column from "./Column"

const SectionWrapper = styled.section`
  padding-top: 80px;
`
const TopHeading = styled.h3`
  font-weight: 500;
  font-size: 0.8rem;
  letter-spacing: 0.25em;
  margin-bottom: 55px;
`
const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.secondary};
  font-weight: 300;
  letter-spacing: 0.25em;
  font-size: 1.5rem;
  line-height: 40px;
  margin-bottom: 65px;
`

const Content = styled.div`
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 0.1em;
  line-height: 40px;
`

const FeaturedBlock = ({ content }) => {
  console.log(content)
  return (
    <SectionWrapper>
      <Container>
        <Row alignItems="center">
          <Column md={5}>
            {!!content.top_heading && (
              <TopHeading>{content.top_heading.text}</TopHeading>
            )}
            {!!content.title && <Title>{content.title.text}</Title>}
            {!!content.content && (
              <Content
                dangerouslySetInnerHTML={{ __html: content.content.html }}
              />
            )}
          </Column>
          <Column md={7}>
            {!!content.image && (
              <Img fluid={content.image.fluid} alt={content.image.alt || ""} />
            )}
          </Column>
        </Row>
      </Container>
    </SectionWrapper>
  )
}

export default FeaturedBlock
