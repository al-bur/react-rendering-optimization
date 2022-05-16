import { memo } from 'react';
import useConsole from '../useConsole';
import useForceRender from '../useForceRender';

function ChildA() {
  const { showName } = useConsole('ChildA');
  // useForceRender(1000);

  showName();

  return <div style={{ width: '100px', backgroundColor: 'red', height: '100px' }}>ChildA</div>;
}

export default memo(ChildA);
