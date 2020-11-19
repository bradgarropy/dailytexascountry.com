import {useApp} from "hooks"
import {render, screen} from "test-utils/render"
import userEvent from "@testing-library/user-event"
import {generateAppCtx} from "test-utils/generators"
import MobileNavigation from "components/MobileNavigation"

jest.mock("hooks")

const links = ["posts", "episodes", "store", "playlists"]

test("shows closed mobile navigation", () => {
    useApp.mockReturnValue(generateAppCtx())

    render(<MobileNavigation />)

    links.forEach(link =>
        expect(screen.getByText(link.toUpperCase())).toHaveAttribute(
            "href",
            `/${link.toLowerCase()}`,
        ),
    )
})

test("shows open mobile navigation", () => {
    useApp.mockReturnValue(generateAppCtx({open: true}))

    render(<MobileNavigation />)

    links.forEach(link =>
        expect(screen.getByText(link.toUpperCase())).toHaveAttribute(
            "href",
            `/${link.toLowerCase()}`,
        ),
    )
})

test("closes mobile navigation", () => {
    useApp.mockReturnValue(generateAppCtx({open: true}))

    render(<MobileNavigation />)

    userEvent.click(screen.getByText(links[0].toUpperCase()))
    expect(mockAppCtx.setOpen).toHaveBeenCalledTimes(1)
    expect(mockAppCtx.setOpen).toHaveBeenCalledWith(false)
})
