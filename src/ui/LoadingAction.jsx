export default function LoadingAction() {
  return (
    <div
      className="bg-transparent position-fixed top-0 start-0"
      style={{
        width: 100 + "vw",
        height: 100 + "vh",
        backdropFilter: "blur(10px)",
        zIndex: 3,
      }}
    >
      <div className="d-flex align-items-center justify-content-center position-absolute top-50 start-50 translate-middle ">
        <h4 className="fw-bold me-1 font-monospace d-flex align-items-end justify-content-center">
          Loading...
        </h4>
        <div
          className="spinner-grow text-danger d-flex align-items-start justify-content-center"
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  );
}
