import { render, screen } from "@testing-library/react";
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";
import { FormProvider, useForm } from "react-hook-form";
import selectEvent from "react-select-event";

import { MultiSelect } from "./index";

const options = [
  {
    label: "Strawberry",
    value: "strawberry",
  },
  {
    label: "Mango",
    value: "mango",
  },
  {
    label: "Chocolate",
    value: "chocolate",
  },
];

function Component({ children }) {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form
        onSubmit={methods.handleSubmit(vi.fn)}
        noValidate
        autoComplete="off"
        data-testid="select-form"
      >
        {children}
      </form>
    </FormProvider>
  );
}

describe("Select", () => {
  test("Should render component", () => {
    render(
      <Component>
        <MultiSelect
          options={options}
          id="select"
          name="select"
          label="Select"
        />
      </Component>
    );

    const documentInput = screen.getByLabelText(/select/i);
    expect(documentInput).toBeInTheDocument();
  });

  test("Should select value", async () => {
    render(
      <Component>
        <MultiSelect
          options={options}
          id="select"
          name="select"
          label="Select"
        />
      </Component>
    );

    const documentInput = screen.getByLabelText(/select/i);
    await selectEvent.select(documentInput, "Mango");
    const form = screen.getByTestId("select-form");
    expect(form).toHaveFormValues({ select: "mango" });
  });
});
