import { render, screen } from "@testing-library/react";
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { FormProvider, useForm } from "react-hook-form";

import { Modal } from "./index";

function Component({ isVisible, onConfirm, onClose }) {
  return (
    <Modal
      isVisible={isVisible}
      title="Modal Title"
      message="Modal Message"
      onConfirm={onConfirm}
      onClose={onClose}
    />
  );
}

describe("Modal", () => {
  test("Modal data should not be visible", () => {
    render(<Component isVisible={false} onConfirm={vi.fn} onClose={vi.fn} />);

    const modalTitle = screen.queryByText(/modal title/i);
    const modalMessage = screen.queryByText(/modal message/i);
    expect(modalTitle).not.toBeInTheDocument();
    expect(modalMessage).not.toBeInTheDocument();
  });

  test("Modal data should be visible", () => {
    render(<Component isVisible={true} onConfirm={vi.fn} onClose={vi.fn} />);

    const modalTitle = screen.queryByText(/modal title/i);
    const modalMessage = screen.queryByText(/modal message/i);
    expect(modalTitle).toBeInTheDocument();
    expect(modalMessage).toBeInTheDocument();
  });

  test("Should call onConfirm", async () => {
    const onConfirmMock = vi.fn();
    render(
      <Component isVisible={true} onConfirm={onConfirmMock} onClose={vi.fn} />
    );

    const modalTitle = screen.queryByText(/modal title/i);
    const modalMessage = screen.queryByText(/modal message/i);
    expect(modalTitle).toBeInTheDocument();
    expect(modalMessage).toBeInTheDocument();

    const confirmButton = screen.getByText(/confirmar/i);
    await userEvent.click(confirmButton);
    expect(onConfirmMock).toHaveBeenCalledTimes(1);
  });

  test("Should call onClose", async () => {
    const onCloseMock = vi.fn();
    render(
      <Component isVisible={true} onConfirm={vi.fn} onClose={onCloseMock} />
    );

    const modalTitle = screen.queryByText(/modal title/i);
    const modalMessage = screen.queryByText(/modal message/i);
    expect(modalTitle).toBeInTheDocument();
    expect(modalMessage).toBeInTheDocument();

    const cancelButton = screen.getByText(/cancelar/i);
    await userEvent.click(cancelButton);
    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });
});
