import { render, screen } from "@testing-library/react";
import { Navigation } from "./index";
import { BrowserRouter as Router } from "react-router-dom";

describe("Navigation", () => {
  test("renders navigation links", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );

    const dashboardLink = screen.getByRole("link", { name: /dashboard/i });
    const clientesLink = screen.getByRole("link", { name: /clientes/i });
    const cadastroLink = screen.getByRole("link", { name: /cadastro/i });

    expect(dashboardLink).toBeInTheDocument();
    expect(clientesLink).toBeInTheDocument();
    expect(cadastroLink).toBeInTheDocument();
  });

  test("renders the brand", () => {
    render(
      <Router>
        <Navigation />
      </Router>
    );

    const brandElement = screen.getByText(/brain agriculture/i);
    expect(brandElement).toBeInTheDocument();
  });
});
