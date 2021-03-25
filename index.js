function scuberGreetingForFeet(distance){
  if(distance <= 400){
    return "This one is on me!"
  } else if(distance > 2000){
     return  "I will gladly take your thirty bucks."
  }else if (distance >= 2500){
    return "No can do."
  }
  
}
function ternaryCheckCity(){
  // Write your code here! 
}

function switchOnCharmFromTip(){
  // Write your code here!
}

function size(number){
  if(number < 10){
    return "small"
  } else if(number > 10 && number < 20){
    return "medium"
  } else {
    return "large"
  }
}

const result = size(15)