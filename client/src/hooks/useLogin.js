import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const base_url = import.meta.env.VITE_API_URL;
const useLogin = ({ closeModalLogin }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const newUser = async () => {
    try {
      const response = await axios.post(`${base_url}/api/users/createUser`, {
        email,
        password,
      });
      if (response.data.success === true) {
        await localStorage.setItem("token", response.data.token);
        await localStorage.setItem("email", response.data.email);
        setError(false);
        setMessageError("");
        closeModalLogin();
      }
      setError(true);
      setMessageError(response.data.message);
    } catch (error) {
      setError(true);
      setMessageError(response.data.message);
      console.error("Login failed", error.response.data);
    }
  };

  const login = async () => {
    try {
      const response = await axios.post(`${base_url}/api/users/auth`, {
        email,
        password,
      });

      if (response.data.success === true) {
        await localStorage.setItem("token", response.data.token);
        await localStorage.setItem("email", response.data.email);
        setError(false);
        setMessageError("");
        closeModalLogin();
      }
      setError(true);
      setMessageError(response.data.message);
    } catch (err) {
      setError(true);
      setMessageError(error.response.data.message);
      console.error("Login failed", error.response.data);
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    login,
    error,
    messageError,
    newUser,
  };
};

export default useLogin;