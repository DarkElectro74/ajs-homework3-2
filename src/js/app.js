export default function getHealthStatus({ name, health }) {
  const isCorrectArg = (name !== undefined) && (health !== undefined) && (+health >= 0);
  if (!isCorrectArg) return null;

  let healthStatus = 'healthy';
  if (+health < 15) {
    healthStatus = 'critical';
  } else if (+health < 50) {
    healthStatus = 'wounded';
  }
  return healthStatus;
}

const mageHealthStatus1 = getHealthStatus({ name: 'Маг', health: 90 });
document.write(mageHealthStatus1, '\n');
