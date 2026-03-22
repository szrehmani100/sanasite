const COLORS = ['#2a9d6e', '#e05c8a', '#3b8ed0', '#d4a843'];

export function getRandomColor() {
  return COLORS[Math.floor(Math.random() * COLORS.length)];
}

export default COLORS;
