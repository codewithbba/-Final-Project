import React from 'react';

const Login = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Login</h1>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" style={{ margin: '0.5rem 0' }} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" style={{ margin: '0.5rem 0' }} />
        </div>
        <button style={{
          background: '#28a745',
          color: '#fff',
          border: 'none',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer'
        }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
