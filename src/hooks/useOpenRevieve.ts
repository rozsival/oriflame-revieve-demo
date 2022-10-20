import { useEffect } from 'react';

import { REVIEVE_HREF } from '../constants';

export const useOpenRevieve = () =>
  useEffect(() => {
    const onOpen = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLAnchorElement &&
        event.target.hash === REVIEVE_HREF
      ) {
        event.preventDefault();
        window.Revieve?.API.show();
      }
    };
    document.addEventListener('click', onOpen);
    return () => document.removeEventListener('click', onOpen);
  }, []);
