import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { CoingeckoApiService } from 'src/app/api/coingecko-api.service';
import { ChartConfiguration, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-info-graph',
  templateUrl: './info-graph.component.html',
  styleUrls: ['./info-graph.component.scss']
})
export class InfoGraphComponent implements OnInit {
  @Input() graphType!: 'price' | 'volume';
  title!: string;
  price!: number;
  date!: string;
  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        borderColor: 'rgb(118, 69, 217)',
        pointBackgroundColor: 'rgb(118, 69, 217)',
        pointBorderColor: 'rgb(118, 69, 217)',
        pointHoverBackgroundColor: 'rgb(118, 69, 217)',
        pointHoverBorderColor: 'rgb(118, 69, 217)'
      }
    ],
    labels: []
  };
  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      point: {
        radius: 1
      }
    },

    plugins: {
      legend: { display: false },
    }
  };
  public lineChartType: ChartType = 'line';
  @ViewChild(BaseChartDirective) myLineChart !: BaseChartDirective;

  constructor(private api: CoingeckoApiService) { }

  ngOnInit(): void {
    if (this.graphType === 'price') {
      this.title = 'Prices';
    } else {
      this.title = 'Total Volumes';
    }
    this.getGraphData();
  }

  getGraphData(): void {
    this.api.getGraphData('pancakeswap-token', 'USD', 365)
      .subscribe((res: any) => {
        setTimeout(() => {
          this.myLineChart.chart?.update();
        }, 200);
        if (this.graphType === 'price') {
          this.lineChartData.datasets[0].data = res.prices.map((element: number[]) => {
            return element[1];
          });
          this.lineChartData.labels = res.prices.map((element: number[]) => {
            let date: Date = new Date(element[0]);
            return date.toLocaleDateString();
          });
        } else {
          this.lineChartData.datasets[0].data = res.total_volumes.map((element: number[]) => {
            return element[1];
          });
          this.lineChartData.labels = res.total_volumes.map((element: number[]) => {
            let date: Date = new Date(element[0]);
            return date.toLocaleDateString();
          });
        }
        this.price = Number(this.lineChartData.datasets[0].data[this.lineChartData.datasets[0].data.length - 1]);
        this.date = new Date().toLocaleDateString();
      });
  }

}
