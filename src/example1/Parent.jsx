import useConsole from '../useConsole';
import useForceRender from '../useForceRender';
import ChildA from './ChildA';

function Parent() {
  const { showName } = useConsole('Parent');
  useForceRender(1000);

  showName();

  return (
    <div style={{ width: '500px', backgroundColor: 'beige', height: '500px' }}>
      This is Parent
      <ChildA />
    </div>
  );
}

export { Parent };
