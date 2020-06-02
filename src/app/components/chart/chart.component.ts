import { Component, OnInit } from '@angular/core';
import { StockChart } from 'angular-highcharts';
import { CharjsonService } from '../../charjson.service';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  stock: StockChart;
  chartJson: any;
  chartJson2: any;

  constructor(private _chartJsonService: CharjsonService) { }

  ngOnInit(): void {
    this._chartJsonService.getJSON().subscribe(data => {
      debugger;
      this.chartJson = data[0];
      this.chartJson2 = data[1];

      this.stock = new StockChart({
        chart: {
          zoomType:'xy'
        },
        rangeSelector: {
          selected: 4
        },
        title: {
          text: 'Highstock - AAPL Stock Price'
        },
        xAxis:{
          plotBands: [{ // mark the weekend
            color: '#FCFFC5',
            from: Date.UTC(2017, 6),
            to: Date.UTC(2017, 10),
            label: {
                text: 'Plot band',
                style: {
                    color: 'blue',
                    fontWeight: 'bold'
                }
            }
        }],

        },
        yAxis: {
          labels: {
              formatter: function () {
                  return (this.value > 0 ? ' + ' : '') + this.value + '%';
              },              
          },
          plotLines: [{
              value: 0,
              width: 2,
              color: 'silver'
          }]
      },

      plotOptions: {
          series: {
              compare: 'percent',
              showInNavigator: true
          }
      },

      tooltip: {
          pointFormat: '<span style="color:{series.color}; font-size:40px;">{series.name}</span>: <b>{point.y}</b> ({point.change}%)<br/>',
          valueDecimals: 2,
          split: true
      },
        series: [{
          name: 'SERIES 1',
          color: 'red',
          data: this.chartJson,
          type:'line'
        },
        {
          name: 'SERIES 2',
          color: 'green',
          data: this.chartJson2,
          type:'line'
        }]
      });
  });
      }
  
}
