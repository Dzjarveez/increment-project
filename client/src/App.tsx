// src/App.tsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setValue } from './features/counter/counterSlice';
import { fetchCount, incrementCount, decrementCount } from './api/counterAPI';
import { AxiosError } from 'axios';

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: any) => state.counter.value);

  useEffect(() => {
    const initFetch = async () => {
      try {
        const data = await fetchCount();
        dispatch(setValue(data.count));
      } catch (error) {
        if (error instanceof AxiosError) {
          console.error(error.message);
        } else {
          console.error("Неизвестная ошибка");
        }
      }
    };

    initFetch();
  }, [dispatch]);

  const handleIncrement = async () => {
    try {
      const data = await incrementCount();
      dispatch(setValue(data.count));
    } catch (error) {
      if (error instanceof AxiosError) {
          console.error(error.message);
      } else {
          console.error("Неизвестная ошибка");
      }
    }
  };

  const handleDecrement = async () => {
    try {
      const data = await decrementCount();
      dispatch(setValue(data.count));
    } catch (error) {
      if (error instanceof AxiosError) {
          console.error(error.message);
      } else {
          console.error("Неизвестная ошибка");
      }
    }
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center w-full h-screen h-full bg-slate-200">
      <div className="text-8xl">{count}</div>
      <div>
        <button className='px-4 py-2 text-4xl border-2 border-slate-500' onClick={handleDecrement}>Минус</button>
        <button className='px-4 py-2 text-4xl border-2 border-slate-500' onClick={handleIncrement}>Плюс</button>
      </div>
    </div>
  );
};

export default App;