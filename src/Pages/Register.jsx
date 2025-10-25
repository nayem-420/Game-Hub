import React, {  useContext, useState } from "react";
import banner1 from "../assets/banner-2.png";
import { Link, useNavigate } from "react-router";
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeClosed } from "react-icons/lu";
import { FaRegFolderOpen } from "react-icons/fa";
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import { toast } from "react-toastify";
import { AuthContext } from "../Context/AuthContext";

const Register = () => {

    const {
      createUserWithEmailAndPasswordfunc,
      updateProfilefunc,
        sendEmailVarificationfunc,signOutWithUserFunc,
      setUser,
    } = useContext(AuthContext);

    const [show, setShow] = useState(false);
    const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL?.value;
      const password = form.password.value;
      
      

    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must contain at least 6 characters, one uppercase, one lowercase, one number, and one special character."
      );
      return;
    }

    createUserWithEmailAndPasswordfunc(email,password)
      .then((res) => {
        updateProfilefunc(
          displayName,
          photoURL,
        )
          .then(() => {
            sendEmailVarificationfunc()
              .then((res) => {
                  signOutWithUserFunc().then(() => {
                      toast.success("signOut Successfully");
                  })
                  setUser(null);
                  navigate('/login')
              })
              .catch((e) => {
                toast.error(e.message);
              });
          })
          .catch((e) => {
            toast.error(e.message);
          });
        toast.success("Registration Done");
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${banner1})` }}
    >
      <div className="hero-content flex-col">
        <div className="text-center">
          <h1 className="text-5xl text-white font-bold text-shadow-amber-600 text-shadow-lg">
            Create an Account
          </h1>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleRegister}>
              <fieldset className="fieldset">
                <label className="label">Name</label>
                <input
                  type="name"
                  name="name"
                  className="input placeholder-black/30 focus:outline-1 focus:ring-2"
                  placeholder="Enter Your Name"
                  required
                />
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input placeholder-black/30 focus:outline-1 focus:ring-2"
                  placeholder="Enter Your Email"
                  required
                />
                <label className="label">Password</label>
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  className="input placeholder-black/30 focus:outline-1 focus:ring-2"
                  placeholder="Password"
                />
                <span
                  onClick={() => setShow(!show)}
                  className="absolute right-[50px] top-[208px] cursor-pointer z-50"
                >
                  {show ? <IoEyeOutline /> : <LuEyeClosed />}
                </span>
                <label className="label">Photo</label>
                <input
                  type="text"
                  name="photo"
                  className="input placeholder-black/30 focus:outline-1 focus:ring-2"
                  placeholder="Choose Photo"
                  required
                />
                <p className="text-xs text-gray-500 mt-1">
                  Select your profile picture
                </p>

                <div>
                  <div className="link link-hover">
                    Already Have an Account?{" "}
                    <Link
                      to="/login"
                      className="text-blue-700 font-bold underline"
                    >
                      Login
                    </Link>
                  </div>
                </div>
                <button type="submit" className="btn btn-neutral mt-4">
                  Register
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
