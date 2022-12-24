import react from 'react'
import { useLottie } from "lottie-react";
import computer from "./computer.json";

const App = () => {
  const options = {
    animationData: computer,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default App;