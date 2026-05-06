import { useState, useEffect, useMemo } from 'react'

const ExpBar: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);

  const startDate = useMemo(() => new Date(2002, 6, 11), []);

  const timePerYear = 365.25 * 24 * 60 * 60 * 1000;

  useEffect(() => {
    const updateProgress = () => {
      const now = Date.now();
      const diff = now - startDate.getTime();

      const timePassed = Math.floor(diff / timePerYear);
      const timeSinceLastOccur = startDate.getTime() + (timePassed * timePerYear);
      const timeInCurrentCycle = now - timeSinceLastOccur;

      const percentProgress = Math.min((timeInCurrentCycle / timePerYear) * 100, 100);

      setProgress(percentProgress);
      setLevel(timePassed);
    };

    updateProgress();

    const intervalId = setInterval(updateProgress, 1000);

    return () => clearInterval(intervalId);
  }, [startDate, timePerYear]);

  return (
    <div className="flex flex-col">

      <div className='flex items-center gap-2'>
        <p className="font-['Rubik'] font-[600] text-sm">Lv. {level}</p>
        <div className="w-[100px] h-2 bg-white border-1 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-tl from-(--primary) to-(--secondary) transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
    </div>
  );
};

export default ExpBar
