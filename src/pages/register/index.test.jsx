import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Register } from "./index";

vi.mock("react-toastify", async () => {
  return {
    ...vi.importActual("react-toastify"),
    toast: {
      success: vi.fn(),
      error: vi.fn(),
    },
  };
});

describe("Register", () => {
  test("renders register form", () => {
    render(
      <MemoryRouter>
        <Register />
      </MemoryRouter>
    );
    const documentInput = screen.getByLabelText(/documento/i);
    const productorNameInput = screen.getByLabelText(/nome produtor/i);
    const farmNameInput = screen.getByLabelText(/nome fazenda/i);
    const stateNameInput = screen.getByLabelText(/estado/i);
    const cityNameInput = screen.getByLabelText(/cidade/i);
    const totalAreaNameInput = screen.getByLabelText(/área total/i);
    const agriculturalAreaNameInput =
      screen.getByLabelText(/área agricultável/i);
    const vegetationAreaNameInput = screen.getByLabelText(/área de vegetação/i);
    const plantedCropsNameInput = screen.getByLabelText(/culturas/i);

    expect(documentInput).toBeInTheDocument();
    expect(productorNameInput).toBeInTheDocument();
    expect(farmNameInput).toBeInTheDocument();
    expect(stateNameInput).toBeInTheDocument();
    expect(cityNameInput).toBeInTheDocument();
    expect(totalAreaNameInput).toBeInTheDocument();
    expect(agriculturalAreaNameInput).toBeInTheDocument();
    expect(vegetationAreaNameInput).toBeInTheDocument();
    expect(plantedCropsNameInput).toBeInTheDocument();
  });
});
