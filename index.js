const inquirer = require('inquirer');
const {viewAllEmp, viewEmpByDep, viewEmpByMngr, addEmp, upEmp} = require('./lib/employee');
const {viewDep, addRep} = require('./lib/department-methods');
const{viewRoles, addRole} = require('./lib/roles-methods');
const{addTotalByDep} = require('./lib/calculations');

// initial Prompt - Main Menu
const promptUser = () => {
    inquirer

    // Prompt the user
    .prompt([{
        type: 'list',
        name: 'beginChoices',
        message: 'What would you like to do? (Select one of the following)',
        choices: ['View All Employees', 'View All Employees By Department', 'View All Employees By Manager', 'Add Employee', 'Update Employee Role', 'View Departments', 'Add Department', 'View Roles', 'Add Roles', 'View Totalised Budget', 'I Am Finished']
    }])
    // Take the data and use switch statements to decide what to do per option
    .then((data) => {
        console.log('before switch');
        switch (data.beginChoices) {
            case 'View All Employees':
               // viewAllEmp();
                break;
            case 'View Employees By Department':
                //viewEmpByDep();
                break;
            case 'View All Employees By Manager':
               // viewEmpByMngr();
                break;
            case 'Add Employee':
               // addEmp();
                break;
            case 'Update Employee Role':
              //  upEmp();
                break;
            case 'View Departments':
               // viewDep();
                break;
            case 'Add Department':
               // addDep();
                break
            case 'View Roles':
               // viewRoles();
                break
            case 'Add Role':
               // addRole();
                break
            case 'View Totalised Budget':
              //  addTotalByDep();
                break;
            case 'I am finished':
                break;
            default:
                break;
        }
    })
    .catch((error) => {
        console.error('Error occured:', error);
    })
};

promptUser();

// You must export your module before you require module for the circular page being required
//module.exports = {promptUser}
