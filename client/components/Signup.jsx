import React from 'react';
const axios = require('axios');

// familiarize with how add card works without redirect to diff endpoint
// app, router, axios

class Signup extends React.Component {
  render() {
    return (
      <form id="signup-form">
        <h2>Create Account</h2>
        <br></br>
        <input
          id="input-username"
          name="username"
          type="text"
          placeholder="Username"
        ></input>
        <br></br>
        <input
          id="input-password"
          name="password"
          type="password"
          placeholder="Password"
        ></input>
        <input
          id="input-confirm-password"
          name="confirm-password"
          type="password"
          placeholder="Confirm"
        ></input>
        <br></br>
        <button
          onClick={() => {
            this.props.signup(
              document.getElementById('input-username').value,
              document.getElementById('input-password').value,
              document.getElementById('input-confirm-password').value
            );
          }}
        >
          Sign Up
        </button>
        <div>
          <a
            href="
                https://github.com/login/oauth/authorize?client_id=fade47f049a7b9f4a3dc"
          >
            Github
          </a>
          <button>
            <img
              id="github-logo"
              src="https://www.backblaze.com/blog/wp-content/uploads/2018/05/github-logo.png"
            />
          </button>
          <button>
            <img
              id="google-logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/471px-Google_%22G%22_Logo.svg.png"
            />
          </button>
        </div>
      </form>
    );
  }
}

export default Signup;
