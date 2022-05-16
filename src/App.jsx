import ChildB from './example1/ChildB';
import { Parent } from './example1/Parent';
import useForceRender from './useForceRender';

function App() {
  // useForceRender(1000);
  console.log('APP');
  return (
    <div>
      <Parent />
      <ChildB />
    </div>
  );
}

export default App;
