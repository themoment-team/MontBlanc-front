export const randomColorPicker = () => {
  const color: string[] = ["#C3D7DE", "#C0C9D6", "#A7C5EB"];

  const randomNumber: number = Math.floor(Math.random() * 3);

  return color[randomNumber];
};
