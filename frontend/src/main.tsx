import { createRoot } from "react-dom/client";
import "./index.css";
import Layout from "./app/Layout.tsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import PaymentForm from "./components/PaymentForm.tsx";
import Login from "./components/Login.tsx";
import GenerateLink from "./components/GenerateLink.tsx";
import ThankYou from "./components/ThankYou.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/generate-link",
    element: <GenerateLink />,
  },
  {
    path: "/payment/:id",
    element: <PaymentForm />,
  },
  {
    path: "/thank-you/:id",
    element: <ThankYou />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <Layout>
    <RouterProvider router={router}></RouterProvider>
  </Layout>
);
