console.log('JS ready');

$(readyNow);
function readyNow(){
    console.log('JQ ready')
    $('#submitBtn').on('click', addEmployee);
}

let employeeArray = [];

//function to create a new object from info in input field
//and push to a new array
function addEmployee () {
    console.log('in addEmployee function');
    
    let employee = {
        firstName : $('#firstName').val(),
        lastName : $('#lastName').val(),
        ID : $('#ID').val(),
        title : $('#title').val(),
        annuaSalary : $('#annualSalary').val()
    }//end employeeObject
    employeeArray.push(employee);
    console.log(employee);
    console.log(employeeArray);
}//end addEmployee function

