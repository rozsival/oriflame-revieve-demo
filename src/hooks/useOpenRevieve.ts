import { useEffect } from 'react';

import { REVIEVE_HREF } from '../constants';

const shouldOpen = (target: EventTarget | null): target is HTMLAnchorElement =>
  target instanceof HTMLAnchorElement && target.hash === REVIEVE_HREF;

export const useOpenRevieve = () =>
  useEffect(() => {
    const onOpen = (event: MouseEvent) => {
      if (shouldOpen(event.target)) {
        event.preventDefault();
        window.Revieve?.API.show();
      }
    };
    document.addEventListener('click', onOpen);
    return () => document.removeEventListener('click', onOpen);
  }, []);
