// import { memo } from 'react';

import 배달이 from './baedal.png';

function Photo({ cell }) {
  return (
    <div
      style={{
        outline: `1px solid black`,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        height: 40,
        backgroundColor: `rgba(0, 0, 0, ${cell / 100})`,
      }}
    >
      <img src={배달이} alt='배달이' style={{ width: '100%' }} />
    </div>
  );
}

export default Photo;
