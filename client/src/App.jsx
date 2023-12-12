import "./App.css";
import Auth from "./components/auth";
import Signup from "./components/signup";
import TodoApp from "./components/todoapp";
import { APIContextProvider } from "./context/apiContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <APIContextProvider>
      <main className="main">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<TodoApp />} />
            <Route path="/login" element={<Auth />} />
            <Route path="/sign-up" element={<Signup />} />
          </Routes>
        </BrowserRouter>
      </main>
    </APIContextProvider>
  );
}

export default App;
