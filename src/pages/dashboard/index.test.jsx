import { describe, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ClientsProvider } from "../../context";
import { DashBoard } from "./index";

vi.mock("react-chartjs-2", () => ({
  Pie: () => null,
}));

describe("Dashboard", () => {
  test("renders DashBoard with client data", () => {
    vi.mock("../../context", async (importModule) => {
      const module = await importModule();
      return {
        ...module,
        useClientsContext: vi.fn(() => ({
          clients: [
            {
              id: 1,
              document: "12345678901",
              productorName: "John Doe",
              farmName: "Farm A",
              state: { label: "Rio Grande do Sul", value: "RS" },
              city: "Porto Alegre",
              totalArea: 100,
              agriculturalArea: 80,
              vegetationArea: 20,
              plantedCrops: [{ label: "Soja" }],
            },
          ],
        })),
      };
    });

    render(
      <MemoryRouter>
        <ClientsProvider>
          <DashBoard />
        </ClientsProvider>
      </MemoryRouter>
    );

    expect(screen.getByText("Total de Fazendas")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("Total de Hectares")).toBeInTheDocument();
    expect(screen.getByText("100 ha")).toBeInTheDocument();
    expect(screen.getByText("Total por Estado")).toBeInTheDocument();
    expect(screen.getByText("Total por Cultura")).toBeInTheDocument();
    expect(screen.getByText("Total por uso de solo")).toBeInTheDocument();
  });
});
