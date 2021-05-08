//TODO, remove for production
function SetTime(date)
{
  let localTime = new Date(date);
  localHour = localTime.getHours();
}

//Avoid 3.4-1.6 = 1.79999999999
function javascriptRound(num)
{
  return Math.round(num*100000000)/100000000;
}
