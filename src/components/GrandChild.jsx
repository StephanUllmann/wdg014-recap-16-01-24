import { useContext } from 'react';
import { CounterContext } from '../contexts/CounterContext';

export default function GrandChild() {
  const { response } = useContext(CounterContext);

  return (
    <div>
      <p>{response}</p>
    </div>
  );
}
