import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Navigation } from "./components";
import { ClientsProvider } from "./context";
import { Register, Clients, DashBoard } from "./pages";

function AppBaseComponent() {
  return (
    <div>
      <ClientsProvider>
        <Navigation />
        <main>
          <Outlet />
        </main>
      </ClientsProvider>
      <ToastContainer />
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppBaseComponent />,
    children: [
      {
        path: "cadastro/:id?",
        element: <Register />,
      },
      {
        path: "clientes",
        element: <Clients />,
      },
      {
        path: "/",
        element: <DashBoard />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
