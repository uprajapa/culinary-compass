import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const base_url = import.meta.env.VITE_API_URL;
const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const login = async () => {
    try {
      const response = await axios.post(`${base_url}/api/users/auth`, {
        email,
        password,
      });

      if (response.status === 200 && response.data.success) {
        await localStorage.setItem("token", response.data.token);
        await localStorage.setItem("email", response.data.email);
        setError(false);
        setMessageError("");
        navigate("/");
      }
      setError(true);
      setMessageError(response.data.message);
      console.log(response.data);
    } catch (error) {
      setError(true);
      setMessageError(response.data.message);
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
  };
};

export default useLogin;
