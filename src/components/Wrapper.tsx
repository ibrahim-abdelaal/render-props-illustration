import { useState } from 'react'

export default function Wrapper({ render }: { render: Function }) {
  const [count, setCount] = useState<number>(0);

  const incCount = () => setCount(count + 1);
  return (
    <div>
      {render(count, incCount)}
    </div>
  );
};
