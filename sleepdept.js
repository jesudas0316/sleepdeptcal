const getSleepHours=day=>{
  switch(day){
    case 'monday':
        return 8;
        break;
    case 'tuesday':
         return 7;
         break;
     case 'wednesday':
        return 8;
        break;
     case 'thursday':
       return 9;
       break;
      case 'friday':
        return 8;
        break;
      case 'sat':
        return 8;
        break;
      case 'sunday':
        return 9;
        break;              
  }
}
getActualSleepHours=()=>
{



 return getSleepHours('monday')+getSleepHours('tuesday')+getSleepHours('wednesday')+getSleepHours('thursday')+getSleepHours('friday')+getSleepHours('sat')+getSleepHours('sunday');
  
  
}
const getIdealSleepHours=()=>
{
  const idealHours=7;
     return idealHours*7; 
}
const calculateSleepDept=()=>
{
const actualSleepHours=getActualSleepHours();
const idealSleepHours=getIdealSleepHours();
if(actualSleepHours===idealSleepHours)
{
  console.log("you got a perfect amount of sleep")
}
else if(actualSleepHours>idealSleepHours)
{
  console.log("you got more sleep than needed");
}  
else if(actualSleepHours< idealSleepHours)
{
  console.log('you got'+(idealSleepHours-actualSleepHours)+' hour(s) less sleep than you needed this week. Get some rest.');
}
else
{
  console.log('you need some rest')

}
}
calculateSleepDept();


