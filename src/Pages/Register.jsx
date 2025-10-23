import React from "react";
import banner1 from "../assets/banner-2.png";

const Register = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl text-white font-bold text-shadow-amber-600 text-shadow-lg">
            Register now!
          </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="name" className="input" placeholder="Enter Your Name" required />
              <label className="label">Email</label>
              <input type="email" className="input" placeholder="Enter Your Email" required />
              <label className="label">Photo URL</label>
              <input type="text" className="input" placeholder="photoURL" />
              <label className="label">Password</label>
              <input type="password" className="input" placeholder="Password" />
              <div>
                <a className="link link-hover">
                  Already Have an Account?{" "}
                  <span className="text-blue-700 font-bold underline">
                    Login
                  </span>
                </a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
