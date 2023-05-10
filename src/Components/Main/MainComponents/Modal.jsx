import React from 'react'
import licat from '../../../img/licat.png';
import '../MainStyle.css';
import Button from './Button';

export default function Modal({modalClose}) {
    

    return (
        <div className='modal-backdrop' onClick={modalClose}>
            <article className='modal'>
                <h2 className='modal-title'>화이팅!! &hearts;&hearts;</h2>
                <p>당신의 꿈을 응원합니다!</p>
                <img className='modal-licat' src={licat} alt = "응원하는 라이켓" />
                <Button className = "btn-close" onClick={modalClose} content="종료하고 진짜 훈련하러 가기 GO!GO!" />
            </article>
        </div>
    )
}