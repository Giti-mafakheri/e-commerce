import "./App.css";

function App() {
  return (
    <div className="grid-container">
      <header className="row">
        <div>
          <a className="brand" href="/">
            e-commerce
          </a>
        </div>
        <div>
          <a href="/singin">singin</a>
          <a href="/cart">cart</a>
        </div>
      </header>
      <main>main</main>
      <footer>
        <footer className="row center">All right reserved</footer>
      </footer>
    </div>
  );
}

export default App;
