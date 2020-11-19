import Social from "components/Social"
import {render, screen} from "test-utils/render"

test("shows social", () => {
    render(<Social />)

    const socials = ["Twitter", "YouTube", "Instagram", "Spotify"]

    socials.forEach(social => {
        expect(screen.getByLabelText(social)).toHaveAttribute(
            "href",
            `/${social.toLowerCase()}`,
        )
    })
})
