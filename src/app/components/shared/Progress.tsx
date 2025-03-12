import { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";

const Progress = () => {
    const [progress1, setProgress1] = useState(10);
    const [progress2, setProgress2] = useState(20);
    const [progress3, setProgress3] = useState(30);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setProgress1((prev) => (prev < 90 ? prev + 10 : 90));
        setProgress2((prev) => (prev < 70 ? prev + 15 : 70));
        setProgress3((prev) => (prev < 50 ? prev + 5 : 50))
      }, 500);
  
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="p-3">
        <ProgressBar progress={progress1} />
        <ProgressBar progress={progress2} />
        <ProgressBar progress={progress3} />
      </div>
    );
  };
  
  export default Progress;