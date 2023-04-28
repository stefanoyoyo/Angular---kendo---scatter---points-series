import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <kendo-chart [title]="{ text: 'Charge current vs. charge time' }">
      <kendo-chart-series>
        <kendo-chart-series-item *ngFor="let series of chargeData;"
                                 type="scatter"
                                 name="{{ series.current }}C"
                                 [data]="series.stats"
                                 xField="time" yField="charge">

        </kendo-chart-series-item>
      </kendo-chart-series>
      <kendo-chart-x-axis>
          <kendo-chart-x-axis-item [title]="{ text: 'Time' }"
                                   [labels]="{ format: '{0}m' }"
                                   [max]="90">
          </kendo-chart-x-axis-item>
      </kendo-chart-x-axis>
      <kendo-chart-y-axis>
          <kendo-chart-y-axis-item [title]="{ text: 'Charge' }"
                                   [labels]="{ format: '{0}%' }"
                                   [max]="100">
          </kendo-chart-y-axis-item>
      </kendo-chart-y-axis>
      <kendo-chart-tooltip format="{1}% in {0} minutes">
      </kendo-chart-tooltip>
    </kendo-chart>
  `
})
export class AppComponent {
  public chargeData = [{
    current: 0.8,
    stats: [
      { time: 10, charge: 10 },
      { time: 15, charge: 20 },
      { time: 20, charge: 25 },
      { time: 32, charge: 40 },
      { time: 43, charge: 50 },
      { time: 55, charge: 60 },
      { time: 60, charge: 70 },
      { time: 70, charge: 80 },
      { time: 90, charge: 100 }
    ]
  }, {
    current: 1.6,
    stats: [
      { time: 10, charge: 40 },
      { time: 17, charge: 50 },
      { time: 18, charge: 70 },
      { time: 35, charge: 90 },
      { time: 47, charge: 95 },
      { time: 60, charge: 100 }
    ]
  }, {
    current: 3.2,
    stats: [
      { time: 10, charge: 70 },
      { time: 13, charge: 90 },
      { time: 25, charge: 100 }
    ]
  }];
}
