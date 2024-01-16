import { useContext } from 'react';
import GrandChild from './GrandChild';
import { CounterContext } from '../contexts/CounterContext';

export default function Child() {
  const { count } = useContext(CounterContext);

  return (
    <div>
      <div>From Child Component: {count}</div>

      <GrandChild />
    </div>
  );
}
