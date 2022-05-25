import ChildA from 'components/ChildA';
import useForceRender from 'hooks/useForceRender';
import { useEffect, useLayoutEffect, useMemo, useState, useCallback } from 'react';

const diffs = [];

function getAverage(arr) {
  const average = arr.reduce((a, b) => a + b, 0) / arr.length;
  return average;
}

function Parent() {
  const [val, setVal] = useState('');
  // const [color, setColor] = useState('black');

  useForceRender(50);

  // console.log('Parent is rendered');

  // // paint 되기 전에 영향을 주고 싶을때
  // useLayoutEffect(() => {
  //   console.log('layouteffect');
  //   setColor('green');
  // }, []);

  // paint 되고 난 후
  // useEffect(() => {
  //   console.log('layouteffect');
  //   setColor('red');
  // }, []);

  // console.log('after layout');

  // const handleClick = useCallback(() => {
  //   console.log('button clicked!');
  // }, []);

  // const handleClick2 = () => console.log('button is clicked !');
  // 시간 체크 시작
  const start = performance.now();
  const handleChange = (e) => setVal(e.target.value);
  const end = performance.now();
  const diff = end - start;
  diffs.push(diff);
  if (diffs.length % 100 === 0) {
    console.log(getAverage(diffs));
  }
  // 시간 체크 끝

  return (
    <div
      style={{ width: '500px', backgroundColor: 'beige', height: '500px', transition: 'all 1s' }}
    >
      <h1>This is Parent</h1>
      <ChildA onChange={handleChange} value={val} />
    </div>
  );
}

export default Parent;
