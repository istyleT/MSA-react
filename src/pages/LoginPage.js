import React ,{useState} from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2'

const LoginPage = () => {
  const [datalogin, setdatalogin] = useState({});
  
  const handleInputChange = (e) => {
    setdatalogin({ ...datalogin, [e.target.name]: e.target.value });
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    let userdata = {
      username: datalogin.username,
      password: datalogin.password,
    };
    fetch("https://test-web-api.herokuapp.com/login", {
      method: "POST",
      headers: {
        "Accept": "application/form-data",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userdata),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === "ok") {
          localStorage.setItem("accessToken", result.accessToken);
          window.location.href = "/Manage";
        }
        else if (result.status === "fail"){
          Swal.fire({
            title: 'Error',
            text: "Wrong username or password",
            icon: 'error',
            confirmButtonText: 'OK',
          });
        }
      });
  };
  return (
   <section style={{backgroundImage: "url(images/sky-sights.jpg)",height: 100 + "vh",width: 100 + "vw",backgroundRepeat: "no-repeat",backgroundAttachment: "fixed",backgroundSize:"cover"}} >
    <Form onSubmit={handleLogin} className="position-absolute top-50 start-50 translate-middle border border-dark border-1 rounded-3 p-3 shadow bg-light">
      <h2 className="text-center pb-2 border-bottom border-1 border-danger mb-3">Admin Login</h2>
      <FloatingLabel controlId="floatingInput" label="User name" className="mb-3">
        <Form.Control type="text" name="username" value={datalogin.username || ""}   onChange={handleInputChange}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password"  name="password" value={datalogin.password|| ""}  onChange={handleInputChange}/>
      </FloatingLabel>
      <Button variant="danger" type="submit" className="w-100 fw-bold mt-3 ">Login</Button>
    </Form>
   </section>
  );
};
export default LoginPage;
