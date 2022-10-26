import { useEffect, useState } from "react";

export function useGetOrderTime() {
  const [orderTime, setOrderTime] = useState([]);

  useEffect(() => {
    setOrderTime(getOrderTime());
  }, []);

  return orderTime;
}
