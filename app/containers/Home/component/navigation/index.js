import React, { useState, useEffect } from 'react'
// import logo from '../../assets/img/logo.png'
import logo from '../../../../assets/img/logo.png'
import whitelogo from '../../../../assets/img/hitlogo.png'
import BASE_CLIENT from '../../../../urlConfig';

export default function Nav(props) {
  const [scrolled, setScrooled] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      const isTop = window.scrollY < 100;
      console.log(window.scrollY);
      if (isTop !== true) {
        setScrooled(true);
        console.log(scrolled);
      } else {
        setScrooled(false);
      }
    })

  });
  return (
    <div>
      <header className={scrolled ? 'header_area navbar_fixed' : 'header_area  '} >
        <div className="main_menu" >
          <nav className="navbar navbar-expand-lg  ">
            <div className="container box_1620  ">
              <a className="navbar-brand logo_h" href="index.html"><img className="logoNavbar logo-hit" src={scrolled ? logo : whitelogo} alt="logo" /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav justify-content-end">
                  <li className={props.active == 'home' ? "nav-item  active" : 'nav-item'  }><a className="nav-link" href="http://localhost:3000">Trang chủ</a></li>
                  <li className={props.active == 'about' ? "nav-item  active" : 'nav-item'}><a className="nav-link" href="http://localhost:3000/about">About</a></li>
                  <li className="nav-item"><a className="nav-link" href="about.html">Đội ngũ phát triển</a></li>
                  <li className="nav-item"><a className="nav-link" href="package.html">Thành viên</a>
                  </li><li className="nav-item submenu dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Tin tức</a>
                    {/* <ul class="dropdown-menu">
            <li class="nav-item"><a class="nav-link" href="amentities.html"></a>
          </ul> */}
                  </li>
                  {/* <li class="nav-item submenu dropdown">
          <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
            aria-expanded="false">Blog</a>
          <ul class="dropdown-menu">
            <li class="nav-item"><a class="nav-link" href="blog.html">Blog Single</a></li>
            <li class="nav-item"><a class="nav-link" href="blog-details.html">Blog Details</a></li>
          </ul>
        </li>
        <li class="nav-item"><a class="nav-link" href="contact.html">Contact</a></li> */}
                </ul>
                <div className="nav-right text-center text-lg-right py-4 py-lg-0">
                  <a className="button" href="http://localhost:3000/login">Đăng nhập</a>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    </div>
  )
}
