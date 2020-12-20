import userEvent from "@testing-library/user-event"
import Navigation from "components/Navigation"
import {useApp} from "hooks"
import {mockAppCtx} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

jest.mock("hooks")
useApp.mockReturnValue(mockAppCtx)

const links = ["posts", "episodes", "store", "playlists"]

test("shows navigation", () => {
    render(<Navigation />)

    links.forEach(link =>
        expect(screen.getByText(link.toUpperCase())).toHaveAttribute(
            "href",
            `/${link.toLowerCase()}`,
        ),
    )
})

test("closes navigation", () => {
    render(<Navigation />)

    userEvent.click(screen.getByText(links[0].toUpperCase()))

    expect(mockAppCtx.setOpen).toHaveBeenCalledTimes(1)
    expect(mockAppCtx.setOpen).toHaveBeenCalledWith(false)
})
