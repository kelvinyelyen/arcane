import { getSession } from "next-auth/client";

export default async (req, res) => {
  if (req.method === "POST") {
    const { email, password } = req.body;

    try {
      const response = await fetch("http://127.0.0.1:2000/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (response.ok) {
        const data = await response.json();
        return res.status(200).json(data);
      } else {
        const errorData = await response.json();
        return res.status(response.status).json(errorData);
      }
    } catch (error) {
      return res.status(500).json({ error: "Server error" });
    }
  }

  return res.status(405).end();
};
