import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfliePage from "./pages/UserProfliePage";
 
const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero >
            <HomePage  />
          </Layout>
        }
      ></Route>
      <Route path="/auth-callback" element={<AuthCallbackPage />} />
      <Route
        path="/user-profile"
        element={
          <Layout>
            <UserProfliePage />
          </Layout>
        }
      ></Route>
      <Route path="*" element={<Navigate to="/"></Navigate>}></Route>
    </Routes>
  );
};
export default AppRoutes;
