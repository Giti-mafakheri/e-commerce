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
          <a href="/cart">Cart</a>
          <a href="/signin">Sign In</a>
        </div>
      </header>

      <main>
        <div className="row center"></div>
      </main>

      <footer>
        <footer className="row center">All right reserved</footer>
      </footer>
    </div>
  );
}

export default App;
