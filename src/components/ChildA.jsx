import useConsole from 'hooks/useConsole';
import { memo, useState, useEffect } from 'react';

function ChildA({ value, onChange }) {
  return <input value={value} onChange={onChange} />;
}

export default memo(ChildA);
