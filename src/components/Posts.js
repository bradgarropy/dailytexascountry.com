import React from "react"
import {Link} from "gatsby"
import PropType from "prop-types"

const Posts = ({posts}) => {
    return (
        <ul>
            {posts.map((post, index) => {
                const {slug} = post.frontmatter

                return (
                    <li key={index}>
                        <Link to={`/blog/${slug}`}>{slug}</Link>
                    </li>
                )
            })}
        </ul>
    )
}

Posts.propTypes = {
    posts: PropType.arrayOf(PropType.object).isRequired,
}

export default Posts
