function basicTeenager(age) {
teen = age < 20 && age > 12
if (age) {
  return "You are a teenager!"
}
}

function teenager(age) {
teen = age < 20 && age > 12
if (age) {
  return "You are a teenager!"
} else {
  return "You are not a teenager"
}
}

function ageChecker(age) {
teen = age < 20 && age > 12
younge = age < 12
if (teen){
  return "You are a teenager!"
} else if (younge){
  return "You are a kid"
} else {
  return "You are a grownup"
}
}

function ternaryTeenager(age) {
return Age > 12 && Age < 20 ? "You are a teenager" : "You aren't a teenager"
}

function switchAge(age) {
switch(age)
case 13:
return "You are a teenager"
break;
case 14:
return "You are a teenager"
break;
case 15:
return "You are a teenager"
break;
case 16:
return "You are a teenager"
break;
case 17:
return "You are a teenager"
break;
case 18:
return "You are a teenager"
break;
case 19:
return "You are a teenager"
break;
default:
return "You have an age"
}
