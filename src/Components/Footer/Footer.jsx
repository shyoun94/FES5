import React from 'react';
import companyLogo from '../../img/logo.png'
import './FooterStyle.css'
function Footer() {
  return (
    <footer className="footer-wrapper">
      <img className = "company-logo" src={companyLogo} alt="위니브 영문 로고"/>
      <p>※ 본 서비스 내 이미지 및 콘텐츠의 저작권은 주식회사 WeNiv에 있습니다.<br />
        수정 및 재배포, 무단 도용 시 법적인 문제가 발생할 수 있습니다.</p>
    </footer>
  );
}

export default Footer;