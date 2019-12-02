// function buildMetadata(sample) {
//     var url=`/metadata/${sample}`;
//     d3.json(url).then(function(data){
//         var data = [
//             {
//                 domain: { x: [0, 9], y: [0, 1] },
//                 value: 270,
//                 title: { text: "Belly Button Washing Frequency" },
//                 type: "indicator",
//                 mode: "gauge+number"
//             }
//         ];
        
//         var layout = { width: 600, height: 500, margin: { t: 0, b: 0 } };
//         Plotly.newPlot('myDiv', data, layout);
//          buildGauge(data.WFREQ);
//     });
// }
