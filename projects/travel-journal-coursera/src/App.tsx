import "./App.css";
import { Header, Travel } from "./Components";
import data from "./db/data";
function App() {
  return (
    <>
      <Header />
      <main className="main-container">
      <Travel items={data} />
      </main>
    </>
  );
}

export default App;
