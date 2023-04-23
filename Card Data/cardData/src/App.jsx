import React, { useState } from "react";
import userData from "./userData.json";

const Card = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState(userData.name);
  const [phoneNumber, setPhoneNumber] = useState(userData.phoneNumber);
  const [address, setAddress] = useState(userData.address);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Save data to JSON file or database
  };

  const handleReset = () => {
    setName(userData.name);
    setPhoneNumber(userData.phoneNumber);
    setAddress(userData.address);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>User Information</h2>
        <button onClick={handleEdit}>Edit</button>
      </div>
      <div className="card-body">
        {isEditing ? (
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label>Phone Number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <label>Address:</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <p>Name: {name}</p>
            {/* <p>Phone Number: {phoneNumber}</p>
            <p>Address: {address}</p> */}
          </div>
        )}
      </div>
      {isEditing && (
        <div className="card-footer">
          <button onClick={handleSave}>Save</button>
          <button onClick={handleReset}>Reset</button>
        </div>
      )}
    </div>
  );
};

export default Card;
