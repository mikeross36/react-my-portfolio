import { render, screen } from "@testing-library/react"
import Socials from "./Socials"

describe("testing Socials component", () => {
    test("social icons should be visible", () => {
        render(<Socials />)
        const icons = screen.getAllByTestId("soc-icon")
        expect(icons).toBeTruthy()
    })
    test("social medial link should work", () => {
        render(<Socials />)
        const links = screen.getAllByRole("link")
        expect(links[0].href).toContain("https://sr-rs.facebook.com/fitposle.cetrdeset")
    })
})