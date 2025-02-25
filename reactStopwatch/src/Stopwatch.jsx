import { useEffect, useState } from 'react'

function Stopwatch() {
  const [running, setRunning] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setCount((counts) => counts + 10)
      }, 10);
    } else {
      clearInterval(interval)
    }

    return () => clearInterval(interval);

  }, [running])

  const milisec = Math.floor((count % 1000) / 10)
  const tempSec = Math.floor(count / 1000);
  const sec = tempSec % 60;
  const min = Math.floor((tempSec % 3600) / 60);
  const hour = Math.floor(tempSec / 3600);

  function startBtn() {
    setRunning(true)
  }

  function stopBtn() {
    setRunning(false)
  }

  function reset() {
    setRunning(false)
    setCount(0)
  }

  return (
    <>
      <h2>Stopwatch</h2>
      <h1>{String(hour).padStart(2, '0')}:{String(min).padStart(2, '0')}:{String(sec).padStart(2, '0')}.{String(milisec).padStart(2, '0')}</h1>
      <h1>count: {count}ms</h1>
      <button onClick={startBtn}>Start</button>
      <button onClick={stopBtn}>Stop</button>
      <button onClick={reset}>Reset</button>
    </>
  )
}

export default Stopwatch