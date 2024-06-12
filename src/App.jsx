import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { Toaster } from "react-hot-toast";
import AuthProvider from "./auth/AuthProvider";

function App() {
  return (
    <>
      <div className="font-primary">
        <AuthProvider>
          <RouterProvider router={router} />
          <Toaster />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
