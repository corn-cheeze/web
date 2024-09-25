"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import { MOCK_URL } from "@/server";

export default function Home() {
  const [userId, setUserId] = useState(null);

  const load = async () => {
    try {
      const response = await axios.get(`${MOCK_URL}/user`);
      setUserId(response.data[0].id);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    load();
  }, []);
  console.log(userId);

  return (
    <main className="">
      <h1>userTest</h1>
      {userId && <p>id: {userId}</p>}
    </main>
  );
}
