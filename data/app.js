// building horizontal bar chart
function buildCharts(sample) {
    d3.json('samples.json').then((data) => {

        //create data array for bar plot
        var data = [trace];

        //define the plot layout
        var layout = {
            autosize: false,
            height: 800,
            width: 450,
            margin: {
                l: 100,
                r: 10,
                b: 20,
                t: 30,
                pad: 0
            },
            font: {
                size: 18,
                weight: 'bold'
            },
            yaxis: {
                autorange: 'reversed',
            },

            config: {
                'displayModeBar': true
            },
        };
        
        Plotly.newPlot("bar-plot", data, layout);
    });
};
