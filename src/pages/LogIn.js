import './LogIn.css';
import { IoMdKey } from 'react-icons/io';
import { Link } from 'react-router-dom';


export default function LogIn(){
  return(
    <div id="logIn">
      <div className="logBox">
        <IoMdKey size="250px" style={{marginBottom: '30px'}}/>
        <form>
          <input type='text' placeholder='아이디'/>
          <input type='password' placeholder='패스워드'/>
          <input type='submit' value="로그인" />
          <div>
            <p>
              <span>
                <Link to="">아이디 찾기</Link>
                <Link to="">비밀번호 찾기</Link>
              </span>
                <Link to="">회원가입</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}