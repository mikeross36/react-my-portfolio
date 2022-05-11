import {render, screen} from "@testing-library/react"
import Projects from "./Projects"

describe("testing Projects component", () => {
    test("render projects image div", () => {
        render(<Projects />)
        const image = screen.getByTestId("project-img")
        expect(image).toBeTruthy()
    })
    test("should reneder projects title", () => {
        render(<Projects />)
        const title = screen.getByText(/some of my projects.../)
        expect(title).toBeTruthy()
    })
    test("should render project items", () => {
        render(<Projects />)
        const items = screen.getAllByTestId("items")
        expect(items).toBeTruthy()
    })
    test("project links should be accessible", () => {
        render(<Projects />)
        const links = screen.getAllByRole("link")
        expect(links[0].href).toContain("https://some-responsive-website.netlify.app/")
    })
})