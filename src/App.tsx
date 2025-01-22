import "./App.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./routes/Routes.js";
function App() {
  return <RouterProvider router={Routes} />;
}

export default App;
