import { describe, vi } from "vitest";
import { render, screen, cleanup } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ClientsProvider } from "../../context";
import { Clients } from "./index";

afterEach(cleanup);

describe("Clients page", () => {
  vi.mock("../../context", async (importModule) => {
    const module = await importModule();
    return {
      ...module,
      useClientsContext: vi.fn(() => ({
        clients: [
          {
            id: 1,
            document: "12345678901",
            productorName: "João Silva",
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

  test("renders Clients page with client data", async () => {
    render(
      <MemoryRouter>
        <ClientsProvider>
          <Clients />
        </ClientsProvider>
      </MemoryRouter>
    );

    expect(screen.getByText("João Silva")).toBeInTheDocument();
    expect(screen.getByText("Farm A")).toBeInTheDocument();
    expect(screen.getByText("123.456.789-01")).toBeInTheDocument();
    expect(screen.getByText("Rio Grande do Sul")).toBeInTheDocument();
    expect(screen.getByText("Porto Alegre")).toBeInTheDocument();
    expect(screen.getByText("100 ha")).toBeInTheDocument();
    expect(screen.getByText("80 ha")).toBeInTheDocument();
    expect(screen.getByText("20 ha")).toBeInTheDocument();
    expect(screen.getByText("Soja")).toBeInTheDocument();
  });
});
