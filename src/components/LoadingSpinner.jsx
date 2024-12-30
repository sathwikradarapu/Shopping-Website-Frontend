import "bootstrap/dist/css/bootstrap.min.css";
const LoadingSpinner = () => (
  <div className="loading-spinner-container d-flex flex-row justify-content-center mt-5">
    <div className="spinner-border text-primary" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default LoadingSpinner;
