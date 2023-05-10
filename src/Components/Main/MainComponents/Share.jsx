import React from 'react'
import Button from './Button';
import '../MainStyle.css';

export default function Share({shareModalClose}) {

  const shareInfo = [
    {id:0, site: "instagram", siteUrl: "https://www.instagram.com/", content: "인스타그램에 공유하기"},
    {id:1, site: "facebook", siteUrl: "https://www.facebook.com/" , content: "페이스북에 공유하기"},
    {id:2, site: "kakao", siteUrl: "https://www.kakao.com/" , content: "카카오톡에 공유하기"},
  ]
  const siteList = [];

    shareInfo.forEach((item) => {
        siteList.push(<li key={item.id} ><Button className = {`share-${item.site}`} onClick={() => handleLink(item.siteUrl)} content={`${item.content}`} /></li>);
    });

    function handleLink(url){
      alert(`${url}`);
    }

  return (
    <div className='share-modal-backdrop' onClick={shareModalClose}>
            <article className='share-modal'>
                {siteList}
            </article>
        </div>
  )
}
