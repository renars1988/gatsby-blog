import React from 'react'
import Img from "gatsby-image"

import {Wrapper, StyledImg, StyledSpan, StyledParagraph, StyledLink} from './blog-preview-card.styles'
import Heading from "../heading/heading"


const BlogPreviewCard = ({title, date, slug, image, excerpt, author }) => (
    <Wrapper>
        <Img fluid={image}/>
        <Heading h5 center uppercase>{title}</Heading>
        <StyledSpan>{date}</StyledSpan>
        <StyledParagraph>{excerpt}</StyledParagraph>
        <StyledLink to={slug} >Read more &raquo;</StyledLink>
    </Wrapper>
)

export default BlogPreviewCard