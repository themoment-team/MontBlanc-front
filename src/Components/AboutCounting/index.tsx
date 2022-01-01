import Table from "Api/table";
import { useEffect, useState, useRef } from "react";
import * as S from "./style"
import CountUp from "react-countup";
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
  const [day, cnt_comment] = useAmount();

  const [currentDay, setCurrentDay] = useState(0)
  const [currentComments, setCurrentComments] = useState(0);
  
  // useSetInterval(() => {

  // })

  // const dayRef = useRef<HTMLSpanElement>(0);
  // const commentsRef = useRef<HTMLSpanElement>(0);
  
  // useSetInterval(() => {
  //   dayRef.current =;
  // }, 3)

  return (
    <S.Counting>
      <p><span>{currentDay}</span>일 동안</p>
      <p><span>{currentComments}</span>개의 불편함이</p>
      <p>모였습니다.</p>
    </S.Counting>
  )
}

export default AboutCounting;