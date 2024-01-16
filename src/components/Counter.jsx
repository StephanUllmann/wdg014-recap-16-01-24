import { useContext } from 'react';
import { CounterContext } from '../contexts/CounterContext';

export default function Counter() {
  const { setCount } = useContext(CounterContext);

  return (
    <>
      <button type='button' onClick={() => setCount((prev) => prev + 1)}>
        Click in a Sibling Component
      </button>
    </>
  );
}
