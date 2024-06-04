/**
 * Función que calcula el tiempo de desfase entre las '07:00:00' y la suma de las duraciones de las entregas
 * @param {Array<string>} deliveries Array con las duraciones de entregas
 * @returns {string} Tiempo de desfase entre las '07:00:00' y la suma de las duraciones de las entregas
 */
function calculateTime(deliveries) {
  const sevenMinInSeconds = 7 * 3600;
  const maxTimeDate = new Date(2023, 11, 13);
  maxTimeDate.setHours(0, 0, sevenMinInSeconds);

  const deliveriesTotalSeconds = deliveries.reduce((suma, fecha) => {
    const [hours, minutes, seconds] = fecha.split(":").map(Number);
    return suma + (hours * 3600 + minutes * 60 + seconds);
  }, 0);

  const deliveriesTotalDate = new Date(2023, 11, 13);
  deliveriesTotalDate.setHours(0, 0, deliveriesTotalSeconds);

  const diff =
    deliveriesTotalSeconds <= sevenMinInSeconds
      ? maxTimeDate - deliveriesTotalDate
      : deliveriesTotalDate - maxTimeDate;
  const finalDate = new Date(diff).toISOString().slice(11, 19);
  const appendMinus =
    diff >= 0 && deliveriesTotalSeconds < sevenMinInSeconds ? "-" : "";

  return appendMinus + finalDate.replace("23", "00");
}

export default calculateTime;
