import useConsole from '../useConsole';

function ChildB() {
  const { showName } = useConsole('ChildB');

  showName();
  return <div style={{ width: '100px', backgroundColor: 'blue', height: '100px' }}>ChildB</div>;
}

export default ChildB;
