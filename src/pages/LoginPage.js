import React ,{useState} from "react";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from "react-bootstrap/Form";
import Button from 'react-bootstrap/Button';

const LoginPage = () => {
  const [datalogin, setdatalogin] = useState({});
  
  const handleInputChange = (e) => {
    setdatalogin({ ...datalogin, [e.target.name]: e.target.value });
  };
  
  const handleLogin = (e) => {
    e.preventDefault();
    alert(datalogin.useremail + " " + datalogin.password);
  };
  return (
   <section style={{backgroundImage: "url(images/sky-sights.jpg)",height: 100 + "vh",width: 100 + "vw",backgroundRepeat: "no-repeat",backgroundAttachment: "fixed",backgroundSize:"cover"}} >
    <Form onSubmit={handleLogin} className="position-absolute top-50 start-50 translate-middle border border-dark border-1 rounded-3 p-3 shadow bg-light">
      <h2 className="text-center pb-2 border-bottom border-1 border-danger mb-3">Admin Login</h2>
      <FloatingLabel controlId="floatingInput" label="Email" className="mb-3">
        <Form.Control type="email" name="useremail" value={datalogin.useremail || ""} placeholder="name@example.com"  onChange={handleInputChange}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password"  name="password" value={datalogin.password|| ""} placeholder="Password" onChange={handleInputChange}/>
      </FloatingLabel>
      <Button variant="danger" type="submit" className="w-100 fw-bold mt-3 ">Login</Button>
    </Form>
   </section>
  );
};
export default LoginPage;
