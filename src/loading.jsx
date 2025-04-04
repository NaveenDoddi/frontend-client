import React from "react";

function Loading({ message = "Loading..." }) {
  return (
    <div className="d-flex justify-content-center mt-3 bg-light">
      <div className="text-center">
        <div className="spinner-border text-yellow mb-3" role="status">
          <span className="visually-hidden">{message}</span>
        </div>
        <div className="fw-semibold text-muted">{message}</div>
      </div>
    </div>
  );
}

export default Loading;
