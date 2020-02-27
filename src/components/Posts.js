import React from "react"
import {Link} from "gatsby"
import PropType from "prop-types"

const Posts = ({posts}) => {
    return (
        <>
            <h1>blog</h1>

            <ul>
                {posts.map((post, index) => {
                    const {relativeDirectory} = post

                    return (
                        <li key={index}>
                            <Link to={`/blog/${relativeDirectory}`}>
                                {relativeDirectory}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

Posts.propTypes = {
    posts: PropType.arrayOf(PropType.object).isRequired,
}

export default Posts
