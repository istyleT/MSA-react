// const API_URL = "https://servermsasalecar-ce20833080b1.herokuapp.com";
import Swal from "sweetalert2";
const API_URL = "http://localhost:4000";

export async function apiPostFunction(data, path) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "POST",
    headers: {
      Accept: "application/form-data",
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    const responseData = await res.json();
    await Swal.fire({
      title: `${responseData.message}`,
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
    return;
  }
  if (!res.ok) throw new Error("บันทึกข้อมูลไม่สำเร็จ");
  return;
}

export async function apiDeleteFunction(data, path) {
  const result = await Swal.fire({
    title: "ลบข้อมูล",
    text: `ลบข้อมูล ID » ${data.id}`,
    icon: "question",
    confirmButtonText: "ยืนยัน",
    showDenyButton: true,
    denyButtonText: "ยกเลิก",
  });
  if (result.isConfirmed) {
    const res = await fetch(`${API_URL}${path}`, {
      method: "DELETE",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      const responseData = await res.json();
      await Swal.fire({
        title: `${responseData.message}`,
        icon: "success",
        showConfirmButton: false,
        timer: 2000,
      });
      return;
    }
    if (!res.ok) throw new Error("ลบข้อมูลไม่สำเร็จ");
  } else {
    return;
  }
}

export async function apiPutFunction(data, path) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "PUT",
    headers: {
      Accept: "application/form-data",
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
    body: JSON.stringify(data),
  });
  if (res.ok) {
    const responseData = await res.json();
    await Swal.fire({
      title: `${responseData.message}`,
      icon: "success",
      showConfirmButton: false,
      timer: 2000,
    });
    return;
  }
  if (!res.ok) throw new Error("เเก้ไขข้อมูลไม่สำเร็จ");
  return;
}

export async function apiGetFunction(path) {
  const res = await fetch(`${API_URL}${path}`, {
    method: "GET",
    headers: {
      Accept: "application/form-data",
      "Content-Type": "application/json",
      authorization: "Bearer " + localStorage.getItem("accessToken"),
    },
  });
  if (res.ok) {
    const data = await res.json();
    return data;
    // return Promise.resolve(data);
  }
  if (!res.ok) throw new Error("Data fetching failed");
}
