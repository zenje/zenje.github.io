import React, { useState, useContext, useEffect, useRef } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Img from "gatsby-image"
import { motion, useAnimation } from "framer-motion"

import { detectMobileAndTablet, isSSR } from "../../utils"
import { useOnScreen } from "../../hooks/"
import ContentWrapper from "../../styles/contentWrapper"
import Button from "../../styles/button"

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  background: ${({ theme }) => theme.colors.background};
  margin-top: 6rem;
`

const StyledContentWrapper = styled(ContentWrapper)`
  && {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 0;
    padding-left: 0;
    @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
    }
    .section-title {
      padding-right: 2.5rem;
      padding-left: 2.5rem;
      @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
        padding-right: 0;
        padding-left: 0;
      }
    }
  }
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  .inner-wrapper {
    transition: all 0.3s ease-out;
  }

  ul {
    display: flex;
    justify-content: space-around;
    margin: 0;
    flex-wrap: wrap;
  }
  li {
    list-style: none;
    margin: 0 1.5rem;
  }
`

const Skills = ({ content }) => {
  const { body, frontmatter } = content[0].node

  const ref = useRef()
  const onScreen = useOnScreen(ref)
  const controls = useAnimation()

  useEffect(() => {
    if (onScreen) controls.start({ opacity: 1, y: 0 })
  }, [controls, onScreen])

  return (
    <StyledSection id="interests">
      <StyledContentWrapper>
        <h3 className="section-title">{frontmatter.title}</h3>
        <StyledContent>
          <motion.div
            className="inner-wrapper"
            ref={ref}
            initial={{ opacity: 0, y: 100 }}
            animate={controls}
          >
            <MDXRenderer>{body}</MDXRenderer>
          </motion.div>
        </StyledContent>
      </StyledContentWrapper>
    </StyledSection>
  )
}

Skills.propTypes = {
  content: PropTypes.arrayOf(
    PropTypes.shape({
      node: PropTypes.shape({
        body: PropTypes.string.isRequired,
        frontmatter: PropTypes.object.isRequired,
      }).isRequired,
    }).isRequired
  ).isRequired,
}

export default Skills
