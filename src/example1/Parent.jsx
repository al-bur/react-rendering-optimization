import { useCallback } from 'react';
import useConsole from '../useConsole';
import useForceRender from '../useForceRender';
import ChildA from './ChildA';

function Parent() {
  const { showName } = useConsole('Parent');
  useForceRender(3000);

  const temp = useCallback(() => console.log('useCallback'), []);

  showName();

  return (
    <div style={{ width: '500px', backgroundColor: 'beige', height: '500px' }}>
      This is Parent
      <ChildA temp={temp} />
    </div>
  );
}

export { Parent };
