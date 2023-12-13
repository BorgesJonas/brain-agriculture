import { render, screen } from "@testing-library/react";
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { FormProvider, useForm } from "react-hook-form";

import { Input } from "./index";
import { documentMask } from "../../utils";

function Component({ children }) {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(vi.fn)}
        noValidate
        autoComplete="off"
        data-testid="register-form"
      >
        {children}
      </form>
    </FormProvider>
  );
}

describe("Input", () => {
  test("Should render component", () => {
    render(
      <Component>
        <Input
          name="document"
          label="Documento"
          id="document"
          minLength="14"
          maxLength="18"
          maskFn={documentMask}
        />
      </Component>
    );

    const documentInput = screen.getByLabelText(/documento/i);
    expect(documentInput).toBeInTheDocument();
  });

  test("Should put mask on input change", async () => {
    render(
      <Component>
        <Input
          name="document"
          label="Documento"
          id="document"
          minLength="14"
          maxLength="18"
          maskFn={documentMask}
        />
      </Component>
    );

    const documentInput = screen.getByLabelText(/documento/i);
    await userEvent.type(documentInput, "27465225353");
    expect(documentInput).toHaveValue("274.652.253-53");
  });
});
