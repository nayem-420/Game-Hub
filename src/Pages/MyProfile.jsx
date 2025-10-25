import React, { useState } from 'react';
import { FaUserEdit } from 'react-icons/fa';
import { MdEmail, MdOutlinePhotoSizeSelectActual } from 'react-icons/md';
import photo from '../assets/person.png'
import Swal from 'sweetalert2';

const MyProfile = () => {
    const [isEditing, setIsEditing] = useState();
    const [userData, setUserData] = useState({
      name: "My Name",
      email: "my@name.com",
      photoUrl: photo,
    });
    const [formData, setFormData] = useState({
      name: userData.name,
      email: userData.email,
      photoUrl: userData.photoUrl,
    });
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    };
    const handleEdit = () => {
      setIsEditing(true);
      setFormData({
        name: userData.name,
        email: userData.email,
        photoUrl: userData.photoUrl,
      });
    };
    const handleCancel = () => {
      setIsEditing(false);
      setFormData({
        name: userData.name,
        email: userData.email,
        photoUrl: userData.photoUrl,
      });
    };
    const handleUpdate = () => {
      setUserData(formData);
      setIsEditing(false);
      Swal.fire({
        title: "Your Profile Update!",
        icon: "success",
        draggable: true,
      });
    };
    return (
      <div className="grid grid-cols-12 gap-5 my-5">
        {/* Left Part - Profile Display */}
        <div className="col-span-12 lg:col-span-4">
          <div className="flex flex-col bg-red-200 rounded-xl items-center justify-center p-4">
            <img
              src={userData.photoUrl}
              className="rounded-2xl w-20 h-20 object-cover"
              alt=""
            />
            <h1 className="font-bold text-xl mt-2">{userData.name}</h1>
            <p className="font-semibold">{userData.email}</p>
          </div>
        </div>

        {/* Right part - Profile Edit Form */}
        <div className="col-span-12 lg:col-span-8">
          <div className="hero bg-base-200 rounded-xl">
            <div className="hero-content flex-col w-full">
              <div className="flex items-center justify-between w-full">
                <h1 className="font-bold text-2xl">My Profile</h1>
                {!isEditing ? (
                  <button className="btn btn-primary" onClick={handleEdit}>
                    <FaUserEdit />
                    Edit Profile
                  </button>
                ) : (
                  <button className="btn btn-ghost" onClick={handleCancel}>
                    Cancel
                  </button>
                )}
              </div>

              <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
                <div className="card-body">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text flex items-center gap-2">
                        <FaUserEdit />
                        Name
                      </span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      className="input input-bordered"
                      placeholder="Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />

                    <label className="label mt-2">
                      <span className="label-text flex items-center gap-2">
                        <MdEmail />
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="input input-bordered"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />

                    <label className="label mt-2">
                      <span className="label-text flex items-center gap-2">
                        <MdOutlinePhotoSizeSelectActual />
                        Photo URL
                      </span>
                    </label>
                    <input
                      type="text"
                      name="photoUrl"
                      className="input input-bordered"
                      placeholder="Photo URL"
                      value={formData.photoUrl}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />

                    {isEditing && (
                      <button
                        className="btn btn-neutral mt-4"
                        onClick={handleUpdate}
                      >
                        Update Profile
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default MyProfile;