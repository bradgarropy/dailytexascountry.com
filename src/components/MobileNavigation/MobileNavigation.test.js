import userEvent from "@testing-library/user-event"
import MobileNavigation from "components/MobileNavigation"
import {useApp} from "hooks"
import {generateAppCtx} from "test-utils/generators"
import {render, screen} from "test-utils/render"

jest.mock("hooks")

const links = ["posts", "episodes", "store", "playlists"]
const mockOpenAppCtx = generateAppCtx({open: true})
const mockClosedAppCtx = generateAppCtx()

test("shows closed mobile navigation", () => {
    useApp.mockReturnValue(mockClosedAppCtx)

    render(<MobileNavigation />)

    links.forEach(link =>
        expect(screen.getByText(link.toUpperCase())).toHaveAttribute(
            "href",
            `/${link.toLowerCase()}`,
        ),
    )
})

test("shows open mobile navigation", () => {
    useApp.mockReturnValue(mockOpenAppCtx)

    render(<MobileNavigation />)

    links.forEach(link =>
        expect(screen.getByText(link.toUpperCase())).toHaveAttribute(
            "href",
            `/${link.toLowerCase()}`,
        ),
    )
})

test("closes mobile navigation", () => {
    useApp.mockReturnValue(mockOpenAppCtx)

    render(<MobileNavigation />)

    userEvent.click(screen.getByText(links[0].toUpperCase()))

    expect(mockOpenAppCtx.setOpen).toHaveBeenCalledTimes(1)
    expect(mockOpenAppCtx.setOpen).toHaveBeenCalledWith(false)
})
