import FeaturedPosts from "components/FeaturedPosts"
import {mockPosts} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

test("shows featured posts", () => {
    render(<FeaturedPosts posts={mockPosts} />)

    mockPosts.forEach(post => {
        expect(
            screen.getByText(post.frontmatter.title).parentElement,
        ).toHaveAttribute("href", `/posts/${post.frontmatter.slug}`)

        expect(screen.getByLabelText(post.frontmatter.title)).toHaveAttribute(
            "href",
            `/posts/${post.frontmatter.slug}`,
        )
    })
})
