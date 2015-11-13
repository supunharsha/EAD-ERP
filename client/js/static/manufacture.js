

$(function () {
    $('#diltainer').highcharts({
        chart: {
            type: 'column',
            margin: 75,
            options3d: {
                enabled: true,
                alpha: 10,
                beta: 25,
                depth: 70
            }
        },
        title: {
            text: 'Last Month Total Manufacturing'
        },
        subtitle: {
            text: 'Values are displayed in 100 scale'
        },
        plotOptions: {
            column: {
                depth: 25
            }
        },
        xAxis: {
            categories: Highcharts.getOptions().lang.shortMonths
        },
        yAxis: {
            title: {
                text: "units"
            }
        },
        series: [{
            name: 'type E205',
            data: [5, 7,5, null, 10, 8, 11, 4, 6, 2] },
           { name: 'type E5205',
            data: [4,8,1,9,5,9,2,7,2,null]},
            { name: 'type E4078',
            data: [8,5,1,9,8,4,1,10,5,1]}
          ]
    });
});