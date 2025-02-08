import "./App.css";
import { Header, Footer, Main } from "./components";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <Header />
        <Main />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
