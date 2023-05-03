import React from "react"
import {fireEvent, render} from "@testing-library/react"
import Pagination from "./Pagination"

describe("Pagination component", () => {
  const defaultProps = {
    pageCount: 10,
    visiblePageButtonsCount: 5,
    currentPage: 1,
    onPageChange: jest.fn(),
  }

  afterEach(() => {
    jest.clearAllMocks()
  })

  it("renders correctly", () => {
    const {container} = render(<Pagination {...defaultProps} />)
    expect(container.firstChild).toMatchSnapshot()
  })

  it("renders no buttons when there is only one page", () => {
    const {container} = render(<Pagination {...defaultProps} pageCount={1}/>)
    expect(container.firstChild).toBeNull()
  })

  it("calculates the visible pages correctly", () => {
    const {getAllByRole} = render(<Pagination {...defaultProps} />)
    const pageButtons = getAllByRole("button").slice(1, -1)
    const pageNumbers = pageButtons.map((button) => Number(button.textContent))
    expect(pageNumbers).toEqual([1, 2, 3, 4, 5])
  })

  it("calculates the visible pages correctly when currentPage is in the middle", () => {
    const {getAllByRole} = render(<Pagination {...defaultProps} currentPage={5}/>)
    const pageButtons = getAllByRole("button").slice(1, -1)
    const pageNumbers = pageButtons.map((button) => Number(button.textContent))
    expect(pageNumbers).toEqual([3, 4, 5, 6, 7])
  })

  it("calculates the visible pages correctly when currentPage is at the end", () => {
    const {getAllByRole} = render(<Pagination {...defaultProps} currentPage={10}/>)
    const pageButtons = getAllByRole("button").slice(1, -1)
    const pageNumbers = pageButtons.map((button) => Number(button.textContent))
    expect(pageNumbers).toEqual([6, 7, 8, 9, 10])
  })

  it("calls onPageChange with the correct page number when a page button is clicked", () => {
    const {getAllByRole} = render(<Pagination {...defaultProps} />)
    const pageButtons = getAllByRole("button").slice(1, -1)
    const page3Button = pageButtons.find((button) => button.textContent === "3")
    fireEvent.click(page3Button as HTMLElement)
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(3)
  })

  it("calls onPageChange with the correct page number when the previous page button is clicked", () => {
    const {getByTestId} = render(<Pagination {...defaultProps} currentPage={3}/>)
    fireEvent.click(getByTestId('prev'))
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(2)
  })

  it("calls onPageChange with the correct page number when the next page button is clicked", () => {
    const {getByTestId} = render(<Pagination {...defaultProps} currentPage={3}/>)
    fireEvent.click(getByTestId('next'))
    expect(defaultProps.onPageChange).toHaveBeenCalledWith(4)
  })

  it("disables the previous page button when currentPage is 1", () => {
    const {getAllByRole} = render(<Pagination {...defaultProps} currentPage={1}/>)
    const [prevPageButton] = getAllByRole("button")
    expect(prevPageButton).toBeDisabled()
  })
})