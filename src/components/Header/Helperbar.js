import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"

import { breakpoints, mq } from "../../utils/mediaQueries"

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const AnnouncementBar = styled.div(({ theme }) => ({
  backgroundColor: theme.colors.pink,
  color: theme.colors.bermellon,
  fontSize: "0.8rem",
  flex: 1,
  padding: "0.5rem 15px",
  textAlign: "center",
  letterSpacing: "0.25em",
  [mq[0]]: {
    padding: `0.5rem calc(50vw - ${(breakpoints[0] - 30) / 2}px)`,
  },
  [mq[1]]: {
    paddingLeft: `calc(50vw - ${(breakpoints[1] - 30) / 2}px)`,
    paddingRight: "0",
    textAlign: "left",
  },
  [mq[2]]: {
    paddingLeft: `calc(50vw - ${(breakpoints[2] - 30) / 2}px)`,
  },
  [mq[3]]: {
    paddingLeft: `calc(50vw - ${(breakpoints[3] - 30) / 2}px)`,
  },
}))

const SubscribeButton = styled.button(({ theme }) => ({
  backgroundColor: theme.colors.bermellon,
  color: theme.colors.pink,
  border: "none",
  display: "none",
  textTransform: "uppercase",
  fontSize: "0.8rem",
  letterSpacing: "0.25em",
  [mq[1]]: {
    padding: `0 calc(50vw - ${(breakpoints[1] - 30) / 2}px)`,
    display: "block",
  },
  [mq[2]]: {
    padding: `0 calc(50vw - ${(breakpoints[2] - 30) / 2}px)`,
  },
  [mq[3]]: {
    padding: `0 calc(50vw - ${(breakpoints[3] - 30) / 2}px)`,
  },
}))

const Helperbar = () => {
  const { prismicHeader } = useStaticQuery(graphql`
    {
      prismicHeader {
        data {
          announcement {
            html
          }
        }
      }
    }
  `)
  return (
    <Wrapper>
      <AnnouncementBar
        dangerouslySetInnerHTML={{
          __html: prismicHeader.data.announcement.html,
        }}
      />
      <SubscribeButton>Suscríbete</SubscribeButton>
    </Wrapper>
  )
}

export default Helperbar
