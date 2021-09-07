import React from 'react';
import { Link } from 'react-router-dom';
import './ServiceCard.css';

export default function ServiceCard(props) {
  const { _id, name, weight, price, photo } = props.item;

  return (

    <div className="">
      <div class="col">
        <div className="card mb-4 shadow" style={{ borderRadius: '10px' }}>
          <div className="d-flex text-center grow" style={{ paddingTop: "20px" }}>
            <div>
              <img src={photo} style={{ width: '50%' }} className="card-img-top" alt="Product Img" />
            </div>
          </div>
          <div className="d-flex text-center">
            <div className="card-body">
              <h6 style={{ fontWeight: '700', fontSize: '18px' }}>{name}</h6>
              <h5 style={{ paddingTop: '5px' }}>${price}</h5>
              <div className="d-flex justify-content-center">
                <button className="button"><Link style={{ textDecoration: 'none', color: 'white' }} to={`/dashboard/${_id}`}>Try it</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
