import Table from "Api/table";
import { useEffect, useState } from "react";
import * as S from "./style"

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

  return [amount.data, Number(date.data)];
};

const AboutCounting = () => {
  const [day,  cnt_comment]= useAmount();

  return (
    <S.Counting>
      <p><span>{day}</span>일 동안</p>
      <p><span>{cnt_comment}</span>개의 불편함이</p>
      <p>모였습니다.</p>
    </S.Counting>
  )
}

export default AboutCounting;