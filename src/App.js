import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import CustomFooter from "./components/CustomFooter";
import Welcome from "./components/Welcome";
import CustomNavbar from "./components/CustomNavbar";
import LatestRelease from "./components/LatestRelease";

function App() {
  return (
    <div>
      <CustomNavbar />
      <Welcome />
      <LatestRelease />
      <CustomFooter />
    </div>
  );
}

export default App;
