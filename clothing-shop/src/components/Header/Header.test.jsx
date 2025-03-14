import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import { BrowserRouter } from "react-router-dom";

describe("Header Component", () => {
  test("рендерить заголовок сайту", () => {
    render(
      <BrowserRouter>
        <Header
          onLoginClick={() => {}}
          onRegisterClick={() => {}}
          isLoggedIn={false}
          onLogout={() => {}}
        />
      </BrowserRouter>
    );

    expect(screen.getByText(/Crossover/i)).toBeInTheDocument();
  });

  test("відображає кнопку Login, якщо користувач не залогінений", () => {
    render(
      <BrowserRouter>
        <Header
          onLoginClick={() => {}}
          onRegisterClick={() => {}}
          isLoggedIn={false}
          onLogout={() => {}}
        />
      </BrowserRouter>
    );

    expect(screen.getByText(/Login/i)).toBeInTheDocument();
  });

  test("відображає кнопку Logout, якщо користувач залогінений", () => {
    render(
      <BrowserRouter>
        <Header
          onLoginClick={() => {}}
          onRegisterClick={() => {}}
          isLoggedIn={true}
          onLogout={() => {}}
        />
      </BrowserRouter>
    );

    expect(screen.getByText(/Logout/i)).toBeInTheDocument();
  });
});
