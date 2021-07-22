import { render, screen } from "@testing-library/react";
import Result, { NO_IMG_AVAILABLE } from ".";

test("renders title", () => {
  render(<Result title="Avengers" year="1900" thumbnail="index.jpg" />);
  const title = screen.getByText(/Avengers/i);
  expect(title).toBeInTheDocument();
});
test("result should have a thumbnail and alt text", () => {
  render(<Result title="Avengers" year="1900" thumbnail="index.jpg" />);
  const image = document.querySelector("img");

  screen.getByAltText(/Avengers/i);
  expect(image.src).toContain("index.jpg");
});

test("result should have alternative thumbnail and alt text", () => {
  render(<Result title="Avengers" year="1900" />);
  const image = document.querySelector("img");

  screen.getByAltText(/Avengers/i);
  expect(image.src).toContain(NO_IMG_AVAILABLE);
});
