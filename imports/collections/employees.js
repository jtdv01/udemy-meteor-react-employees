import { Mongo } from 'meteor/mongo';

// Expecting to export other variables in the future
// so don't export default
export const Employees = new Mongo.Collection('employees');
