import { useEffect, useState } from "react";

type UseDummy = {
  foo: string;
};

export const useDummy = ({ foo } : UseDummy) : string => {
  const [ bar, setBar] = useState('hello');
  useEffect(() => {
    setBar(bar => `${bar} - ${foo}`);
  }, [foo]);

  return bar;
}
