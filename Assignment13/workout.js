function workoutSession(input){
    let [time, AmPm]=input.trim().split(" ");
    let [hours, min]=time.split(":").map(Number);
    if(AmPm==="PM" && hours!==12)
    {
        hours += 12;
    }
    if(AmPm==="AM" && hours===12)
    {
        hours=0;
    }
    let totalMinutes=hours*60 + min;
    if(totalMinutes> 5*60 && totalMinutes<= 9*60)
        return "cardio session";
    else if(totalMinutes> 9*60 && totalMinutes<= 12*60)
        return "strength training";
    else if(totalMinutes> 12*60 && totalMinutes<= 17*60)
        return "yoga and flexibility";
    else if(totalMinutes> 17*60 && totalMinutes<= 20*60)
        return "high-intensity interval training";
    else
        return "light stretching and cool down";
}

console.log(workoutSession("9:10 PM"));