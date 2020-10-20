import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery, Link } from "gatsby"
import AdSense from "react-adsense"

import Container from "./Container"
import Row from "./Row"
import Column from "./Column"
import PostCard from "./PostCard"
import { mq } from "../utils/mediaQueries"

const SectionWrapper = styled.section`
  padding-top: 80px;
`

const SectionTitle = styled.h2`
  letter-spacing: 0.25em;
  font-size: 1rem;
  line-height: 50px;
  font-weight: 400;
  margin-bottom: 2.5rem;
`

const StyledLink = styled(Link)`
  margin-bottom: 2.3rem;
  display: block;
  height: 100%;
  ${mq[3]} {
    margin-bottom: 0;
  }
`

const getPostsByCategories = (posts, categories, limit) => {
  if (categories.lenght > 0) {
    const result = posts.filter(post => {
      const postCatIds = post.data.categories.map(cat => cat.category.id)
      return categories.some(cat => postCatIds.includes(cat))
    })
    return result.slice(0, limit)
  }
  return posts.slice(0, limit)
}

const PostsFeed = ({ content, filters = [], limit = 4 }) => {
  console.log(process.env.NODE_ENV)
  const categories = filters.map(filter => filter.filter_by_category.id)
  const { allPrismicBlogPosts } = useStaticQuery(graphql`
    {
      allPrismicBlogPosts(
        sort: { fields: first_publication_date, order: DESC }
      ) {
        nodes {
          id
          uid
          first_publication_date(formatString: "DD.MM.YY")
          data {
            title {
              text
            }
            cover_image {
              alt
              fluid {
                ...GatsbyPrismicImageFluid
              }
            }
            categories {
              category {
                id
                slug
                document {
                  ... on PrismicCategories {
                    id
                    data {
                      title {
                        text
                      }
                    }
                  }
                }
              }
            }
            short_description {
              html
            }
          }
        }
      }
    }
  `)

  const posts = getPostsByCategories(
    allPrismicBlogPosts.nodes,
    categories,
    limit
  )

  return (
    <SectionWrapper>
      <Container>
        {!!content.title1 && <SectionTitle>{content.title1.text}</SectionTitle>}
        <Row>
          {posts.map(post => (
            <Column key={post.id} md={6} lg={3}>
              <StyledLink to={`/blog/${post.uid}`}>
                <PostCard
                  coverImage={post.data.cover_image}
                  category={
                    post.data.categories[0].category.document.data.title.text
                  }
                  title={post.data.title.text}
                  shortDescription={post.data.short_description.html}
                  date={post.first_publication_date}
                />
              </StyledLink>
            </Column>
          ))}
          {limit < 4 && process.env.NODE_ENV === "production" && (
            <AdSense.Google
              client={process.env.GATSBY_AD_CLIENT}
              slot={content.ad_slot.text}
              style={{ display: "block" }}
              format="auto"
              responsive="true"
            />
          )}
        </Row>
      </Container>
    </SectionWrapper>
  )
}

export default PostsFeed
