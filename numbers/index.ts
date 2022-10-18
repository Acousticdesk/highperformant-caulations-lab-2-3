export default function getRandomIntInRange(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}
