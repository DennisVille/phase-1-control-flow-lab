let greeting;
function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance< 400)
  {greeting = `This one is on me!`;
    return greeting;
  }
  else if(distance<2000)
  {greeting = `That will be twenty bucks.`;
    return greeting;
  }
  else if (distance<2500)
    {greeting =`I will gladly take your thirty bucks.`;
      return greeting;
    }
  else 
  {greeting=`No can do.`;
    return greeting;
  }
  
}
let city;
function ternaryCheckCity(city){
  // Write your code here!
  city=="NYC" ? greeting = `Ok, sounds good.` : greeting = `No go.`;
  return greeting;
}
let tip;
function switchOnCharmFromTip(tip){
  // Write your code here!
  switch(tip)
  {
    case "generous":
      greeting = `Thank you so much.`;
      return greeting;
      break;
    case "not as generous":
      greeting = "Thank you.";
      return greeting;
      break;
    default:
      greeting = `Bye.`;
      return greeting;
      break;
  }  
}