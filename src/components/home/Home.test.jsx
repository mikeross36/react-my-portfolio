import {render, screen} from "@testing-library/react"
import Home from "./Home"
import Footer from "../footer/Footer"

describe("testing home component", () => {
    test("should render name heading", () => {
        render(<Home />)
        const name = screen.getByText(/Vladimir Monarov/)
        expect(name).toBeTruthy()
    })
    test("should render title text", () => {
        render(<Home />)
        const title = screen.getByText(/front-end developer/)
        expect(title).toBeTruthy()
    })
    test("render home background image", () => {
        render(<Home />)
        const home = screen.getByTestId("home-div")
        expect(home).toHaveStyle({
            background: 'url(../../images/portfolio-1.jpg) center top/cover no-repeat'
        })
    })
    test("shoud render Footer component", () => {
        render(<Footer />)
    })
})