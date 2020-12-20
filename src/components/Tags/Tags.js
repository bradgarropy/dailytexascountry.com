import PropTypes from "prop-types"
import styled from "styled-components"
import Tag from "styles/Tag"

const StyledTags = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 2rem;

    a {
        margin-bottom: 1rem;
    }

    a:not(:last-child) {
        margin-right: 1rem;
    }
`

const Tags = ({tags}) => {
    return (
        <StyledTags>
            {tags.map((tag, index) => {
                return (
                    <Tag key={index} to={`/tags/${tag}`} size="M">
                        {tag}
                    </Tag>
                )
            })}
        </StyledTags>
    )
}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Tags
