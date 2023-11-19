import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import Loading from "../ui/Loading";
import LayoutPage from "./LayoutPage";

export default function LoginPage() {
  const [datalogin, setdatalogin] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setdatalogin({ ...datalogin, [e.target.name]: e.target.value });
  };

  async function handleLogin(e) {
    try {
      setLoading(true);
      e.preventDefault();
      const res = await fetch("http://localhost:4000/user/login", {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datalogin),
      });
      if (!res.status === "success") throw new Error("Login Fail");
      const result = await res.json();
      navigate("/Manage");
      localStorage.setItem("accessToken", result.token);
    } catch (error) {
      Swal.fire({
        title: "Login Fail",
        icon: "error",
        showConfirmButton: false,
        timer: 2000,
      });
    } finally {
      setLoading(false);
    }
  }
  return (
    <LayoutPage>
      <section
        style={{
          backgroundImage: "url(images/sky-sights.jpg)",
          height: 100 + "vh",
          width: 100 + "vw",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          backgroundSize: "cover",
        }}
      >
        {loading && <Loading />}
        <Form
          onSubmit={handleLogin}
          className="position-absolute top-50 start-50 translate-middle border border-dark border-1 rounded-2 p-3 shadow bg-light"
        >
          <h3 className="text-center pb-2 border-bottom border-3 border-danger mb-3 fst-italic">
            Admin Login
          </h3>
          <FloatingLabel
            controlId="floatingInput"
            label="User name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="username"
              value={datalogin.username || ""}
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control
              type="password"
              name="password"
              value={datalogin.password || ""}
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <Button
            variant="danger"
            type="submit"
            className="w-100 fw-bold mt-3 "
          >
            Login
          </Button>
        </Form>
      </section>
    </LayoutPage>
  );
}
