import "../component/styles/App.css"
import Layout from "../layout/Layout"
import Login from "../pages/Auth/Login/Login";
import SingUp from "../pages/Auth/SingUp/SingUp";
import Home from "../pages/Home/Home";
function App() {
  return (
    <Layout>
      {/* mainContent */}
      <Home/>
      {/* <SingUp/> */}
      <Login/>
    </Layout>
  );
}

export default App;
