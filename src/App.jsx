import Photo from 'Photo';
import { useState } from 'react';

function InputForm({ name, onChange }) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div>
          <label htmlFor='ownerNameInput'>사용자 이름</label>
        </div>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <input id='ownerNameInput' name='owner' onChange={onChange} value={name || ''} />
          <button type='submit' style={{ backgroundColor: 'cyan', border: 'none' }}>
            제출
          </button>
        </div>
      </div>
    </form>
  );
}

const dimensions = 180;
const data = Array.from({ length: dimensions }, () =>
  Array.from({ length: dimensions }, () => Math.random() * 100)
);

const initialRowsColumns = Math.floor(dimensions / 2);

function App() {
  const [name, setName] = useState('');
  const rows = initialRowsColumns;
  const columns = initialRowsColumns;

  const handleName = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <div>
        <h1>배달이 사진첩</h1>
        <InputForm name={name} onChange={handleName} />
        <hr />
        <div>
          <p>
            <strong>아래는 배달이 사진들을 보여주는 곳입니다😀</strong>
          </p>
          <br />
          <div style={{ width: data.length * 40 }}>
            {data.slice(0, rows).map((row, i) => (
              <div key={`${row}${i}`} style={{ display: 'flex' }}>
                {row.slice(0, columns).map((cell, i) => (
                  <Photo cell={cell} key={`${cell}${i}`} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
