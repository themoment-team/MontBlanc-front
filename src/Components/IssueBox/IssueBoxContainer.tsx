export const randomColorPicker = () => {
  const color: string[] = [
    "#CBD9E266",
    "#C4DFDB",
    "#A7C5EB66",
    "#61799866",
    "#699CAC66",
  ];

  const randomNumber: number = Math.floor(Math.random() * 6);

  return color[randomNumber];
};

export const issue = {
  number: "294",
  text: "학교가 너무너무 심심해요 심심해요심심",
};
