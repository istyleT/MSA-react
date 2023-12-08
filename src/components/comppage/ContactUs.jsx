import React from "react";

const ContactUs = () => {
                    return (
  <section className="section-contactus" id="sec-contactus">
    <div className="container col-xl-10 col-xxl-8 px-4 py-5">
      <div className="row align-items-center g-lg-5 ">
        <div className="col-lg-7 text-center text-lg-start bg-white p-5 border border-light border-3 rounded-4">
          <h3 className="display-6 fw-bold lh-1 mb-3">บริษัท เอ็มจี เเสงอารี ออโต้ จำกัด</h3>
          <p className="col-lg-10 fs-4">468 ถ. ศรีนครินทร์ แขวงหนองบอน เขต ประเวศ กรุงเทพมหานคร 10250.</p>
          <p className="col-lg-10 fs-5">
            <img loading="lazy" src="images/icons8-phone-64.png" alt="" width="40" height="40" /> 02-xxx-xxxx
          </p>
          <p className="col-lg-10 fs-5">
            <img loading="lazy" src="images/icons8-fax-64.png" alt="" width="40" height="40" /> 02-xxx-xxxx
          </p>
          <p className="col-lg-10 fs-5">
            <img loading="lazy" src="images/icons8-mail-64.png" alt="" width="40" height="40" /> MSA_sri@gmail.com
          </p>
        </div>
        <div className="col-md-10 mx-auto col-lg-5">
          <form className="p-4 p-md-5 border border-danger border-4 rounded-4 bg-light m-2">
            <div className="form-floating mb-3">
              <input type="text" className="form-control" id="floatingInput" placeholder="name" />
              <label for="floatingInput">ชื่อผู้ติดต่อ*</label>
            </div>
            <div className="form-floating mb-3">
              <input type="e-mail" className="form-control" id="floatingInput" placeholder="e-mail" />
              <label for="floatingInput">E-mail*</label>
            </div>
            <div className="form-floating mb-3">
              <input type="number" className="form-control" id="floatingInput" placeholder="Tel-phone" />
              <label for="floatingInput">เบอร์ติดต่อ</label>
            </div>
            <div className="form-floating mb-3">
              <textarea type="text" className="form-control" id="floatingInput" placeholder="Message"></textarea>
              <label for="floatingInput">ข้อความ*</label>
            </div>
            <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me"/> ฉันยอมรับนโยบายความเป็นส่วนตัว
              </label>
            </div>
            <button className="w-100 btn btn-lg btn-danger" type="submit">Send E-mail</button>
            <hr className="my-4"/>
            <small className="text-muted">By clicking Send E-mail, you agree to the terms of use.</small>
          </form>
        </div>
      </div>
    </div>
  </section>
                    );
};
export default ContactUs;