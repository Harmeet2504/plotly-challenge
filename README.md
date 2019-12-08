# Plotly.js Challenge - Belly Button Biodiversity

An interactive dashboard is built to explore the [Belly Button Biodiversity DataSet](http://robdunnlab.com/projects/belly-button-biodiversity/) using plotly.js and the app is deployed on heroku.Follow the link: https://new-belly-app.herokuapp.com

## Step 1 - Plotly.js

 Plotly.js is used to build interactive charts for the dashboard.

*  A PIE chart is created that uses data from samples route (`/samples/<sample>`) to display the top 10 samples.

  * `sample_values`is used as the values for the PIE chart.

  *  `otu_ids`is used as the labels for the pie chart.

  *  `otu_labels`is used as the hovertext for the chart.

* A Bubble Chart is created that uses data from samples route (`/samples/<sample>`) to display each sample.

  * `otu_ids`is used for the x values.

  *  `sample_values` is used for the y values.

  *  `sample_values`is used for the marker size.

  *  `otu_ids`is used for the marker colors.

  * `otu_labels`is used for the text values.


* The sample metadata is displayed from the route `/metadata/<sample>`

  * Each key/value pair is displayed from the metadata JSON object somewhere on the page.

* All of the plots are updated any time that a new sample is selected.


## Step 2 - Heroku

 Flask app is deployed to Heroku using sqlite file for the database.



## Hints

* Don't forget to `pip install -r requirements.txt` before you start your server.

* Use `console.log` inside of your JavaScript code to see what your data looks like at each step.

* Refer to the [Plotly.js Documentation](https://plot.ly/javascript/) when building the plots.

- - -

