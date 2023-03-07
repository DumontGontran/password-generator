import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

const App = () => {
  const [password, setPassword] = useState('****************');

  const generatePassword = () => {
    let randomPassword = Math.random().toString(36).slice(4,8).toLowerCase() + Math.random().toString(36).slice(4,8).toUpperCase() + Math.random().toString(36).slice(4,8).toLowerCase();
    randomPassword += '!*';

    setPassword(randomPassword);
    toast.success('Password Generated !', {
      position: "top-center",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <main className="background">
      <h1 className="heading">Generate a password</h1>
      <div className="wrapper">
        <div className="password">{password}</div>
        <button className="generate-password" onClick={() => generatePassword()}>Generate password</button>
      </div>
      <ToastContainer />
    </main>
  );
};

export default App;
