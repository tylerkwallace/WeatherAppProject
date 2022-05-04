import { useState, useEffect } from 'react';



const Clock = () => {
  const [date, setDate] = useState(new Date());
  


  useEffect(() => {
    const refreshClock = () => setDate(new Date());
    const timerId = setInterval(refreshClock, 1000);
    return function cleanup() {
      clearInterval(timerId);
    };
  }, []);
  return (
    <span className="clock">
      {date.toLocaleTimeString()}
    </span>
  );
}
export default Clock;