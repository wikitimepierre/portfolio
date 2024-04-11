import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import userInfo from '../../app/features/user/userSlice';

function Edit() {
  const email = (useSelector((state) => state.userInfo.email) ?? "").toString();
  const firstName = (useSelector((state) => state.userInfo.firstName) ?? "").toString();
  const lastName = (useSelector((state) => state.userInfo.lastName) ?? "").toString();
  const userName = (useSelector((state) => state.userInfo.userName) ?? "").toString();

  const navigate = useNavigate();
  const separator = <span> </span>;

  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(userInfo({ email: email, userName: userName, firstName: firstName, lastName: lastName }));
    navigate('/2-Bank/user');
  }

  return (
    <div className="main bg-dark sign-in-content">
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" defaultValue={userName} />
        </div>
        <div className="input-wrapper">
          <label htmlFor="firstname">First Name</label>
          <input type="text" id="firstName" defaultValue={firstName} disabled />
        </div>
        <div className="input-wrapper">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" id="lastName" defaultValue={lastName} disabled />
        </div>
        <button className="edit-button" onClick={handleSave}>Save</button>{separator}
        <button className="edit-button" onClick={() => navigate('/2-Bank/user')}>Cancel</button>
      </form>
    </div>
  );
}

export default Edit;