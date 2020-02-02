const getTimes = () => {
  let times = {}

  d3.csv("crime.csv").then(function(data) {
    data.forEach(data => {
      let time = data["Possible Time"]
      roundedTime = roundToNearestHalfHour(time)
      if (invalidTime(roundedTime)) {
        return
      }
      if (times.hasOwnProperty(roundedTime)) {
        times[roundedTime]++
      } else {
        times[roundedTime] = 1
      }
    })
  }).then(function() {
    console.log(times)
  });
}

const invalidTime = (time) => {
  return (time.length !== 4) || (time > 2400) || (time < 0000)
}

const roundToNearestHalfHour = (time) => {
  if ((time.slice(-2) - 15) > 0 && (time.slice(-2) - 15) < 30) {
    return `${time.slice(0, 2)}30`
  }
  return `${time.slice(0, 2)}00`
}
