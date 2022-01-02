import Table from "Api/table";
import { useEffect, useState} from "react";
import * as S from "./style"
import useSetInterval from "Hooks/useSetInterval";

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

  const [currentDay, setCurrentDay] = useState(0)
  const [currentComments, setCurrentComments] = useState(0);

  useSetInterval(() => {
    if (currentDay !== days) {
      setCurrentDay(currentDay + 1);
    }
  }, 800 / days);
  
  useSetInterval(() => {
    if (currentComments !== comments) {
      setCurrentComments(currentComments + 1);
    }
  }, 800 / comments);

  return (
    <S.Counting>
      <p><span>{currentDay}</span>일 동안</p>
      <p><span>{currentComments}</span>개의 불편함이</p>
      <p>모였습니다.</p>
    </S.Counting>
  )
}

export default AboutCounting;