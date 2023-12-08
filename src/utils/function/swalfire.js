import Swal from "sweetalert2";

export async function swalError(text) {
  await Swal.fire({
    title: "Error",
    text: `${text}`,
    position: "center",
    icon: "error",
    confirmButtonText: "OK",
  });
}

export async function swalDeleteSuccess() {
  await Swal.fire({
    toast: true,
    title: `ลบข้อมูลสำเร็จ`,
    position: "top-end",
    icon: "success",
    showConfirmButton: false,
    timer: 2000,
  });
}

export async function swalEditSuccess(text) {
  await Swal.fire({
    toast: true,
    title: `เเก้ไขข้อมูลสำเร็จ`,
    text: `${text}`,
    position: "top-end",
    icon: "success",
    showConfirmButton: false,
    timer: 2000,
  });
}

export async function swalCreateSuccess(text) {
  await Swal.fire({
    toast: true,
    title: `เพิ่มข้อมูลสำเร็จ`,
    text: `${text}`,
    position: "top-end",
    icon: "success",
    showConfirmButton: false,
    timer: 2000,
  });
}
