import React, { useState } from 'react';
import Button from './Button';
import loading from '../../../img/loading.png';
import Modal from "./Modal";
import Share from './Share';

export default function Result(props) {

  const [showResult, setShowResult] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [shareModalShow, setShareModalShow] = useState(false);
  
    setTimeout(() => {
      setShowResult(true);
    }, 3000);

  const remainingTime = Math.ceil(10000 / props.time);
    
  const modalClose = () => {
    setModalShow(false);
    document.body.classList.remove('modal-open');
  }
  const modalOpen = () => {
    setModalShow(true);
    document.body.classList.add('modal-open');
  }
  const shareModalClose = () => {
    console.log(shareModalShow);
    setShareModalShow(false);
    document.body.classList.remove('share-modal-open');
  }
  const shareModalOpen = () => {
    setShareModalShow(true);
    document.body.classList.add('share-modal-open');
  }
    return (
        !showResult ? <div><img src={loading} className='loading' alt="돌아가는 시계" /></div> : <div className = "result">
        <p>당신은 <strong>{`${props.job}`}</strong> 전문가가 되기 위해서 <br />
          대략 <strong>{`${remainingTime}`}</strong> 일 이상 훈련하셔야 합니다! {':)'} 
        </p>
        <Button className = "btn-train" onClick={modalOpen} content ="훈련하러 가기 GO!GO!" />
        <Button className = "btn-share" onClick={shareModalOpen} content ="공유하기" />
        {modalShow && < Modal modalClose={modalClose} />}
        {shareModalShow && < Share shareModalClose={shareModalClose} />}

        </div>
    )
}