import { useEffect } from "react";

export interface UseScriptProps {
  src: string;
  nonce?: string;
  crossOrigin?: string;
}

export const useScript = ({
  src,
  nonce,
  crossOrigin,
}: UseScriptProps): void => {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = src;
    script.async = true;
    script.defer = true;
    if (nonce) {
      script.nonce = nonce;
    }
    if (crossOrigin) {
      script.crossOrigin = crossOrigin;
    }

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [src, nonce, crossOrigin]);
};
