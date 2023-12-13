import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import userEvent from "@testing-library/user-event";

import { Button } from "./index";

describe("Button", () => {
  test("Renders button with text", () => {
    render(<Button>Click me</Button>);

    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  test("calls onClick function when button is clicked", async () => {
    const onClickMock = vi.fn();
    render(<Button onClick={onClickMock}>Click me</Button>);

    const buttonElement = screen.getByText(/Click me/i);
    await userEvent.click(buttonElement);

    expect(onClickMock).toHaveBeenCalled();
  });

  test("Button is disabled when disabled prop is true", () => {
    render(<Button disabled>Click me</Button>);

    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeDisabled();
  });
});
