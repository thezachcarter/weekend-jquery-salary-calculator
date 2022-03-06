console.log('JS ready');

$(readyNow);

function readyNow() {
    console.log('JQ ready')
    $('#submitBtn').attr('disabled', true);
    $('#firstName').on('input',readyBtn);
    $('#lastName').on('input', readyBtn);
    $('#annualSalary').on('input', readyBtn);
    $('#submitBtn').on('click', addEmployee)
    $('#tbody').on('click', '.deleteBtn', removeEmployee);
}

let employeeArray = [];
let totalSalary = 0;

//function to create a new object from info in input field,
//push to a new array, display on DOM
function addEmployee() {
    console.log('in addEmployee function');

    let employee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        ID: $('#ID').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val()
    } //end employeeObject

    //variable with comma divided salary 
    let salNumber = Number(employee.annualSalary).toLocaleString();
    console.log(salNumber);

    employeeArray.push(employee);
    $('#tbody').prepend(`           
        <tr data-sal="${employee.annualSalary}">
            <td>${employee.firstName}</td>
            <td>${employee.lastName}</td>
            <td>${employee.ID}</td>
            <td>${employee.title}</td>
            <td class="salary">$${salNumber}</td>
            <td><button class="deleteBtn btn btn-secondary">Delete</button></td>
        </tr>`)
    console.log(employee);
    console.log(employeeArray);
    sumSalary(employee);
    //clear inputs
    $('#firstName').val('');
    $('#lastName').val(''),
    $('#ID').val(''),
    $('#title').val(''),
    $('#annualSalary').val('')

    //reset submit button
    $('#submitBtn').attr('disabled', true);
} //end addEmployee function

//function to sum and display salaries, change salary display to red if budget exceeded
function sumSalary(employee) {
    console.log('in sumSalary function');
    totalSalary += Math.round(Number(employee.annualSalary) / 12);
    console.log(totalSalary);
    $('#totalSalary').text('');
    $('#totalSalary').text('$' + totalSalary.toLocaleString());
    if (totalSalary > 20000) {
        $('.footerText').addClass('redFooter');
        alert('You have exceeded the monthly salary budget.')
    }
} //end sumSalary function

//function to remove employee info from DOM, revert red footer to blue
function removeEmployee() {
    console.log('in removeEmployee function');
    let subSalary = Number($(this).closest('tr').data('sal'));
    totalSalary -= Math.round(subSalary / 12);
    console.log('Subtracted Salary: ', subSalary);
    $('#totalSalary').text('');
    $('#totalSalary').text('$' + totalSalary.toLocaleString());
    console.log(totalSalary);
    $(this).closest('tr').remove();
    if (totalSalary <= 20000) {
        $('.footerText').removeClass('redFooter');
    }
} //end removeEmployee function

//function to enable submit button once required fields receive input
function readyBtn() {
    console.log('in readyBtn function');
    console.log($('#firstName').val());
    console.log($('#lastName').val());
    console.log($('#annualSalary').val()); 
    if ( $('#firstName').val()>'' && $('#lastName').val()>'' && $('#annualSalary').val()>'' ){
        console.log('button check')
        $('#submitBtn').attr('disabled', false);
    }//end if
}//end readyBtn function
