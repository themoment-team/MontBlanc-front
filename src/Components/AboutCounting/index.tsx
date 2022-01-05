import Table from "Api/table";
import { useEffect, useState} from "react";
import * as S from "./style"
import { CountingStar } from "react-countingstar";

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

  return [date.data, amount.data];
};

const AboutCounting = () => {
  const [days, comments] = useAmount();

  return (
    <S.Counting>
      <p><CountingStar cntNum={days} time={0.8} fontSize={60}/>&nbsp;일 동안</p>
      <p><CountingStar cntNum={comments} time={0.8} fontSize={60}/>&nbsp;개의 불편함이</p>
      <p>모였습니다.</p>
    </S.Counting>
  )
}

export default AboutCounting;