const getCount = () => {
  let crimes = {}

  d3.csv("crime.csv").then(function(data) {
    data.forEach(data => {
      if (crimes.hasOwnProperty(data["UCR Literal"])) {
        crimes[data["UCR Literal"]]++
      } else {
        crimes[data["UCR Literal"]] = 1
      }
    })
  }).then(function() {
    for (const [key, value] of Object.entries(crimes)) {
      let width = `${value / 200}px`
      addGraph(key, width)
    }
  });
}

const addGraph = (title, width) => {
  d3.select(".chart").append("div")
    .style("width", width)
    .text(title);
};
