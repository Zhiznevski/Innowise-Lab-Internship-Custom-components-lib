import { RefObject, useEffect } from 'react';

function useClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  callback: () => void
) {
  const handleClick = (e: MouseEvent) => {
    const { target } = e;
    if (target instanceof Node && !ref.current?.contains(target)) {
      callback();
    }
  };
  useEffect(() => {
    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);
}

export default useClickOutside;
