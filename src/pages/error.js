import React from "react";
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <>
      <div className='row errorPage' >
        <div className='col-12'>
          404 PAGE NOT FOUND
        </div>
        <Link to='/' style={{ textDecoration: "none" }}>
        <p> BACK TO HOME PAGE </p>
        </Link>
      </div>
    </>
  );
}
