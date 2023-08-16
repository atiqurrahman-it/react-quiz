import "../component/styles/App.css";
import Layout from "../layout/Layout";
import Result from "../pages/Result";
import Home from "../pages/Home/Home";
import SingUp from "../pages//Auth/SingUp/SingUp";
import Login from "../pages/Auth/Login/Login";
import Quiz from "../pages/Quiz/Quiz";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthProvider from "../contexts/AuthContext";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";
import PublicRoute from "./PrivateRoutes/PublicRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route exact path="/" Component={Home} />

            <Route
              exact
              path="/singUp"
              element={
                <PublicRoute>
                  <SingUp />
                </PublicRoute>
              }
            />
            <Route
              exact
              path="/login"
              element={
                <PublicRoute>
                  <Login />
                </PublicRoute>
              }
            />

            <Route
              exact
              path="/quiz"
              element={
                <PrivateRoutes>
                  <Quiz />
                </PrivateRoutes>
              }
            />

            <Route exact path="/result" Component={Result} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
