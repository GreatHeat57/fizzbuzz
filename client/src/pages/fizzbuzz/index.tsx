import { useState } from "react";
import Container from "components/Container";
import { getFizzBuzz } from "redux/app/actions";
import { useSelector, useDispatch } from "react-redux";
import { getAppState } from "redux/app/selectors";
import { Button } from 'antd';

const FizzBuzz = () => {
  const [count, setCount] = useState(0);

  const dispatch = useDispatch();
  const { fizzbuzz } = useSelector(
    getAppState
  );

  const handleCount = () => {
    setCount(count + 1);
    dispatch(getFizzBuzz(count + 1));
  };

  return (
    <Container className="p-4 d-flex justify-content-center">
      <div className="count_wrap text-center">
        <h5>Your count</h5>
        <h5>{count}</h5>
        <Button type="primary" className="mt-4" onClick={handleCount}>Push me!</Button>
        <h1 className="mt-4">{fizzbuzz}</h1>
      </div>
    </Container>
  );
};

export default FizzBuzz;
