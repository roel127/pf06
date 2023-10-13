import './App.css';
import Header from './Header';
import Footer from './Footer';
import Recent from './Recent';

function App( {children, brand, clickBrand} ) {
  return (
    <div id="wrap">
    <Header clickBrand={clickBrand} />
    <div id="main">
      {children}
    </div>
    {/* <Recent /> */}
    <Footer />
    </div>
  );
}

export default App;