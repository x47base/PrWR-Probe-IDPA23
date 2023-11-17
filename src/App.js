import './App.css';

/* Base Components */
import Header from './components/header/header';
import Main from './components/main/main';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="App bg-background">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
