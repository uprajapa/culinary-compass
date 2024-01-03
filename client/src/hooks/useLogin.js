import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const base_url = import.meta.env.VITE_API_URL;
const useLogin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = async () => {
    try {
      const response = await axios.post(`${base_url}/api/users/auth`, {
        email,
        password,
      });
      if (response.status === 200) {
        await localStorage.setItem("token", response.data.token);
        await localStorage.setItem("email", response.data.email);
        navigate("/");
      }
      console.log(response.data);
    } catch (error) {
      console.error("Login failed", error.response.data);
    }
  };
  return {
    email,
    setEmail,
    password,
    setPassword,
    login,
  };
};

export default useLogin;
