import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router";
import "./App.css";
import Auth from "./components/auth/Auth";
import Header from "./components/header/Header";
import TodoForm from "./components/todo/TodoForm";
import { store } from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <Routes>
          <Route path="*" element={<Navigate to="/logIn" />} />
          <Route path="/logIn" element={<Auth />} />
          <Route path="/todoList" element={<TodoForm />} />
        </Routes> 
      </Provider>
    </div>
  );
}

export default App;
