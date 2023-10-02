import "./App.css";
import { Card, Hero, Navbar } from "./components";

import data from "./data";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <div className="card-group">
        <section className="card-group--description">
          <h1>Online Experiences</h1>
          <p>
            Join unique interactive activities led by one-of-a-kind hosts—all
            without leaving home.
          </p>
        </section>
        <div className="card-group--wrapper">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
