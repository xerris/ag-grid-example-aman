import { render, screen } from "@testing-library/react";
import Dashboard from "./Components/Dashboard";

test("renders Dashboard component", () => {
  render(<Dashboard />);
  expect(screen.getByText(/premier league/i)).toBeInTheDocument();
  expect(
    screen.getByRole("gridcell", { name: /arsenal/i })
  ).toBeInTheDocument();
});
