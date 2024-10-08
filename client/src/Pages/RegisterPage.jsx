import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function registerUser(e) {
    e.preventDefault();
    try {
      // Make sure axios is configured with the base URL
      const response = await axios.post('http://localhost:4000/register', {
        name,
        email,
        password
      });
      
      if (response.data) {
        alert('Registration successful');
        // You might want to redirect to login page or handle success differently
      }
    } catch (err) {
      if (err.response) {
        // The server responded with a status code outside the 2xx range
        if (err.response.status === 422) {
          setError(err.response.data.message || 'Validation error. Please check your input.');
        } else {
          setError('An error occurred during registration.');
        }
      } else if (err.request) {
        // The request was made but no response was received
        setError('No response from server. Please check your connection.');
      } else {
        // Something happened in setting up the request
        setError('Error setting up the request.');
      }
    }
  }

  return (
    <div className="mt-4 grow flex items-center justify-around">
      <div className="-mt-64">
        <h1 className="text-4xl text-center mb-4">Register</h1>
        {error && (
          <div className="text-red-500 text-center mb-4">
            {error}
          </div>
        )}
        <form className="max-w-md mx-auto" onSubmit={registerUser}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="primary">Register</button>
          <div className="text-center py-2 mt-1 text-gray-500">
            Already have an account?{" "}
            <Link className="underline text-black" to={"/login"}>
              Login now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;