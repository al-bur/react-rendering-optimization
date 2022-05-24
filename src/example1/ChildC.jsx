import useConsole from '../useConsole';

function ChildC({ children }) {
  const { showName } = useConsole('ChildC');

  showName();

  return <div>{children}</div>;
}

export default ChildC;
