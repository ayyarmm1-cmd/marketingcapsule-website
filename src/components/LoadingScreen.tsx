import { useState, useEffect } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const minLoadTime = 1200;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const elapsed = Date.now() - startTime;
        const targetProgress = Math.min((elapsed / minLoadTime) * 100, 95);

        if (prev >= 95 && elapsed >= minLoadTime) {
          clearInterval(interval);
          setTimeout(() => {
            setProgress(100);
            setIsComplete(true);
            setTimeout(() => onComplete(), 400);
          }, 150);
          return 95;
        }

        return Math.min(prev + Math.random() * 10 + 2, targetProgress);
      });
    }, 100);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        isComplete ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{ background: 'var(--mc-page)' }}
    >
      <div className="flex flex-col items-center justify-center space-y-6">
        <img src="/logo.png" alt="Marketing Capsule" className="w-16 h-16 object-contain rounded-xl" />
        <div className="w-56">
          <div className="h-1 rounded-full overflow-hidden" style={{ background: 'var(--mc-line)' }}>
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{ width: `${Math.min(progress, 100)}%`, background: 'var(--mc-primary)' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
