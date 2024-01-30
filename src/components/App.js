import './App.css';
import Header from './Header';
import Footer from './Footer';
// import Recent from './Recent';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeToLog } from '../redux/Log';
import { useNavigate } from 'react-router-dom';

function App( {children, brand, clickBrand} ) {
  const { initLog } = useSelector(state=>state.login);
  const local = (par1=null, par2=null)=>{
    const val = {token: par1, name: par2};
    return val;
  }
  const [myLog, setMyLog] = useState(local());
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(()=>{
    setMyLog(local(localStorage.getItem('token'), localStorage.getItem('name')));
  },[initLog]);

  function handler(){
    dispatch(removeToLog())
    setMyLog(local());
    localStorage.removeItem('token');
    localStorage.removeItem('name');
    navigate('/');
  }
  
  return (
    <div id="wrap">
    <Header clickBrand={clickBrand} myLog={myLog} handler={handler} />
    <div id="main">
      {children}
    </div>
    {/* <Recent /> */}
    <Footer />
    </div>
  );
}

export default App;