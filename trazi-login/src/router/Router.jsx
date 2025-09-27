import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../pages/auth/LoginPage";
import { RegisterPage } from "../pages/auth/RegisterPage";
import AuthLayout from "../Layout/AuthLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        index: true,
        path: "/",
        element: (
          <AuthLayout>
            <RegisterPage />
          </AuthLayout>
        ),
      },
      {
        index: true,
        path: "/",
        element: (
          <AuthLayout>
            <LoginPage />
          </AuthLayout>
        ),
      },
    ],
  },
]);
