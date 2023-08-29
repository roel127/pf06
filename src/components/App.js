import './App.css';
import Header from './Header';
import Footer from './Footer';
import Recent from './Recent';

function App( {children} ) {
  return (
    <div id="wrap">
    <Header />
    <div id="main">
      {children}
    </div>
    {/* <Recent /> */}
    <Footer />
    </div>
  );
}

export default App;