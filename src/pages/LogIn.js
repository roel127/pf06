import { useState } from 'react';
import './LogIn.css';
import { IoMdKey } from 'react-icons/io';
import { Link, useNavigate } from 'react-router-dom';
import { addToLog } from '../redux/Log';
import { useDispatch } from 'react-redux';

export default function LogIn(e){
  let navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  const userHandler = (e, set) => {
    set(e.target.value);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5001/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message);

        // Save token in localStorage
        localStorage.setItem('token', data.token);
        localStorage.setItem('name', data.name);

        // Save global variable
        dispatch(addToLog(data))
        navigate('/')
      } else {
        const data = await response.json();
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('An error occurred during login');
    }
  };


  return(
    <div id="logIn">
      <div className="logBox">
        <IoMdKey size="250px" style={{marginBottom: '30px'}}/>
        <form onSubmit={handleLogin}>
          <input type='text' onChange={(e)=>userHandler(e, setUsername)} name='logId' placeholder='아이디'/>
          <input type='password' onChange={(e)=>userHandler(e, setPassword)} name='logPw' placeholder='패스워드'/>
          <input type='submit' value="로그인" />
          {/* <button type='submit'>로그인</button> */}
        </form>
        <div>
          <p>
            <span>
              <Link to="">아이디 찾기</Link>
              <Link to="">비밀번호 찾기</Link>
            </span>
              <Link to="">회원가입</Link>
          </p>
        </div>
      </div>
    </div>
  )
}