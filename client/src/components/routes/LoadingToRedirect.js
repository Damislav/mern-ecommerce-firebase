import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const LoadingToRedirect = () => {
  const history = useHistory();
  const [count, setCount] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((currentCount) => --currentCount);
    }, 1000);
    // redirect
    count === 0 && history.push("/");
    // cleanup
    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="container p-5 text-center">
      <p>Redirecting you to in {count} seconds </p>
    </div>
  );
};

export default LoadingToRedirect;
