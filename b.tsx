import React, { useEffect, useRef, useState } from 'react';
import Popover from 'react-tiny-popover';

const App = () => {
  const baseElementRef = useRef(null);
  const animatedElementRef = useRef(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  useEffect(() => {
    if (isPopoverOpen) {
      const baseElement = document.getElementById('base-element');
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
    }
  }, [isPopoverOpen]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div
        id="base-element"
        className="transform translate-x-[325px] translate-y-[-20px] cursor-pointer"
        onClick={() => setIsPopoverOpen(!isPopoverOpen)}
        ref={baseElementRef}
      >
        Base Element
      </div>
      <Popover
        isOpen={isPopoverOpen}
        position={['top', 'bottom', 'left', 'right']} // Preferred positions
        onClickOutside={() => setIsPopoverOpen(false)}
        content={
          <div ref={animatedElementRef} className="animated-element animate-vibrate-1">
            Animated Element
          </div>
        }
      >
        <div />
      </Popover>
    </div>
  );
};

export default App;
