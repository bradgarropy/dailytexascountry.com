import {Link} from "gatsby"
import {getImage} from "gatsby-plugin-image"
import PropTypes from "prop-types"
import styled from "styled-components"
import Image from "styles/Image"

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
                const image = getImage(post.frontmatter.image)

                return (
                    <StyledPost key={index}>
                        <Link aria-label={title} to={`/posts/${slug}`}>
                            <Image image={image} alt={title} />
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
