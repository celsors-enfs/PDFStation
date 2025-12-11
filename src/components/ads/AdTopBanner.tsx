import React, { useEffect } from 'react';

export const AdTopBanner: React.FC = () => {
  useEffect(() => {
    // FUTURE GOOGLE ADS SCRIPT
    // const script = document.createElement("script");
    // script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
    // script.async = true;
    // document.body.appendChild(script);
  }, []);

  return (
    <div className="w-full flex justify-center mt-4 mb-6">
      <div
        id="ad-top-banner"
        className="w-full max-w-4xl bg-muted rounded-xl p-4 text-center text-sm text-muted-foreground border"
      >
        Ad Placeholder — Top Banner
      </div>
    </div>
  );
};



