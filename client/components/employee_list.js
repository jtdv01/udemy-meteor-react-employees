import React from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import { Employees } from '../../imports/collections/employees';
import EmployeeDetail from './employee_detail';

const PER_PAGE = 20;

class EmployeeList extends React.Component{

  componentWillMount(){
    this.page = 1;
  }

  handleButtonClick(){
    Meteor.subscribe('employees',PER_PAGE * (this.page + 1) ); // loads the first 40
    this.page += 1;
  }

  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <div className="employee-list">
          {this.props.employees.map(e => <EmployeeDetail key={e._id} employee={e}/>)}
        </div>

        <button onClick={this.handleButtonClick.bind(this)}
          className="btn btn-primary">Load moar...
        </button>

      </div>
    );
  }
};

export default createContainer(() =>{
  // set up subscritpion
  Meteor.subscribe('employees',PER_PAGE);

  // return an object
  return{ employees: Employees.find({}).fetch() };
},EmployeeList);
