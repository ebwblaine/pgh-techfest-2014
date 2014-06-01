body.selectAll("p")
    .style("color", "#AAAAAA");

body.selectAll("p")
    .style("color", function(d, i) {
        return "hsl(" + Math.random() * 360 + ",100%,50%)";
    });
