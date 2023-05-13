import React from 'react';
import VideoElement from "./SubComponents/VideoElement";

function VideoSaleAlbum() {

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style = "{{display: 'none'}}";  
  }
  slides[slideIndex-1].style = "{{display: 'block'}}";  
}

  return (
    <div className='slideshow-container'>
        <VideoElement
          titlevdo = "ขายจริง แจกจริง กับ เอ็มจี แสงอารี ออโต้"
          youtubeurl = "https://www.youtube.com/embed/y0v8h3MXrL4"
        />
       <VideoElement
          titlevdo = "ออกรถวันนี้ รับเงินกลับบ้านสูงสุด 100,000 บาท"
          youtubeurl = "https://www.youtube.com/embed/QD2RWYQxyUA"
        />
        <VideoElement
          titlevdo = "เซลล์อดัมพาชมบูธรถยนต์MG ในงานMotorShow2023"
          youtubeurl = "https://www.youtube.com/embed/V5E3f8LVPNY"
        />
        <VideoElement
          titlevdo = "MG5 แต่งเต็มรอบคัน พร้อมล้อแม็กขอบ 18"
          youtubeurl = "https://www.youtube.com/embed/QYaBNCbKR2Q"
        />
        <span class="prev" onClick={()=> {plusSlides(-1)}}>❮</span>
        <span class="next" onClick={()=> {plusSlides(1)}}>❯</span>
    </div>
  );
};
export default VideoSaleAlbum;
