import React from 'react';
import '../../assets/css/style.css';
import '../../assets/css/spinner.css';
import '../../assets/css/aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.css';
import   '../../assets/js/main';

import logo from '../../assets/img/logo.png'
import banner1 from '../../assets/img/banner/banner-1.png'
import asset5 from '../../assets/img/home/asset5.png'
import asset2 from '../../assets/img/home/asset2.png'
import asset3 from '../../assets/img/home/asset3.png'
import asset4 from '../../assets/img/home/asset4.png'
import ptsClass from '../../assets/img/classHit/pts.jpg'
import javaClass from '../../assets/img/classHit/java.png'
import pythonClass from '../../assets/img/classHit/python.png'
import webClass from '../../assets/img/classHit/web.png'

export default function Home() {
  

  return (
   
  
    <div>
   
      {/*================ Header Menu Area start =================*/}
      <header className="header_area">
        <div className="main_menu" >
        
          <nav className="navbar navbar-expand-lg  " style={{ backgroundColor:'#f57c00'}}>
            <div className="container box_1620">
              <a className="navbar-brand logo_h" href="index.html"><img className="logoNavbar logo-hit" src={logo} alt="logo" /></a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <div className="collapse navbar-collapse offset" id="navbarSupportedContent">
                <ul className="nav navbar-nav menu_nav justify-content-end">
                  <li className="nav-item  active"><a className="nav-link" href="index.html">Trang chủ</a></li>
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
      {/*================Header Menu Area =================*/}
      {/*================Hero Banner Area Start =================*/}
      <section className="hero-banner magic-ball">
        <div className="container">
          <div className="row align-items-center text-center text-md-left">
            <div className="col-md-6 col-lg-5 mb-5 mb-md-0">
              <h1 style = {{fontWeight:'bold',fontSize:'40px'}}>Chào Mừng Đến Với CLB HIT</h1>
              <p style={{ fontSize: '20px' }}>CLB HIT là một câu lạc bộ học thuật của Khoa CNTT trường đại học Công Nghiệp Hà Nội,trụ sở tại tầng 9 nhà A1 CS1 </p>
              <a className="button button-hero mt-4" href="#">Đăng Nhập</a>
            </div>
            <div className="col-md-6 col-lg-7 col-xl-6 offset-xl-1">
              <img className="img-fluid" src={banner1} alt="banner-1" />
            </div>
          </div>
        </div>
      </section>

      <section className="section-margin ">
        <div className="container">
          <div className="section-intro text-center pb-90px">
            
            <h1>Tiêu Chí Hoạt Động</h1>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="service-card text-center">
                <div className="service-card-img activity-hit">
                  <img className="img-fluid" src={asset2} alt="error" />
                </div>
                <div className="service-card-body">
                  <h2>THINKING</h2>
                  <hr />
                  <h2>Suy Nghĩ</h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="service-card text-center">
                <div className="service-card-img">
                  <img className="img-fluid" src={asset3} alt="error" />
                </div>
                <div className="service-card-body">
                  <h2>CREATIVITY</h2>
                  <hr />
                  <h2>Sáng Tạo</h2>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="service-card text-center">
                <div className="service-card-img">
                  <img className="img-fluid" src={asset4} alt="error" />
                </div>
                <div className="service-card-body ">
                  <h2 className="text-deco">INNOVATION</h2>
                  <hr />
                  <h2 className="text-deco">Đổi Mới</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     
      {/*================Hero Banner Area End =================*/}
      {/*================About Area Start =================*/}
      <section className="bg-gray section-padding magic-ball magic-ball-about">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-6 mb-4 mb-md-0">
              <div className="about-img">
                <img className="img-fluid" src={asset5} alt="error" />
              </div>
            </div>
            <div className="col-lg-5 col-md-6 align-self-center about-content">
              <h1 style={{ fontWeight: 'bold', fontSize: '40px' }}>VỀ CHÚNG TÔI</h1>
              <p style={{ fontSize: '20px' }}> Câu lạc bộ tin học HIT là Câu lạc bộ học tập sinh viên trực thuộc khoa Công nghệ thông tin trường Đại học công nghiệp Hà Nội. Được thành lập vào ngày 18/8/2010.</p>
              <a className="button" href="https://www.facebook.com/HITClub.HaUI/">Chi tiết</a>
            </div>
          </div>
        </div>
      </section>
      {/*================Service Area Start =================*/}
      {/*================Activity of Club Start =================*/}
      
      {/*================Activity of Club End =================*/}
      {/*================Image of CLub Start =================*/}
      <section className="section-margin pb-xl-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 bgCam" >
              <div className = 'bg-light'>
              <div className="tour-card " style ={{marginTop:'10px'}}>
                <img className="card-img rounded-0" src={ptsClass} alt="" />
                <div className="tour-card-overlay">
                  <div className="media">
                    <div className="media-body">
                      <h4>Tham dự sự kiện của Google</h4>
                      <small>Một số thành viên của câu lạc bộ đã có chuyến đi đầy bổ ích được tổ chức bởi Google.</small>                     
                    </div>                   
                  </div>                   
                  
                </div>
                
                
              </div>
              <div className="col-lg-10 offset-lg-1 bg-l">
                
                <div style={{paddingBottom:'1px'}}>
                  <h2>Hoạt động chính</h2>
                  <p>Mở những lớp chia sẻ kiến thức về các lĩnh vực trong ngành, tham gia các cuộc thi trong và ngoài trường, tổ chức các hoạt động trải nghiệm và hội thảo. </p>
                </div>
              </div>
            </div>
            </div>
            <div className="col-md-6 bgCam">
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="tour-content">
                    <h2>Hoạt động chính</h2>
                    <p>Mở những lớp chia sẻ kiến thức về các lĩnh vực trong ngành, tham gia các cuộc thi trong và ngoài trường, tổ chức các hoạt động trải nghiệm và hội thảo. </p>
                  </div>
                </div>
              </div>
              <div className="tour-card">
                <img className="card-img rounded-0" src={webClass} alt="" style={{ height: '100%' }} />
                <div className="tour-card-overlay">
                  <div className="media">
                    <div className="media-body">
                      <h4>Cuộc đua số 2018</h4>
                      <small>Câu lạc bộ đóng góp quân số trong đội hình của trường đi thi cuộc đua số năm 2018.</small>
                      {/* <p>We proper guided our tourist</p> */}
                    </div>
                    {/* <div class="media-price">
            <h4 class="text-primary">$65/day</h4>
          </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-6 bgCam">
              
              <div className="tour-card">
                <img className="card-img rounded-0" src={pythonClass} alt="" />
                <div className="tour-card-overlay">
                  <div className="media">
                    <div className="media-body">
                      <h4>HIT Openday</h4>
                      <small>Sự kiện quan trọng nhất trong năm của câu lạc bộ nhằm tổng kết,đánh giá công việc của năm cũ và định hướng triển khai công việc trong năm mới.</small>
                      {/* <p>We proper guided our tourist</p> */}
                    </div>
                    {/* <div class="media-price">
            <h4 class="text-primary">$65/day</h4>
          </div> */}
                  </div>
                </div>
              
                
              </div>
              <div className="col-lg-10 offset-lg-1 bg-l">
                <div className="tour-content">
                  <h2>Hoạt động chính</h2>
                  <p>Mở những lớp chia sẻ kiến thức về các lĩnh vực trong ngành, tham gia các cuộc thi trong và ngoài trường, tổ chức các hoạt động trải nghiệm và hội thảo. </p>
                </div>
              </div>
              
            </div>
            <div className="col-md-6 col-lg-6 bgCam">
              <div className = 'bg-light'>
              <div className="col-lg-10 offset-lg-1 bg-l">
                <div className="tour-content">
                  <h2>Hoạt động chính</h2>
                  <p>Mở những lớp chia sẻ kiến thức về các lĩnh vực trong ngành, tham gia các cuộc thi trong và ngoài trường, tổ chức các hoạt động trải nghiệm và hội thảo. </p>
                </div>
              </div>
              <div className="tour-card">
                <img className="card-img rounded-0" src={javaClass} alt="" />
                <div className="tour-card-overlay">
                  <div className="media">
                    <div className="media-body">
                      <h4>HIT travel</h4>
                      <small>Sự kiện hằng năm nhằm giúp thành viên thư giãn sau những ngày học tập căng thẳng</small>
                      {/* <p>We proper guided our tourist</p> */}
                    </div>
                    {/* <div class="media-price">
            <h4 class="text-primary">$65/day</h4>
          </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>

      
      {/*================Image of CLub End =================*/}
      <section className="bg-gray section-padding magic-ball magic-ball-testimonial pb-xl-5">
        <div className="container">
          <div className="section-intro text-center pb-90px">
            <img className="section-intro-img" src="img/home/section-icon.png" alt="" />
            <h2>Our client says</h2>
            <p>Fowl have fruit moveth male they are that place you will lesser</p>
          </div>
          <div className="owl-carousel owl-theme testimonial pb-xl-5">
            <div className="testimonial__item">
              <div className="row">
                <div className="col-md-3 col-lg-2 align-self-center">
                  <div className="testimonial__img">
                    <img className="card-img rounded-0" src="img/testimonial/t-slider1.png" alt="" />
                  </div>
                </div>
                <div className="col-md-9 col-lg-10">
                  <div className="testimonial__content mt-3 mt-sm-0">
                    <h3>Daniel heart</h3>
                    <p>Project manager, Nestle</p>
                    <p className="testimonial__i">Also made from. Give may saying meat there from heaven it lights face had is gathered god earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had</p>
                    <span className="testimonial__icon"><i className="ti-quote-right" /></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial__item">
              <div className="row">
                <div className="col-md-3 col-lg-2 align-self-center">
                  <div className="testimonial__img">
                    <img className="card-img rounded-0" src="img/testimonial/t-slider1.png" alt="" />
                  </div>
                </div>
                <div className="col-md-9 col-lg-10">
                  <div className="testimonial__content mt-3 mt-sm-0">
                    <h3>Daniel heart</h3>
                    <p>Project manager, Nestle</p>
                    <p className="testimonial__i">Also made from. Give may saying meat there from heaven it lights face had is gathered god earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had</p>
                    <span className="testimonial__icon"><i className="ti-quote-right" /></span>
                  </div>
                </div>
              </div>
            </div>
            <div className="testimonial__item">
              <div className="row">
                <div className="col-md-3 col-lg-2 align-self-center">
                  <div className="testimonial__img">
                    <img className="card-img rounded-0" src="img/testimonial/t-slider1.png" alt="" />
                  </div>
                </div>
                <div className="col-md-9 col-lg-10">
                  <div className="testimonial__content mt-3 mt-sm-0">
                    <h3>Daniel heart</h3>
                    <p>Project manager, Nestle</p>
                    <p className="testimonial__i">Also made from. Give may saying meat there from heaven it lights face had is gathered god earth light for life may itself shall whales made they're blessed whales also made from give may saying meat. There from heaven it lights face had</p>
                    <span className="testimonial__icon"><i className="ti-quote-right" /></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*================Blog section Start =================*/}
      <section className="section-padding bg-gray">
        <div className="container">
          <div className="section-intro text-center pb-90px">
            {/* <img class="section-intro-img" src="img/home/section-icon.png" alt=""> */}
            <h1>Ban chủ nhiệm hiện tại</h1>
            {/* <p>Fowl have fruit moveth male they are that place you will lesser</p> */}
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="card-blog">
                <img className="card-img rounded-0" src="img/boss/tu.png" alt="" />
                <div className="card-blog-body">
                  {/* <a href="#">
          <h4>Forest responds to consultation smoking in al fresco.</h4>
        </a> */}
                  {/* <ul class="card-blog-info">
          <li><a href="#"><span class="align-middle"><i class="ti-notepad"></i></span>Jan 03, 2018</a></li>
          <li><a href="#"><span class="align-middle"><i class="ti-comments-smiley"></i></span>03 Comments</a></li>
        </ul>
        <p>Varius metus morbi ferme libero vehic on porta malesuada ut interdu estmales torquent vehicula parturient </p> */}
                  <h3 style={{ textAlign: 'center', fontSize: '30px' }}>Đoàn Phùng Tú</h3>
                  <hr />
                  <h3 style={{ textAlign: 'center' }}>Phó chủ nhiệm</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="card-blog">
                <img className="card-img rounded-0" src="img/boss/linh.png" alt="" />
                <div className="card-blog-body">
                  {/* <a href="#">
          <h4>Forest responds to consultation smoking in al fresco.</h4>
        </a> */}
                  {/* <ul class="card-blog-info">
          <li><a href="#"><span class="align-middle"><i class="ti-notepad"></i></span>Jan 03, 2018</a></li>
          <li><a href="#"><span class="align-middle"><i class="ti-comments-smiley"></i></span>03 Comments</a></li>
        </ul>
        <p>Varius metus morbi ferme libero vehic on porta malesuada ut interdu estmales torquent vehicula parturient </p> */}
                  <h3 style={{ textAlign: 'center', fontSize: '30px' }}>Nguyễn Đức Linh</h3>
                  <hr />
                  <h3 style={{ textAlign: 'center' }}>Chủ nhiệm</h3>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
              <div className="card-blog">
                <img className="card-img rounded-0" src="img/boss/ngọc.png" alt="" />
                <div className="card-blog-body">
                  {/* <a href="#">
          <h4>Forest responds to consultation smoking in al fresco.</h4>
        </a>
        <ul class="card-blog-info">
          <li><a href="#"><span class="align-middle"><i class="ti-notepad"></i></span>Jan 03, 2018</a></li>
          <li><a href="#"><span class="align-middle"><i class="ti-comments-smiley"></i></span>03 Comments</a></li>
        </ul>
        <p>Varius metus morbi ferme libero vehic on porta malesuada ut interdu estmales torquent vehicula parturient </p>
      </div> */}
                  <h3 style={{ textAlign: 'center', fontSize: '30px' }}>Hoàng Thị Bích Ngọc</h3>
                  <hr />
                  <h3 style={{ textAlign: 'center' }}>Phó chủ nhiệm</h3>
                </div>
              </div>
            </div>
          </div>
        </div></section>

      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>About Agency</h6>
                <p>
                  The world has become so fast paced that people don’t want to stand by reading a page of information to be  they would much rather look at a presentation and understand
          </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Navigation Links</h6>
                <div className="row">
                  <div className="col">
                    <ul>
                      <li><a href="#">Home</a></li>
                      <li><a href="#">Feature</a></li>
                      <li><a href="#">Services</a></li>
                      <li><a href="#">Portfolio</a></li>
                    </ul>
                  </div>
                  <div className="col">
                    <ul>
                      <li><a href="#">Team</a></li>
                      <li><a href="#">Pricing</a></li>
                      <li><a href="#">Blog</a></li>
                      <li><a href="#">Contact</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3  col-md-6 col-sm-6">
              <div className="single-footer-widget">
                <h6>Newsletter</h6>
                <p>
                  For business professionals caught between high OEM price and mediocre print and graphic output.
          </p>
                <div id="mc_embed_signup">
                  <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscription relative">
                    <div className="input-group d-flex flex-row">
                      <input name="EMAIL" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address '" required type="email" />
                      <button className="btn bb-btn"><span className="lnr lnr-location" /></button>
                    </div>
                    <div className="mt-10 info" />
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-3  col-md-6 col-sm-6">
              <div className="single-footer-widget mail-chimp">
                <h6 className="mb-20">InstaFeed</h6>
                <ul className="instafeed d-flex flex-wrap">
                  <li><img src="img/instagram/i1.jpg" alt="" /></li>
                  <li><img src="img/instagram/i2.jpg" alt="" /></li>
                  <li><img src="img/instagram/i3.jpg" alt="" /></li>
                  <li><img src="img/instagram/i4.jpg" alt="" /></li>
                  <li><img src="img/instagram/i5.jpg" alt="" /></li>
                  <li><img src="img/instagram/i6.jpg" alt="" /></li>
                  <li><img src="img/instagram/i7.jpg" alt="" /></li>
                  <li><img src="img/instagram/i8.jpg" alt="" /></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="row align-items-center">
              <p className="col-lg-8 col-sm-12 footer-text m-0 text-center text-lg-left">{/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          Copyright © All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}</p>
              <div className="col-lg-4 col-sm-12 footer-social text-center text-lg-right">
                <a href="#"><i className="fab fa-facebook-f" /></a>
                <a href="#"><i className="fab fa-twitter" /></a>
                <a href="#"><i className="fab fa-dribbble" /></a>
                <a href="#"><i className="fab fa-behance" /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>
      

      {/*================Blog section End =================*/}
      {/* ================ start footer Area ================= */}
      
      {/* ================ End footer Area ================= */}
    </div>
  
    
  );
}
