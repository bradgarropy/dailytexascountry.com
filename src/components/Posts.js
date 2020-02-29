import React from "react"
import {Link} from "gatsby"
import Img from "gatsby-image"
import PropType from "prop-types"
import styled from "styled-components"

const StyledPosts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
`

const Posts = ({posts}) => {
    return (
        <StyledPosts>
            {posts.map((post, index) => {
                const {slug, title, image} = post.frontmatter

                return (
                    <article key={index}>
                        <Link to={`/blog/${slug}`}>
                            <Img fluid={image.childImageSharp.fluid} />
                            <p>{title}</p>
                        </Link>
                    </article>
                )
            })}
        </StyledPosts>
    )
}

Posts.propTypes = {
    posts: PropType.arrayOf(PropType.object).isRequired,
}

export default Posts
