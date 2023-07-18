/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from "react";
import { WithMoneyProps } from "../types/MoneyTypes";

const updatedComponent = (
  OriginalComponent: React.ComponentType<WithMoneyProps>
) => {
  function newComponent() {
    const [money, setMoney] = useState(0);
    const handleIncrement = () => {
      setMoney((prev) => prev + 1);
    };
    return (
      <OriginalComponent money={money} handleIncrement={handleIncrement} />
    );
  }
  return newComponent;
};

export default updatedComponent;
