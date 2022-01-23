import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { MDXRenderer } from "gatsby-plugin-mdx"

import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

const StyledModal = styled(Modal)`
  @media (min-width: 576px) {
    .modal-dialog {
      max-width: 700px;
    }
  }
  .modal-content {
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
  }
  h3 {
    margin-bottom: 1rem;
  }
  a {
    transition: all 0.3s ease-out;
  }
  a:hover {
    color: ${({ theme }) => theme.colors.subtext};
    margin-left: 1rem;
  }
  em {
    letter-spacing: 1px;
  }
`

const PreviewGif = styled.img`
  width: 100%;
  padding: 1rem;
  margin-bottom: 1rem;
`

const renderLink = (text, link) => {
  return (
    link && (
      <>
        <b>
          {`> `}
          <a
            href={link}
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label="External Link"
          >
            {text}
          </a>
        </b>
      </>
    )
  )
}

const ProjectModal = ({ show, handleClose, project }) => {
  if (project) {
    const { body, frontmatter } = project.node
    return (
      <StyledModal show={show} onHide={handleClose}>
        <Modal.Header closeButton closeVariant="white">
          <Modal.Title>{frontmatter.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {frontmatter.preview && (
            <PreviewGif className="screenshot" src={frontmatter.preview.path} />
          )}
          <p>
            {renderLink("visit this site", frontmatter.external)}
            <br />
            {renderLink("view on Github", frontmatter.github)}
          </p>
          <MDXRenderer>{body}</MDXRenderer>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </StyledModal>
    )
  }
  return null
}

ProjectModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  project: PropTypes.shape({
    node: PropTypes.shape({
      body: PropTypes.string.isRequired,
      frontmatter: PropTypes.object.isRequired,
    }).isRequired,
  }),
  show: PropTypes.bool.isRequired,
}

export default ProjectModal
