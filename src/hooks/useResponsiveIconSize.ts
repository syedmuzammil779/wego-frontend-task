import { useState, useEffect } from 'react';

const useResponsiveIconSize = (
  defaultSize: number,
  smallSize: number,
  breakpoint: number = 768,
): number => {
  const [iconSize, setIconSize] = useState<number>(defaultSize);

  useEffect(() => {
    const updateIconSize = () => {
      if (window.innerWidth <= breakpoint) {
        setIconSize(smallSize);
      } else {
        setIconSize(defaultSize);
      }
    };

    updateIconSize();
    window.addEventListener('resize', updateIconSize);

    return () => window.removeEventListener('resize', updateIconSize);
  }, [defaultSize, smallSize, breakpoint]);

  return iconSize;
};

export default useResponsiveIconSize;
