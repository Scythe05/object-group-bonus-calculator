const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];
// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

// Create loop over employees array and log result
for (let employee of employees) {
  console.log('Should get all employees', employee);
};

// Create function with one object parameter
function getBonus(employee){
  // return new object with listed properties
  let singleEmployee = ratingToBonus(employee);
  return singleEmployee;
};// End getBonus

// Create math function to determine rating to bonus percentage
function ratingToBonus(employeeObject){
  let bonusCalculation = 0;
  let singleEmployee = {name: employeeObject.name};
  if(employeeObject.reviewRating <= 2){
    singleEmployee.bonusPercentage = '0%';
    singleEmployee.totalCompensation = employeeObject.annualSalary;
    alert('No bonus for you!')

  } else if(employeeObject.reviewRating === 3){
      singleEmployee.bonusPercentage = '4%';
      //4% base annual income as bonus
      bonusCalculation = employeeObject.annualSalary*.04;
      singleEmployee.totalCompensation = employeeObject.annualSalary + bonusCalculation;

  } else if(employeeObject.reviewRating === 4){
      singleEmployee.bonusPercentage = '6%';
      bonusCalculation = employeeObject.annualSalary*.06;
      //singleEmployee.totalCompensation = employeeObject.annualSalary + bonusCalculation;
      //6% base annual income as bonus

  } else if(employeeObject.reviewRating === 5){
      singleEmployee.bonusPercentage = '10%';
      bonusCalculation = employeeObject.annualSalary*.1;
      //singleEmployee.totalCompensation = employeeObject.annualSalary + bonusCalculation;
      //10% base annual income as bonus
  };
  
  if(salary > 65000 && ){
    bonusCalculation -= .09;
  }
  return singleEmployee;
};// end ratingToBonus
console.log('trial run', getBonus(employees[0]));
console.log('trial run', getBonus(employees[3]));
console.log('trial run', getBonus(employees[1]));
console.log('trial run', getBonus(employees[2]));
console.log('trial run', getBonus(employees[4]));







// getBonus(employees[0])

//console.log( employees );
