import { createContext, useState, useEffect } from 'react';

export const CounterContext = createContext();

export default function CounterContextProvider({ children }) {
  const [count, setCount] = useState(0);
  const [response, setResponse] = useState(0);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState(null);

  const fetchSomething = async () => {
    try {
      setResponse('Fetching');
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSomething();
  }, []);

  return (
    <CounterContext.Provider
      value={{
        count,
        setCount,
        response,
        setResponse,
        loading,
        setLoading,
        err,
        setErr,
      }}>
      {children}
    </CounterContext.Provider>
  );
}
