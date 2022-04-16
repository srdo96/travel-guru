import React, { useState } from "react";

const useHook = () => {
  const [service, setService] = useState({});
  return {
    service,
    setService,
  };
};

export default useHook;
