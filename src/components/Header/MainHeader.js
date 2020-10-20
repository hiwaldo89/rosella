import React from "react"
import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"

import Logo from "../../images/logo.svg"
import Column from "../Column"
import Row from "../Row"
import Container from "../Container"
import Facebook from "../../images/facebook.inline.svg"
import Instagram from "../../images/instagram.inline.svg"
import Pinterest from "../../images/pinterest.inline.svg"
import Twitter from "../../images/twitter.inline.svg"
import Envelope from "../../images/envelope.inline.svg"
import Search from "../../images/search.inline.svg"
import Hamburger from "../../images/menu.inline.svg"
import { mq } from "../../utils/mediaQueries"

const Wrapper = styled.div`
  background-color: #fff;
  padding: 1.8rem 0;
`

const Brand = styled.img`
  display: block;
  width: 100%;
  max-width: 180px;
  height: auto;
  ${mq[1]} {
    margin: auto;
  }
`

const SocialLinks = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    margin-right: 1rem;
  }
  svg {
    width: 20px;
  }
`

const ColumnRight = styled(Column)`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const SearchButton = styled.button`
  background: transparent;
  border: none;
  margin: 0;
  padding: 0;
  width: 18px;
  svg {
    width: 100%;
  }
`

const HamburgerButton = styled.button`
  background: transparent;
  border: none;
  margin: 0 1.2rem;
  padding: 0;
  width: 20px;
  svg {
    width: 100%;
  }
`

const socialIcon = item => {
  switch (item) {
    case "facebook":
      return <Facebook />
    case "instagram":
      return <Instagram />
    case "pinterest":
      return <Pinterest />
    case "twitter":
      return <Twitter />
    case "email":
      return <Envelope />
    default:
      return null
  }
}

const MainHeader = () => {
  const { prismicHeader } = useStaticQuery(graphql`
    {
      prismicHeader {
        data {
          twitter {
            target
            url
          }
          pinterest {
            url
            target
          }
          instagram {
            url
            target
          }
          facebook {
            url
            target
          }
          email {
            url
            target
          }
        }
      }
    }
  `)

  const contactItems = [
    "facebook",
    "instagram",
    "pinterest",
    "twitter",
    "email",
  ]
  return (
    <Wrapper>
      <Container>
        <Row alignItems="center">
          <Column md={4} className="d-none d-md-block">
            <SocialLinks>
              {contactItems.map(
                item =>
                  !!prismicHeader.data[item].url && (
                    <li key={`main-header-${item}`}>
                      <a
                        href={prismicHeader.data[item].url}
                        target={prismicHeader.data[item].target || "_self"}
                      >
                        {socialIcon(item)}
                      </a>
                    </li>
                  )
              )}
            </SocialLinks>
          </Column>
          <Column xs={6} md={4}>
            <Brand src={Logo} alt="Rosella Magazine" />
          </Column>
          <ColumnRight xs={6} md={4}>
            <SearchButton>
              <Search />
            </SearchButton>
            <HamburgerButton>
              <Hamburger />
            </HamburgerButton>
          </ColumnRight>
        </Row>
      </Container>
    </Wrapper>
  )
}

export default MainHeader
