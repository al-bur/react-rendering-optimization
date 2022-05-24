import useConsole from 'hooks/useConsole';
import useForceRender from 'hooks/useForceRender';

function Parent() {
  const { showName } = useConsole('Parent');

  useForceRender(3000);

  showName();

  return (
    <div style={{ width: '500px', backgroundColor: 'beige', height: '500px' }}>This is Parent</div>
  );
}

export default Parent;
