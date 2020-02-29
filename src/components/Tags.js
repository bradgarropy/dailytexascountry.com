import React from "react"
import {Link} from "gatsby"
import PropType from "prop-types"

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
    tags: PropType.arrayOf(PropType.string).isRequired,
}

export default Tags
