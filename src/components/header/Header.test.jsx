import Header from "./Header"
import { BrowserRouter } from "react-router-dom"
const { render, screen, fireEvent, getByRole } = require("@testing-library/react")

const MockHeader = () => {
    return (
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    )
};

describe("testing header component", () => {
    test("mobile menu button", () => {
        render(<MockHeader />)
        expect(screen.getByRole("button")).toBeTruthy()
    })

    test("render burger span", () => {
        render(<MockHeader />)
        const menuBtn = screen.getByRole("button")
        const burger = screen.getByTestId("burger-span")
        fireEvent.click(menuBtn)
        expect(burger).toBeDefined()
    })

    test("on click mobile menu nav to be visible", () => {
        render(<MockHeader />)
        const menuBtn = screen.getByRole("button")
        const nav = screen.getByRole("navigation")
        fireEvent.click(menuBtn)
        expect(nav).toBeVisible()
    })
});