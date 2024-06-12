import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

function App() {
  return (
    <>
      <div className="font-primary">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
