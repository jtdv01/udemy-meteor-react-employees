import _ from 'lodash'; // _ is a valid variable in js
import { Meteor } from 'meteor/meteor';
import { Employees } from '../imports/collections/employees';
import { image, helpers } from 'faker';

Meteor.startup(() => {
  // code to run on server at startup
  const numberRecords = Employees.find({}).count();
  console.log(numberRecords);

  if(!numberRecords){
    // call the arrow function 5000 times
    _.times(5000, () => {
      const {name, email, phone} = helpers.createCard();
      Employees.insert({
        name,email,phone,
        avatar: image.avatar()
      });
    });
  }

  Meteor.publish("employees",function(per_page){
    return Employees.find({},{limit: per_page});
  })

});
