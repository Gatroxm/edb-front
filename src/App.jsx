import "./App.css";
import { NavBar } from "./components/shared/NavBar";
import { AppRouter } from "./routes/AppRouter";

const App = () => {
  return (
    <>
      <NavBar />
      <AppRouter />
    </>
  );
};

export default App;
