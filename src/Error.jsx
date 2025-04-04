import React from "react";
import { CiWarning } from "react-icons/ci";

function ErrorPage({ err }) {
      const back = () => {
            window.history.back();
            setTimeout(() => {
                  window.location.reload();
            }, 300);
      };

      return (
            <div className="error-main d-flex justify-content-center align-items-center vh-100 bg-light text-center">
                  <div className="p-4 shadow rounded bg-white" style={{ maxWidth: "500px", width: "100%" }}>
                        <div className="mb-3">
                              <CiWarning size={48} color="red" className="me-2" />

                        </div>

                        <h3 className="text-danger mb-2">This page can’t be reached</h3>
                        <h5 className="text-muted">{err}</h5>

                        <p className="mt-3 fw-semibold">Try:</p>
                        <ul className="text-start mx-auto" style={{ maxWidth: "400px" }}>
                              <li>Checking your internet connection</li>
                              <li>Double-checking the URL</li>
                              <li>Exploring other places</li>
                              <li>Adding district name before the place in URL</li>
                        </ul>

                        <div className="d-flex justify-content-around mt-4">
                              <button className="btn btn-outline-secondary" onClick={back}>← Back</button>
                              <button className="btn btn-danger" onClick={() => window.location.reload()}>⟳ Reload</button>
                        </div>
                  </div>
            </div>
      );
}

export default ErrorPage;
