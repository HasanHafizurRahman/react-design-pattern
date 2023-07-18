import updatedComponent from "./Hoc";
import Button from "../reusable-components/Button";
import { WithMoneyProps } from "../types/MoneyTypes";

const Person2 = ({ money, handleIncrement }: WithMoneyProps) => {
  return (
    <div className="p-3">
      <h2 className="py-5">
        Person 2's current salary is
        <span className="bg-primary text-white p-2">${money}</span>
      </h2>
      <Button style="btn-primary" onClick={handleIncrement}>
        increase
      </Button>
    </div>
  );
};

export default updatedComponent(Person2);
