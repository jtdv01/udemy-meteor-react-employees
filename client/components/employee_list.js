import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const EmployeeList = (props) => {
  // console.log(props.employees);

  return(
    <div>
      <div className="employee-list">
        {props.employees.map(e => <EmployeeDetail key={e._id} />)}
      </div>
    </div>
  );
};

export default createContainer(() =>{
  // set up subscritpion
  Meteor.subscribe('employees');

  // return an object
  return{ employees: Employees.find({}).fetch() };
},EmployeeList);
