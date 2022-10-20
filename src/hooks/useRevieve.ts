import { useEffect } from 'react';

import type { RevieveConfig } from '../../types/revieve';

const SCRIPT_URL =
  'https://d38knilzwtuys1.cloudfront.net/revieve-plugin-v4/revieve-plugin-loader.js';

const insertScript = (script: HTMLScriptElement) => {
  const scripts = document.getElementsByTagName('script');
  const firstScript = scripts.item(0);
  firstScript?.parentNode?.insertBefore(script, firstScript);
};

export const useRevieve = (config: RevieveConfig) =>
  useEffect(() => {
    const script = document.createElement('script');
    script.async = true;
    script.charset = 'utf-8';
    script.src = SCRIPT_URL;
    script.type = 'text/javascript';
    const onLoad = () => window.Revieve?.Init(config);
    script.addEventListener('load', onLoad);
    insertScript(script);
    return () => {
      window.Revieve?.API.unmount();
      script.removeEventListener('load', onLoad);
      script.remove();
    };
  }, [config]);
