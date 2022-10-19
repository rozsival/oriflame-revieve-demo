import { useEffect } from "react";

export const REVIEVE_HREF = "#open-revieve";

export const useOpenRevieve = () =>
  useEffect(() => {
    const onOpen = (event: MouseEvent) => {
      if (
        event.target instanceof HTMLAnchorElement &&
        event.target.hash === REVIEVE_HREF
      ) {
        event.preventDefault();
        window.Revieve.API.show();
      }
    };
    document.addEventListener("click", onOpen);
    return () => {
      document.removeEventListener("click", onOpen);
    };
  }, []);
