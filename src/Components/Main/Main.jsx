import React from 'react';
import './MainStyle.css';
import FormInpt from './MainComponents/MainForm'

function Main() {

  
  return (
    <main className="main-wrapper">
      <h2 className='main-title'>"연습은 어제의 당신보다 당신을 더 낫게 만든다."</h2>
      <p><strong>1만 시간의 법칙</strong> 은<br />
      어떤 분야의 전문가가 되기 위해서는<br />
      최소한 1만 시간의 훈련이 필요하다는 법칙이다.</p>
      <FormInpt />
    </main>
  );
}

export default Main;