const validated = async (path) => {
  const res = await fetch("/api/revalidate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      path,
      secret: "token",
    }),
  });
  return await res.json();
};

export default validated;
