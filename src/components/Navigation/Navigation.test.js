import {useApp} from "hooks"
import {mockAppCtx} from "test-utils/mocks"
import Navigation from "components/Navigation"
import {render, screen} from "test-utils/render"
import userEvent from "@testing-library/user-event"

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
