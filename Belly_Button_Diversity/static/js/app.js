// Function that builds the metadata panel
function buildMetadata(sample) {
    var url=`/metadata/${sample}`;
    d3.json(url).then(function(data){
    var metadata=d3.select('#sample-metadata');
    metadata.html("");
    Object.entries(data).forEach(function([key, value]){
        metadata.append('p').text(`${key}:${value}`);
        });
    });
};

//Function to build charts (Pie, Bubble) for selected sample
//Pie chart for first 10 data points
function buildCharts(sample) {
  var url=`/samples/${sample}`;
  d3.json(url).then(function(item){
    var data=[{
      "values":item.sample_values.slice(0,10),
      "labels":item.otu_ids.slice(0,10),
      "type": "pie"
    }];
     Plotly.plot("pie",data);

//Bubble Chart 
var trace1 = {
  x: item.otu_ids,
  y: item.sample_values,
  text: item.otu_labels,
  mode: 'markers',
  marker: {
    color: item.otu_ids,
    size: item.sample_values,
    colorscale: 'Rainbow',
  }
};
var data = [trace1];
var layout = {
  title: 'OTU ID',
  showlegend: false
}; 
Plotly.newPlot('bubble', data, layout);
    });
}

// Function to initialize the dashboard
function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("/names").then((sampleNames) => {
    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    const firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildCharts(newSample);
  buildMetadata(newSample);
}

// Initialize the dashboard
init();
