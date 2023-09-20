import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { App } from "./App";

test("renders login screen", () => {
  render(<App />);
  const element = screen.queryByText("Login");
  expect(element).toBeInTheDocument();
});
