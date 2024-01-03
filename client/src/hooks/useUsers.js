import { useState, useEffect, useReducer } from "react";
import dataReducer, { LOAD_USERS, UNAUTHORIZED } from "../reducers/dataReducer";

import axios from "axios";

const base_url = import.meta.env.VITE_API_URL;

const useUsers = () => {
  const [state, dispatch] = useReducer(dataReducer, {
    users: [],
    message: "",
  });

  useEffect(() => {
    load();
  }, []);

  const load = async () => {
    try {
      const response = await axios.get(`${base_url}/api`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      if (response.status === 200) {
        const data = response.data;
        dispatch({ type: LOAD_USERS, payload: data });
      }
    } catch (err) {
      dispatch({
        type: UNAUTHORIZED,
        message: err.response.data.error,
      });
      console.error("Error fetching data:", err.response.data.error);
    }
  };

  return { state, dispatch };
};

export default useUsers;
