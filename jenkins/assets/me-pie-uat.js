

(async () => {
    const data = await fetch(
//        'http://vge-mktred-jen1.ukmkt.ad.ge.corp.local/assets/pie-data.json'
        'https://lisakalex.github.io/cdn/jenkins/assets/pie-data-uat.json'
    ).then(response => response.json());

 Highcharts.chart('container-uat', {
        chart: {
            type: 'pie'
        },
        title: {
            text: 'UAT Environment'
        },
        tooltip: {
            valueSuffix: '%'
        },
        subtitle: {
            text:
            'Source:<a href="http://vge-mktred-jen1.ukmkt.ad.ge.corp.local/apis.html" target="_default"> TGP</a>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: [{
                    enabled: true,
                    distance: 20
                }, {
                    enabled: true,
                    distance: -40,
                    format: '{point.percentage:.1f}%',
                    style: {
                        fontSize: '1.2em',
                        textOutline: 'none',
                        opacity: 0.7
                    },
                    filter: {
                        operator: '>',
                        property: 'percentage',
                        value: 10
                    }
                }]
            }
        },
        series: [
            {
                name: 'Percentage',
                colorByPoint: true,
                data: data
            }
        ]
    });
})();