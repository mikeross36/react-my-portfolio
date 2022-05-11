import { render, screen } from "@testing-library/react"
import About from "./About"

describe("testing about component", () => {
    test("render about background image", () => {
        render(<About />)
        const image = screen.getByTestId("about-img")
        expect(image).toBeVisible()
    })

    test("should display title", () => {
        render(<About />)
        const title = screen.getByText(/Academic Qualification/)
        expect(title).toBeTruthy()
    })

    test("should render resume qualifications", () => {
        render(<About />)
        const cv = screen.getAllByTestId("cv")
        expect(cv).toBeTruthy()
    })
})