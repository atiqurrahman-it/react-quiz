import "../component/styles/App.css";
import Layout from "../layout/Layout";
import Result from "../pages/Result";
import Home from "../pages/Home/Home";
import SingUp from "../pages//Auth/SingUp/SingUp";
import Login from "../pages/Auth/Login/Login";
import Quiz from "../pages/Quiz/Quiz";
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route exact path="/" Component={Home} />
          <Route exact path="/singUp" Component={SingUp} />
          <Route exact path="/login" Component={Login} />
          <Route exact path="/quiz" Component={Quiz} />
          <Route exact path="/result" Component={Result} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
