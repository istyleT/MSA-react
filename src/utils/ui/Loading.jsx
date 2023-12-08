export default function Loading() {
  return (
    <div className="w-100 h-100 d-flex justify-content-center align-items-center">
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
