$(function () {
    $('#piechart').highcharts({
        chart: {
            type: 'pie',
            options3d: {
                enabled: true,
                alpha: 45,
                beta: 0
            }
        },
        title: {
            text: 'Cost Allocation in Last Month'
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                depth: 35,
                dataLabels: {
                    enabled: true,
                    format: '{point.name}'
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'piechart',
            data: [
                ['Raw Materials', 45.0],
                ['Employee Wages', 26.8],
                {
                    name: 'Fixed Cost',
                    y: 12.8,
                    sliced: true,
                    selected: true
                },
                ['Dynamic Cost', 8.5],
                ['Administration cost', 6.2],
                ['Depriciation', 0.7]
            ]
        }]
    });
});