import { useCallback } from 'react';
import useConsole from '../useConsole';
import useForceRender from '../useForceRender';
import ChildA from './ChildA';
import ChildC from './ChildC';

function Parent() {
  const { showName } = useConsole('Parent');
  useForceRender(3000);

  // const temp = useCallback(() => console.log('useCallback'), []);

  showName();

  return (
    <div style={{ width: '500px', backgroundColor: 'beige', height: '500px' }}>
      This is Parent
      {Array.from({ length: 5 }).map((_, i) => (
        <ChildC key={i}>i</ChildC>
      ))}
      {/* <ChildA temp={temp} /> */}
    </div>
  );
}

export { Parent };
