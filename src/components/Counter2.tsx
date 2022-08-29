import { MouseEventHandler } from 'react';

export default function Counter2({ count, incCount }: {count: number, incCount: Function}) {
  const onClickHandler: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    incCount();
  }
  return (
    <button onClick={onClickHandler}> { count } </button>
  );
};
