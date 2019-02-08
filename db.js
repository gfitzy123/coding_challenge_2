
//our "database"

let metrics =  {};

//functions to reset datastore every hour
let clearDatabase = function() {
    console.log('Clearing database.')
    metrics = {}
}

let timeToLive = function() {
    //this will set the database to clear at every interval (hour)
    clearDatabase()
    let d = new Date();
    let n = d.toLocaleTimeString();
    let hourInMilliseconds = 1000 * 60 * 60

    console.log('Will clear database in: ', hourInMilliseconds, '..milliseconds.')
    setInterval(function(){ clearDatabase() },  hourInMilliseconds);
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
    console.log('Setting TTL on database to..', difference)
    setTimeout(function(){ timeToLive() }, difference);
    //setTimeout(function(){ timeToLive() }, differnece);
}



export default metrics;
