import Header from "components/Header"
import {useApp} from "hooks"
import {mockAppCtx} from "test-utils/mocks"
import {render, screen} from "test-utils/render"

jest.mock("hooks")
useApp.mockReturnValue(mockAppCtx)

test("shows header", () => {
    render(<Header />)
    expect(screen.getByLabelText("DTXC")).toHaveAttribute("href", "/")
})
