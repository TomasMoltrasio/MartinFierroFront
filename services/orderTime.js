const getOrderTime = () => {
  const date = new Date();
  const hours = date.getHours();
  const horaActual = `${hours}:${date.getMinutes() + 10}`;
  const morning = [
    "10:15",
    "10:30",
    "10:45",
    "11:00",
    "11:15",
    "11:30",
    "11:45",
    "12:00",
    "12:15",
    "12:30",
    "12:45",
    "13:00",
    "13:15",
    "13:30",
    "13:45",
    "14:00",
    "14:15",
    "14:30",
    "14:45",
  ];
  const night = [
    "19:15",
    "19:30",
    "19:45",
    "20:00",
    "20:15",
    "20:30",
    "20:45",
    "21:00",
    "21:30",
    "22:00",
    "22:15",
    "22:30",
    "22:45",
    "23:00",
    "23:15",
  ];

  if (date.getDay !== 1) {
    if (horaActual > "18:45") {
      const actual = night.filter((time) => time > horaActual);
      return actual;
    } else {
      let actual = morning.filter((time) => time > horaActual);
      let actual2 = night.filter((time) => time > horaActual);
      let actual3 = actual.concat(actual2);
      return actual3;
    }
  } else {
    return [];
  }
};

export default getOrderTime;
