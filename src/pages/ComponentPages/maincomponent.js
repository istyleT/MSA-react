//conditions parallex work
function disPlayMedium(value_m) {
                    // header
                    textname.style.marginTop = value_m * 1.0 + 'px';
                    baner1.style.marginRight = value_m * 0.5 + 'px';
                    baner2.style.marginBottom = value_m * 1.5 + 'px';
                    baner3.style.marginLeft = value_m * 0.5 + 'px';
                    loadingline1.style.width = value_m * 4.0 + 'px';
                    return
                }
                // function break move
                function breakmove1200 (valuescroll) {
                  if (valuescroll > 400) {
                    salepic.style.left = 7 + 'vw';
                    salecontent.style.right = 7 + 'vw';
                    if (valuescroll > 700) {
                      servicepic.style.right = 7 + 'vw';
                      servicecontent.style.left = 7 + 'vw';
                      if (valuescroll > 1000) {
                        bodypic.style.left = 7 + 'vw';
                        bodycontent.style.right = 7 + 'vw';
                      }
                    }
                  }
                  console.log("breakmove1000 work");
                  return
                }
                function breakmove1400 (valuescroll) {
                  if (valuescroll > 400) {
                    salepic.style.left = 10 + 'vw';
                    salecontent.style.right = 10 + 'vw';
                    if (valuescroll > 700) {
                      servicepic.style.right = 10 + 'vw';
                      servicecontent.style.left = 10 + 'vw';
                      if (valuescroll > 1000) {
                        bodypic.style.left = 10 + 'vw';
                        bodycontent.style.right = 10 + 'vw';
                      }
                    }
                  }
                  console.log("breakmove1400 work");
                  return
                }
                function breakmove1800 (valuescroll) {
                  if (valuescroll > 400) {
                    salepic.style.left = 15 + 'vw';
                    salecontent.style.right = 15 + 'vw';
                    if (valuescroll > 700) {
                      servicepic.style.right = 15 + 'vw';
                      servicecontent.style.left = 15 + 'vw';
                      if (valuescroll > 1000) {
                        bodypic.style.left = 15 + 'vw';
                        bodycontent.style.right = 15 + 'vw';
                      }
                    }
                  }
                  console.log("breakmove1800 work");
                  return
                }
                // function parallex banner and content
                 function bannerContent(value, windowSize) {
                     // header
                    textname.style.marginTop = value * 1.0 + 'px';
                    baner1.style.marginRight = value * 0.5 + 'px';
                    baner2.style.marginBottom = value * 1.5 + 'px';
                    baner3.style.marginLeft = value * 0.5 + 'px';
                    loadingline1.style.width = value * 4.0 + 'px';
                    if (windowSize >=1200 && windowSize < 1400) {
                      // sale
                      salepic.style.left = value * 0.0175 + 'vw';
                      salecontent.style.right = value * 0.0175 + 'vw';
                      //service
                      servicepic.style.right = value * 0.01 + 'vw';
                      servicecontent.style.left = value * 0.01 + 'vw';
                      //body
                      bodypic.style.left = value * 0.007 + 'vw';
                      bodycontent.style.right = value * 0.007 + 'vw';
                      console.log("windowSize work 1200");
                      breakmove1200(value);
                      }
                    if (windowSize >=1400 && windowSize < 1800) {
                      // sale
                      salepic.style.left = value * 0.025 + 'vw';
                      salecontent.style.right = value * 0.025 + 'vw';
                      //service
                      servicepic.style.right = value * 0.0143 + 'vw';
                      servicecontent.style.left = value * 0.0143 + 'vw';
                      //body
                      bodypic.style.left = value * 0.010 + 'vw';
                      bodycontent.style.right = value * 0.010 + 'vw';
                      console.log("windowSize work 1400");
                      breakmove1400(value);
                      }
                    if (windowSize >= 1800) {
                      // sale
                      salepic.style.left = value * 0.0375 + 'vw';
                      salecontent.style.right = value * 0.0375 + 'vw';
                      //service
                      servicepic.style.right = value * 0.02143 + 'vw';
                      servicecontent.style.left = value * 0.02143 + 'vw';
                      //body
                      bodypic.style.left = value * 0.015 + 'vw';
                      bodycontent.style.right = value * 0.015 + 'vw';
                      // log
                      console.log("windowSize work 1800");
                      breakmove1800(value);
                      }
                }
                //  เก็บค่าตัวแปร
                // เก็บค่าขนาดหน้าจอ
                var windowSize = window.outerWidth;
                // header
                var textname = document.getElementById('textname');
                var baner1 = document.getElementById('baner1');
                var baner2 = document.getElementById('baner2');
                var baner3 = document.getElementById('baner3');
                var loadingline1 = document.getElementById('loadingline1');
                // sale
                var salepic = document.getElementById('saledoor-pic');
                var salecontent = document.getElementById('sale-content');
                //service
                var servicepic = document.getElementById('servicedoor-pic');
                var servicecontent = document.getElementById('service-content');
                //body
                var bodypic = document.getElementById('bodydoor-pic');
                var bodycontent = document.getElementById('body-content')
                
                //  ตรวจสอบขนาดหน้าจอ
                if (windowSize <= 750) {
                    // disPlaySmall();
                }
                else if (windowSize > 750 && windowSize < 1200) {
                    window.addEventListener("scroll", ()=>{
                      let value_m = window.scrollY;
                      disPlayMedium(value_m);
                })
                }
                else  {
                    window.addEventListener("scroll", ()=>{
                    let value = window.scrollY;
                    bannerContent(value, windowSize);
                })
                };

// End Parallex

// popup tel number
// showNumberHo = () => alert("เบอร์ติดต่อ : 02-743-3955");
// showNumberHtr = () => alert("เบอร์ติดต่อ : 02-906-9555");
// showNumberRs = () => alert("เบอร์ติดต่อ : 02-577-2299");

// End popup tel number