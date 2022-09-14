import Header from './components/Header';
import styles from './App.module.css';

function App() {

  return (
    <div className={styles.header}>
      <Header />
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <small>
          Meb here always
          Meb heren't
        </small>
      </div>
    </div>
  );
}

export default App;
