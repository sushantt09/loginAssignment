import '../styles/App.css';
import "../styles/Poster.css";
import Login from './Login';
import Poster from './Poster';

function App() {
  
  return (
    <div className="App">
      <Poster />
      <div className='Login-ui'>
        <div className='login-heading'>
          <div className='heading-img'></div>
          <h1>Welcome Back!</h1>
          <h3>Glad to see you, Again!</h3>
        </div>
          <Login />
        <div className='sign-up'>Don’t have an account yet?<a>Sign Up</a></div>
      </div>
    </div>
  );
}

export default App;
