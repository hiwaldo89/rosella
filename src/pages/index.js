import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Slider from "../components/Slider"
import FeaturedBlock from "../components/FeaturedBlock"
import PostsFeed from "../components/PostsFeed"
import PostsFeedWithAd from "../components/PostsFeedWithAd"

export const { prismicHomepage } = graphql`
  {
    prismicHomepage {
      data {
        body {
          ... on PrismicHomepageBodySlider {
            id
            slice_type
            items {
              title {
                text
              }
              image {
                fluid {
                  ...GatsbyPrismicImageFluid
                }
              }
              top_text {
                text
              }
              description {
                html
              }
              button_text {
                text
              }
            }
          }
          ... on PrismicHomepageBodyFeaturedBlock {
            id
            slice_type
            primary {
              image {
                fluid {
                  ...GatsbyPrismicImageFluid
                }
                alt
              }
              top_heading {
                text
              }
              title {
                text
              }
              content {
                html
              }
            }
          }
          ... on PrismicHomepageBodyPostsFeed {
            id
            slice_type
            primary {
              title1 {
                text
              }
            }
            items {
              filter_by_category {
                id
              }
            }
          }
          ... on PrismicHomepageBodyPostsFeedWithAd {
            id
            slice_type
            primary {
              title1 {
                text
              }
              ad_slot {
                text
              }
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SEO title="Inicio" />
      {data.prismicHomepage.data.body.map(slice => {
        switch (slice.slice_type) {
          case "slider":
            return <Slider key={slice.id} slides={slice.items || []} />
          case "featured__block":
            return <FeaturedBlock key={slice.id} content={slice.primary} />
          case "posts_feed":
            return (
              <PostsFeed
                key={slice.id}
                content={slice.primary}
                filters={slice.items}
              />
            )
          case "posts_feed_with_ad":
            return (
              <PostsFeed key={slice.id} limit={3} content={slice.primary} />
            )
          default:
            return null
        }
      })}
    </Layout>
  )
}

export default IndexPage
