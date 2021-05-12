import Table from "Api/table";
import { useEffect, useState } from "react";

const useAmount = (): { data: number } => {
  const [amount, setAmount] = useState({ data: 0 });
  const getAmount = async () => {
    return await Table.amountUncomfortable();
  };

  useEffect(() => {
    getAmount().then((res) => setAmount(res.data));
  });
  return amount;
};

export const useHeading = (): string[][] => {
  const amount = useAmount();
  const day: number = 100;
  const cnt_comment: any = amount.data;

  const heading: string[] = [
    `${day}일 동안`,
    `${cnt_comment}개의 불편함이`,
    `모였습니다.`,
  ];
  const explanation: string[] = ["학교가 불편한 순간"];

  return [heading, explanation];
};
