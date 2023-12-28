"use server"
import axios from "axios";

export const getAllUsers = async () => {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

  try {
    const users = await axios.get(`${apiUrl}/users`);
    return users.data;
  } catch (error) {
    throw error;
  }
};
