import React, { useState } from "react";
import "../style/cssPage.css";
import { useNavigate } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import LayoutPage from "./Layout/LayoutPage";
import { swalError } from "../utils/function/swalfire";

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
      const res = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/user/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/form-data",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datalogin),
        }
      );
      const result = await res.json();
      if (res.status === 200) {
        localStorage.setItem("accessToken", result.token);
        navigate("/Manage/Promotion");
      } else {
        throw Error(`${result.message}`);
      }
    } catch (error) {
      swalError(error.message);
    } finally {
      setLoading(false);
    }
  }
  return (
    <LayoutPage>
      <section className="page-admin w-100 h-100">
        <form
          method="POST"
          onSubmit={handleLogin}
          className="position-absolute top-50 start-50 translate-middle rounded-4 p-3 shadow bg-light"
          style={{ width: 95 + "vw", maxWidth: 350 + "px" }}
        >
          <h4 className="text-center fw-bold pb-2 border-bottom border-2 border-danger mb-3 fst-italic">
            Admin Login
          </h4>
          <FloatingLabel label="Username" className="mb-3 fw-bold">
            <Form.Control
              className="rounded-4 text-center fw-bold"
              type="text"
              name="username"
              onChange={handleInputChange}
            />
          </FloatingLabel>
          <FloatingLabel className="fw-bold" label="Password">
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
