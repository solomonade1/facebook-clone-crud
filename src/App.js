//
//import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  // BEM naming convention
  return <div className="App">{!user ? <Login /> : <Home />}</div>;
}

export default App;
