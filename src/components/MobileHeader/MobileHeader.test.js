import {useApp} from "hooks"
import {render, screen} from "test-utils/render"
import MobileHeader from "components/MobileHeader"
import {generateAppCtx} from "test-utils/generators"

jest.mock("hooks")

test("shows closed mobile header", () => {
    useApp.mockReturnValue(generateAppCtx())

    render(<MobileHeader />)
    expect(screen.getByLabelText("DTXC")).toHaveAttribute("href", "/")
})

test("shows open mobile header", () => {
    useApp.mockReturnValue(generateAppCtx({open: true}))

    render(<MobileHeader />)
    expect(screen.getByLabelText("DTXC")).toHaveAttribute("href", "/")
})
