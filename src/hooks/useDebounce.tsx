import { useRef } from 'react';

const useDebounce = (callback: () => void, term: number) => {
  const timer = useRef<ReturnType<typeof setTimeout>>(); //clearTimout 사용을 위해 timer이라는 변수를 생성

  const dispatchDebounce = () => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    const newTimer = setTimeout(() => {
      callback();
    }, term);
    timer.current = newTimer;
  };
  return dispatchDebounce;
};
export default useDebounce;
