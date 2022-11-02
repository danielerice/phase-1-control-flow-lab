function scuberGreetingForFeet(someNumber){
  
  if (someNumber <= 400){
      return `This one is on me!`;
    
    } else if (someNumber > 400 && someNumber <= 2000){
      return `That will be twenty bucks.`;
    
    } else if (someNumber > 2500) {
      return `No can do.`;
    
    } else if (someNumber > 2000){
      return `I will gladly take your thirty bucks.`;
    }


}

function ternaryCheckCity(someCity){
   return someCity === `NYC` ? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(theTip){
    switch (theTip){
      case "generous":
        return "Thank you so much.";
        break;
      case 'not as generous':
        return "Thank you.";
        break;
      case 'thanks for everything':
        return "Bye."
        break;
      }
}