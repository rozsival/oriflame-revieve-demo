import { useEffect } from "react";
import { RevieveConfig } from "../../types/revieve";

const SCRIPT_URL =
  "https://d38knilzwtuys1.cloudfront.net/revieve-plugin-v4/revieve-plugin-loader.js";

export const useRevieve = (config: RevieveConfig) =>
  useEffect(() => {
    const script = document.createElement("script");
    script.src = SCRIPT_URL;
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.async = true;
    const onLoad = () => {
      window.Revieve.Init(config);
    };
    script.addEventListener("load", onLoad);
    const scripts = document.getElementsByTagName("script")[0];
    scripts.parentNode?.insertBefore(script, scripts);
    return () => {
      script.removeEventListener("load", onLoad);
      script.remove();
    };
  }, [config]);
