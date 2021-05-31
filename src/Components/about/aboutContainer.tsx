import Table from "Api/table";
import { useEffect, useState } from "react";

const useAmount = (): [amount: number, date: number] => {
  const [amount, setAmount] = useState({ data: 0 });
  const [date, setDate] = useState({ data: 0 });
  const getAmount = async () => {
    return await Table.amountUncomfortable();
  };

  const getDataSinceProjectStart = async () => {
    return await Table.dateSinceProjectStart();
  };

  useEffect(() => {
    getAmount().then((res) => setAmount(res.data));
    getDataSinceProjectStart().then((res) => setDate(res.data));
  }, []);

  return [amount.data, date.data];
};

export const useHeading = (): string[][] => {
  const [amount, date] = useAmount();
  const day: number = date;
  const cnt_comment: number = amount;

  const heading: string[] = [
    `${day}일 동안`,
    `${cnt_comment}개의 불편함이`,
    `모였습니다.`,
  ];
  const explanation: string[] = [""];

  return [heading, explanation];
};
