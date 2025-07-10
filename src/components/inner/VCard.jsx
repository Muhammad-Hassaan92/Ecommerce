import React from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import navigate

const VCard = (props) => {
  const navigate = useNavigate(); // ✅ Initialize navigate

  return (
    <div className="col-md-4 col-sm-6 col-12 my-2 d-flex justify-content-center">
      <div className="card shadow" style={{ width: "24rem", height: "90vh" }}>
        <div style={{ width: "24rem", height: "50vh" }}>
          <img src={props.image} className="w-100 h-100 object-fit-cover" alt="Image" />
        </div>
        <div className="card-body">
          <h1 className="fs-4 fw-bolder px-3">{props.title} {props.id}</h1>
          <p className="px-3">{props.des}</p>
          <div className="py-1 px-3 fs-5">
            <i className="fa-solid fa-star text-danger"></i>
            <i className="fa-solid fa-star text-danger"></i>
            <i className="fa-solid fa-star text-danger"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>
          <div className="row">
            <p className="col-6 px-4 d-flex align-items-center">COLORS</p>
            <p className="col-6 px-4 text-end fw-bolder fs-4">{props.price}$</p>
          </div>
          <div className="px-3 fs-5">
            <i className="fa-solid fa-circle text-warning mx-1"></i>
            <i className="fa-solid fa-circle text-danger mx-1"></i>
            <i className="fa-solid fa-circle text-primary mx-1"></i>
          </div>
          <div className="d-flex align-items-center justify-content-center py-3">
            <button
              type="button"
              className="btn btn-success w-100 mx-3"
              onClick={() => navigate(`/products/${props.id}`)}
            >
              SHOP NOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VCard;
