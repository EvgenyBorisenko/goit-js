const countTotalSalary = (salarys = {}) => {
  let totalSalary = 0;
  salarys = Object.values(salarys);
  for (const salary of salarys) {
    totalSalary += salary;
  }
  return totalSalary;
 };
 
 console.log(countTotalSalary({})); // 0
 
 console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
 ); // 330
 
 console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
 ); // 400