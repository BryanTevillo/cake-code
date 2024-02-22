"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";

const LoginForm = () => {
  const [credentials, setCredentials] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn("credentials", { ...credentials, redirect: false });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Username"
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
      />
      <button type="submit">Sign In</button>
    </form>
  );
};

export default LoginForm;
