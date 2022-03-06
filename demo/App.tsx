import React, { useRef } from 'react';
import { useMount, AutoCenter } from 'react-uni-comps';
import QRCode from '../src';

export default function App() {
  const ref = useRef();
  useMount(() => {
    document.title = 'w-qrcode: 二维码';
  });

  useMount(() => {
    const q = new QRCode(ref.current, { text: 'https://baidu.com/' });
  });

  return (
    <AutoCenter>
      <div ref={ref}></div>
    </AutoCenter>
  );
}
