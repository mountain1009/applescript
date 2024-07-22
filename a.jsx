import React, { useEffect, useRef } from 'react';

const App = () => {
  const baseElementRef = useRef(null);
  const animatedElementRef = useRef(null);

  useEffect(() => {
    const baseElement = baseElementRef.current;
    const baseTransform = window.getComputedStyle(baseElement).transform;

    // Transformのtranslate値を抽出
    const matrixValues = baseTransform.match(/matrix.*\((.+)\)/)[1].split(', ');
    const baseX = parseFloat(matrixValues[4]);
    const baseY = parseFloat(matrixValues[5]);

    // CSS変数を設定
    const animatedElement = animatedElementRef.current;
    animatedElement.style.setProperty('--tw-translate-x-1', `${baseX - 2}px`);
    animatedElement.style.setProperty('--tw-translate-y-1', `${baseY + 2}px`);
    animatedElement.style.setProperty('--tw-translate-x-2', `${baseX - 2}px`);
    animatedElement.style.setProperty('--tw-translate-y-2', `${baseY - 2}px`);
    animatedElement.style.setProperty('--tw-translate-x-3', `${baseX + 2}px`);
    animatedElement.style.setProperty('--tw-translate-y-3', `${baseY + 2}px`);
    animatedElement.style.setProperty('--tw-translate-x-4', `${baseX + 2}px`);
    animatedElement.style.setProperty('--tw-translate-y-4', `${baseY - 2}px`);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div ref={baseElementRef} className="transform translate-x-[325px] translate-y-[-20px]">
        Base Element
      </div>
      <div ref={animatedElementRef} className="animated-element animate-vibrate-1">
        Animated Element
      </div>
    </div>
  );
};

export default App;
