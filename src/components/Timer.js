import { useEffect } from "react";

function Timer({ dispatch, time }) {
  const min = Math.floor(time / 60);
  const seconds = time % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        dispatch({ type: "tick" });
      }, 1000);

      return () => clearInterval(id);
    },
    [dispatch]
  );

  return (
    <div className="timer">
      {min < 10 && "0"}
      {min}: {seconds < 10 && "0"}
      {seconds}
    </div>
  );
}

export default Timer;
