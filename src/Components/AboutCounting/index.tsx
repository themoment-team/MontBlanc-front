import Table from "Api/table";
import { useEffect, useState } from "react";
import * as S from "./style"
import CountUp from "react-countup";

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
  const [day, cnt_comment] = useAmount();

  return (
    <S.Counting>
      <p><CountUp end={day} duration={0.8}></CountUp>일 동안</p>
      <p><CountUp end={cnt_comment} duration={0.8}></CountUp>개의 불편함이</p>
      <p>모였습니다.</p>
    </S.Counting>
  )
}

export default AboutCounting;