import React from 'react';
// import { createContainer } from 'meteor/react-meteor-dom';
// import { Employees } from '../../imports/collections/employees';


const EmployeeDetail = ({employee}) =>{
  const {name,email,phone,avatar} = employee

  return(
    <div className="thumbnail">
      <img src={avatar} alt=""/>
      <div className="caption">
        <h3>{name}</h3>
        <ul className="list-group">
          <li className="list-group-item">Email: {email}</li>
          <li className="list-group-item">Phone: {phone}</li>
        </ul>
      </div>
    </div>
  );
};

export default EmployeeDetail;
