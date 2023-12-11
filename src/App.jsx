import { ToastContainer } from "react-toastify";
import { Navigation, Form } from "./components";
import { ClientsProvider } from "./context";

function App() {
  return (
    <div>
      <Navigation />
      <ClientsProvider>
        <Form />
      </ClientsProvider>
      <ToastContainer />
    </div>
  );
}

export default App;
