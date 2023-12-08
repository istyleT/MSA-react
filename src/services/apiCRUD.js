import Swal from "sweetalert2";
import {
  swalCreateSuccess,
  swalDeleteSuccess,
  swalEditSuccess,
  swalError,
} from "../utils/function/swalfire";
const APIKEY = process.env.REACT_APP_API_BASE_URL;

export async function apiDeleteFunction(_id, path) {
  try {
    const result = await Swal.fire({
      icon: "question",
      title: "ยืนยันการลบข้อมูล",
      text: `ID : ${_id}`,
      confirmButtonText: "ยืนยัน",
      showDenyButton: true,
      denyButtonText: "ยกเลิก",
    });
    if (result.isConfirmed) {
      const res = await fetch(`${APIKEY}${path}/${_id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
          authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
      });
      if (res.ok) swalDeleteSuccess();
      if (!res.ok) throw new Error();
    } else {
      return;
    }
  } catch (error) {
    swalError("ลบข้อมูลไม่สำเร็จ");
  }
}

export async function apiPutFunction(data, path) {
  try {
    const res = await fetch(`${APIKEY}${path}`, {
      method: "PUT",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(data),
    });
    const responseData = await res.json();
    if (res.ok) {
      swalEditSuccess(`ID : ${responseData.data.data._id}`);
    }
    if (!res.ok) {
      throw new Error();
    }
  } catch (error) {
    swalError("เเก้ไขข้อมูลไม่สำเร็จ");
  }
}

export async function apiPostFunction(data, path) {
  try {
    const res = await fetch(`${APIKEY}${path}`, {
      method: "POST",
      headers: {
        Accept: "application/form-data",
        "Content-Type": "application/json",
        authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(data),
    });
    const responseData = await res.json();
    if (res.ok) {
      swalCreateSuccess(`ID : ${responseData.data.data._id}`);
    }
    if (!res.ok) throw new Error();
  } catch (error) {
    swalError("บันทึกข้อมูลไม่สำเร็จ");
  }
}
