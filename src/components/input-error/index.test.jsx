import { render, screen } from "@testing-library/react";
import { expect } from "vitest";

import { InputError } from "./index";

describe("InputError", () => {
  test("Should render component", () => {
    render(<InputError message="Test Message" />);

    const testMessage = screen.getByText(/test message/i);
    expect(testMessage).toBeInTheDocument();
  });
});
