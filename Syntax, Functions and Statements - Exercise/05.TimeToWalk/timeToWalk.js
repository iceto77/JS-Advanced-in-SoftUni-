function slove(steps, footprint, speed){
    let distanceM = steps * footprint;
    let breaks = Math.floor(distanceM / 500) * 60;
    let speedInMeters = speed * 1000 / 3600;
    let studentTime = (distanceM / speedInMeters) + breaks;
    let hours = Math.floor(studentTime / 3600).toFixed(0).padStart(2,'0');
    let minutes = Math.floor(studentTime / 60).toFixed(0).padStart(2,'0');;
    let seconds = (studentTime % 60).toFixed(0).padStart(2,'0');

    console.log(`${hours}:${minutes}:${seconds}`);
}

slove(4000, 0.60, 5);
slove(2564, 0.70, 5.5);