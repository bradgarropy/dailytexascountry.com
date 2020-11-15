import {Link} from "gatsby"
import Image from "styles/Image"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledFeaturedPosts = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;

    @media (max-width: ${({theme}) => theme.breakpoints.tablet}) {
        grid-template-rows: repeat(3, auto);
        grid-template-columns: none;
    }
`

const StyledPost = styled.article`
    display: grid;
    gap: 1rem;
    align-content: start;
`

const PostMeta = styled.div`
    display: grid;
`

const PostTitle = styled(Link)`
    justify-self: start;

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
                        <Link aria-label={title} to={`/posts/${slug}`}>
                            <Image fluid={image} />
                        </Link>

                        <PostMeta>
                            <PostTitle to={`/posts/${slug}`}>
                                <h2>{title}</h2>
                            </PostTitle>
                        </PostMeta>
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
