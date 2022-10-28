import endPoints from "./api";

const login = async (username, password) => {
  const response = await fetch(endPoints.user.login, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const data = await response.json();

  return data;
};

export { login };
