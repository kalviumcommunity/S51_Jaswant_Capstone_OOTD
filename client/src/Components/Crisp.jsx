import React, { useEffect } from 'react';

const Crisp = () => {
  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "3d6a6963-6710-4180-85ed-3b5189e46e52";
    (function() {
      var d = document;
      var s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

  return (
    <div>
      {/* This div will be replaced by the Crisp chat widget */}
    </div>
  );
};

export default Crisp;
