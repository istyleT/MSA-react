import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import LayoutPage from "./Layout/LayoutPage";

export default function LoginPage() {
  const [datalogin, setdatalogin] = useState({
    username: "",
    password: "",
  });
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
      const result = await res.json();
      if (res.status === 200) {
        localStorage.setItem("accessToken", result.token);
        navigate("/Manage/Promotion");
      } else {
        throw Error(`${result.message}`);
      }
    } catch (error) {
      Swal.fire({
        title: `${error}`,
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
        <form
          method="POST"
          onSubmit={handleLogin}
          className="position-absolute top-50 start-50 translate-middle rounded-4 p-3 shadow bg-light"
          style={{ width: 95 + "vw", maxWidth: 300 + "px" }}
        >
          <h4 className="text-center pb-2 border-bottom border-2 border-danger mb-3 fst-italic">
            MSA Admin Login
          </h4>
          <FloatingLabel
            controlId="floatingInput"
            label="ผู้ใช้งาน"
            className="mb-3"
          >
            <Form.Control
              className="rounded-4 text-center fw-bold"
              type="text"
              name="username"
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="รหัสผ่าน">
            <Form.Control
              className="rounded-4 text-center fw-bold"
              type="password"
              name="password"
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <Button
            variant="danger"
            type="submit"
            className="w-100 fw-bold mt-3 rounded-4"
          >
            {loading ? "Please wait..." : "Log in 🔓"}
          </Button>
        </form>
      </section>
    </LayoutPage>
  );
}
