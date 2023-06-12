import React, { useState } from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import useEffectOnce from "../hook/useeffectonce";
import Swal from "sweetalert2";

const SiginPage = () => {
  const [datasigin, setdatasigin] = useState({});
  const [isLoading, setisLoading] = useState(true);

  useEffectOnce(() => {
    fetch("https://test-web-api.herokuapp.com/check_authen", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "authenticated") {
        } else {
          window.location.href = "/login";
        }
      })
      .then(() => {
        setisLoading(false);
      });
  });

  const handleInputChange = (e) => {
    setdatasigin({ ...datasigin, [e.target.name]: e.target.value });
  };

  const handleSigin = (e) => {
    e.preventDefault();
    let sigindata = {
      username: datasigin.username,
      password: datasigin.password,
      role: datasigin.role,
    };
    fetch("https://test-web-api.herokuapp.com/register", {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(sigindata),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.status === "ok") {
          Swal.fire({
            title: "Success",
            text: "Register success",
            icon: "success",
            confirmButtonText: "OK",
          });
        } else if (result.status === "fail") {
          Swal.fire({
            title: "Error",
            text: "Wrong username or password",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      });
  };

  if (isLoading) {
    return <div className="bg-transparents"></div>;
  }

  return (
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
      <Form
        onSubmit={handleSigin}
        className="position-absolute top-50 start-50 translate-middle border border-dark border-1 rounded-3 p-3 shadow bg-light"
      >
        <h2 className="text-center pb-2 border-bottom border-1 border-danger mb-3">
          Sigin
        </h2>
        <FloatingLabel
          controlId="floatingInput"
          label="Username"
          className="mb-3"
        >
          <Form.Control
            type="text"
            name="username"
            value={datasigin.username || ""}
            onChange={handleInputChange}
          />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="Password">
          <Form.Control
            type="password"
            name="password"
            value={datasigin.password || ""}
            onChange={handleInputChange}
          />
        </FloatingLabel>
          <Form.Select
            name="role"
            className="mt-3 text-center"
            aria-label="Default select example"
            onChange={handleInputChange}
            value={datasigin.role || ""}
          >
            <option>Select role</option>
            <option value="Admin">Admin</option>
          </Form.Select>

        <Button variant="danger" type="submit" className="w-100 fw-bold mt-3 ">
          Sigin
        </Button>
      </Form>
    </section>
  );
};
export default SiginPage;
