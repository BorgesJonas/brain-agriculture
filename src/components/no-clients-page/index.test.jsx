import { render, screen } from "@testing-library/react";
import { NoClientsPage } from "./index";

describe("NoClientsPage", () => {
  test("renders no clients message", () => {
    render(<NoClientsPage />);

    const titleMessage = screen.getByText(/nenhum dado disponível/i);
    const message = screen.getByText(
      /desculpe, ainda não há nenhum cliente cadastrado/i
    );

    expect(titleMessage).toBeInTheDocument();
    expect(message).toBeInTheDocument();
  });
});
