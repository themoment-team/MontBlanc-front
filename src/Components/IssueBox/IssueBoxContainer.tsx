export interface issueBoxProps {
  idx: number;
  content: string;
  goods: number;
}

export const randomColorPicker = () => {
  const color: string[] = [
    "#CBD9E266",
    "#C4DFDB",
    "#A7C5EB66",
    "#61799866",
    "#699CAC66",
  ];

  const randomNumber: number = Math.floor(Math.random() * 5);

  return color[randomNumber];
};
