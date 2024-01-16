import { useNavigate } from "react-router-dom";
const useLogout = () => {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    localStorage.removeItem("email");
    navigate("/");
  };
  return {
    logout,
  };
};

export default useLogout;
