
//our "database"

let metrics =  {};

//functions to reset datastore every hour
function clearDatabase(){
    metrics = {}
}

function timeToLive() {
    setInterval(clearDatabase(), 1000 * 60 * 60);
}

//create a date
let tomorrow  = new Date();

//if we are on the strike of the hour, clear the database
if (tomorrow.getMinutes() === 0) {
    timeToLive()
} else {
    //find the difference between now and the end of the hour
    tomorrow.setHours(tomorrow.getHours() + 1);
    tomorrow.setMinutes(0);
    tomorrow.setSeconds(0);

    //call the time to live function on the end of the hour
    let difference = tomorrow - new Date();
    setTimeout(timeToLive, difference);
}



export default metrics;
