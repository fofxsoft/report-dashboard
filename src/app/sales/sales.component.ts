import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-sales',
    templateUrl: './sales.component.html',
    styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {
    bar: object;
    pie: object;
    trend: object;

    change: number = 28;
    goal: number = 12;
    revenue: number = 258456;

    constructor() { }

    ngOnInit() {
        this.bar = {
            chart: {
                caption: 'Top Customers',
                subCaption: 'Top 5 customers by revenue',
                numberPrefix: '$',
                theme: 'zune'
            },
            data: [{
                label: 'Nick\'s 3RD Ave',
                value: '880000'
            }, {
                label: 'Wilbur\'s Total Beverage',
                value: '730000'
            }, {
                label: 'King Super\'s',
                value: '590000'
            }, {
                label: 'Dicsount Liquor',
                value: '520000'
            }, {
                label: 'Liquor Supermart',
                value: '330000'
            }]
        };

        this.pie = {
            chart: {
                caption: 'Sales by Area',
                subcaption: 'Top sales by area this year',
                startingangle: '120',
                showlabels: '0',
                showlegend: '1',
                enablemultislicing: '0',
                slicingdistance: '15',
                showpercentvalues: '1',
                showpercentintooltip: '0',
                numberPrefix: '$',
                plottooltext: 'Area : $label Total : $datavalue',
                theme: 'zune'
            },
            data: [{
                label: 'North',
                value: '1250400'
            }, {
                label: 'South',
                value: '1463300'
            }, {
                label: 'East',
                value: '1050700'
            }, {
                label: 'West',
                value: '491000'
            }]
        };

        this.trend = {
            chart: {
                caption: 'Actual Revenues, Targeted Revenues & Profits',
                subcaption: 'Last year',
                xaxisname: 'Month',
                yaxisname: 'Amount (In USD)',
                numberprefix: '$',
                theme: 'zune',
            },
            categories: [{
                category: [{
                    label: 'Jan'
                }, {
                    label: 'Feb'
                }, {
                    label: 'Mar'
                }, {
                    label: 'Apr'
                }, {
                    label: 'May'
                }, {
                    label: 'Jun'
                }, {
                    label: 'Jul'
                }, {
                    label: 'Aug'
                }, {
                    label: 'Sep'
                }, {
                    label: 'Oct'
                }, {
                    label: 'Nov'
                }, {
                    label: 'Dec'
                }]
            }],
            dataset: [{
                seriesname: 'Actual Revenue',
                data: [{
                    value: '16000'
                }, {
                    value: '20000'
                }, {
                    value: '18000'
                }, {
                    value: '19000'
                }, {
                    value: '15000'
                }, {
                    value: '21000'
                }, {
                    value: '16000'
                }, {
                    value: '20000'
                }, {
                    value: '17000'
                }, {
                    value: '25000'
                }, {
                    value: '19000'
                }, {
                    value: '23000'
                }]
            }, {
                seriesname: 'Projected Revenue',
                renderas: 'line',
                showvalues: '0',
                data: [{
                    value: '15000'
                }, {
                    value: '16000'
                }, {
                    value: '17000'
                }, {
                    value: '18000'
                }, {
                    value: '19000'
                }, {
                    value: '19000'
                }, {
                    value: '19000'
                }, {
                    value: '19000'
                }, {
                    value: '20000'
                }, {
                    value: '21000'
                }, {
                    value: '22000'
                }, {
                    value: '23000'
                }]
            }, {
                seriesname: 'Profit',
                renderas: 'area',
                showvalues: '0',
                data: [{
                    value: '4000'
                }, {
                    value: '5000'
                }, {
                    value: '3000'
                }, {
                    value: '4000'
                }, {
                    value: '1000'
                }, {
                    value: '7000'
                }, {
                    value: '1000'
                }, {
                    value: '4000'
                }, {
                    value: '1000'
                }, {
                    value: '8000'
                }, {
                    value: '2000'
                }, {
                    value: '7000'
                }]
            }]
        };
    }
}
