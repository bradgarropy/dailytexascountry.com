import React from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "../../styles/Image"

const StyledFeaturedPosts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
`

const StyledPost = styled.article`
    display: grid;
    gap: 1rem;
    align-content: start;
`

const PostTitle = styled(Link)`
    h2 {
        margin: 0;
    }
`

const FeaturedPosts = ({posts}) => {
    return (
        <StyledFeaturedPosts>
            {posts.map((post, index) => {
                const {slug, title} = post.frontmatter
                const image = post.frontmatter.image.childImageSharp.fluid

                return (
                    <StyledPost key={index}>
                        <Link to={`/blog/${slug}`}>
                            <Image fluid={image} />
                        </Link>

                        <PostTitle to={`/blog/${slug}`}>
                            <h2>{title}</h2>
                        </PostTitle>
                    </StyledPost>
                )
            })}
        </StyledFeaturedPosts>
    )
}

FeaturedPosts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default FeaturedPosts
