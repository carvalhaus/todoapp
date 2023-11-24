import "./App.css";
import TodoApp from "./components/todoapp";
import { APIContextProvider } from "./context/apiContext";

function App() {
  return (
    <APIContextProvider>
      <main className="main">
        <TodoApp />
      </main>
    </APIContextProvider>
  );
}

export default App;
