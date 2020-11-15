import {Link} from "gatsby"
import Tag from "styles/Tag"
import Title from "styles/Title"
import PropTypes from "prop-types"
import styled from "styled-components"

const StyledPostMeta = styled.div`
    display: grid;
`

const PostTitle = styled(Link)`
    justify-self: start;
`

const Tags = styled.div`
    display: grid;
    grid-auto-flow: column;
    justify-content: start;
    gap: 0.5rem;
    margin-top: 0.3rem;
`

const PostMeta = ({post}) => {
    const {slug, title, date, tags} = post.frontmatter

    return (
        <StyledPostMeta>
            <span>{date}</span>

            <PostTitle to={`/posts/${slug}`}>
                <Title>{title}</Title>
            </PostTitle>

            <Tags>
                {tags.map((tag, index) => (
                    <Tag key={index} to={`/tags/${tag}`} size="S">
                        {tag}
                    </Tag>
                ))}
            </Tags>
        </StyledPostMeta>
    )
}

PostMeta.propTypes = {
    post: PropTypes.object.isRequired,
}

export default PostMeta
