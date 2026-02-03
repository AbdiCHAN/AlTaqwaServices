import { useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem("user"))
  );

  async function login(email, password) {
    const res = await fetch(
      `http://localhost:5000/users?email=${email}&password=${password}`
    );
    const data = await res.json();

    if (data.length === 0) throw new Error("Invalid credentials");

    localStorage.setItem("user", JSON.stringify(data[0]));
    setUser(data[0]);
  }

  function logout() {
    localStorage.removeItem("user");
    setUser(null);
  }

  return { user, login, logout };
}