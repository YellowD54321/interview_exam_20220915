import "./App.css";
import Footer from "./components/footer/Footer";
import FormPage from "./components/formPage/FormPage";
import HomePage from "./components/homePage/HomePage";
import LighthousePage from "./components/lighthousePage/LighthousePage";
import StorePage from "./components/storePage/StorePage";

function App() {
  return (
    <div className="App">
      <HomePage />
      <FormPage />
      <StorePage />
      <LighthousePage />
      <Footer />
    </div>
  );
}

export default App;
