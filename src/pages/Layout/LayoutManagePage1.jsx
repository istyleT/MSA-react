export default function LayoutManagePage1({ children }) {
  return (
    <section
      className="position-relative w-100 py-2 d-flex flex-column align-items-center"
      style={{ maxWidth: 1000 + "px" }}
    >
      {children}
    </section>
  );
}
