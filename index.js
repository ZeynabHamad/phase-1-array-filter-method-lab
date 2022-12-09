// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']


function findMatching(drivers,driver){


    const result= drivers.filter(function(user){
        return (user.toLowerCase() === driver.toLowerCase());
    })
    return result;
} 

findMatching(drivers,'Bobby');

function  fuzzyMatch(drivers,str){
   
 const result = drivers.filter(function (num) {
        return (num.startsWith(str));
      });

return result;
}

const driver = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

  function matchName(drivers,user){
    const result= drivers.filter(function(driver){
        return (driver.name=== user);
    })
    return result;
  }

fuzzyMatch(drivers,'sa');