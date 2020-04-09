import React from "react"
import {Link} from "gatsby"
import PropTypes from "prop-types"

const Tags = ({tags}) => {
    return (
        <ul>
            {tags.map((tag, index) => {
                return (
                    <li key={index}>
                        <Link to={`/tags/${tag}`}>{tag}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Tags
