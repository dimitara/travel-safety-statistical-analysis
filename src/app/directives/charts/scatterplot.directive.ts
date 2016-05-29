import { Directive, OnInit, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: 'scatterplot'
})
export class Scatterplot implements OnInit{
  svg: d3.Selection<any>;
  margin: any = {top:10, left: 40, bottom:40, right:300};
  width: number = 700;
  height: number = 700;
  data: any;

  constructor(public elementRef: ElementRef) {
      this.elementRef = elementRef;
  }

  draw() {
      var root = d3.select(this.elementRef.nativeElement);

      //let parseDate = d3.time.format("%d-%b-%y").parse;

      root.select('svg').remove();

      this.svg = root.append('svg');
      this.svg.attr({ width: this.width + this.margin['right'], height: this.height + this.margin['bottom'] });
      var mainGroup = this.svg.append('g').attr('transform', "translate(" + this.margin['left'] + "," + this.margin['top'] + ")");

      //var x = d3.time.scale().range([0, this.width]);
      //var y = d3.scale.linear().range([this.height, 0]);
      let hours: any = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '24:00', '25:00'];
      
      // Define the line
      /*
      var valueline = d3.svg.line()
          .x(function(d) { return x(d['Time']); })
          .y(function(d) { return y(d['NumAcc']); });
    */

      let i: number = 0;
      // Get the data
      d3.csv("data.csv", (error, data) => {
          let axisValues: any = [];
          data.forEach(current => {
               if (!axisValues.find(elem => elem['Time'] == current['Time'])) {
                  axisValues.push(current);
              }
          });

          // Scale the range of the data
          let x_domain: any;// = d3.extent(axisValues, d => { return d['Time']; });
          x_domain = ['0', '26'];
          let y_domain: any;// = d3.extent(axisValues, d => { return d['NumAcc']; });
          y_domain = ['700', '0'];
          // define the y scale  (vertical)
          var yScale = d3.scale
            .linear()
            .domain(y_domain)
            .range([0, this.height]);   // map these to the chart height, less padding.  In this case 300 and 100

          var xScale = d3.scale
              .linear()
              .domain(x_domain)
              .range([0, this.width]);   // map these sides of the chart, in this case 100 and 60

          var xAxis = d3.svg.axis().scale(xScale)
              .orient("bottom")
              .tickFormat(d => { return hours[d]; });

          var yAxis = d3.svg.axis().scale(yScale)
              .orient("left")
              .ticks(10);

          /*
          // Add the valueline path.
          mainGroup.append("path")
              .attr("class", "line")
              .attr("d", valueline(data));
    */
          // Add the scatterplot
          let dateElem: any = mainGroup.selectAll("dot")
              .data(data)
              .enter()
          
          dateElem.append("circle")
              .on("mouseover", (evt) => {
                  d3.select('#' + evt['WeekDay'] + evt['Time'])
                    .transition()
                    .delay(function(d, i) { return i * 10; })
                    .duration(750)
                    .attr('opacity', 1);
              })
              .on("mouseout", evt => {
                  d3.select('#' + evt['WeekDay'] + evt['Time'])
                      .transition()
                      .delay(function(d, i) { return i * 10; })
                      .duration(250)
                      .attr('opacity', 0);
              })
              .attr("r", 3.5)
              .attr('opacity', 0)
              .attr("fill", '#fff')
              .attr("style", 'stroke:#006600;stroke-width:2px;')
              .attr("cx", function(d) { return xScale(d['Time']); })
              .attr("cy", function(d) { return yScale(d['NumAcc']); })
              .transition()
              .delay(function(d, i) { return i * 10; })
              .duration(1250)
              .attr('opacity', 0.7);

          dateElem.append('text')
              .text(function(d) { return d['WeekDay'] + ' (' + d['NumAcc'] + ')' })
              .attr("id", d => { return d['WeekDay'] + d['Time'] })
              .attr("x", function(d) { return xScale(d['Time']) - 20; })
              .attr("y", function(d) { return yScale(d['NumAcc']) - 8; })
              .attr('opacity', 0)
              .attr('class', 'tooltip')
              .attr("font-size", '11px;')
              .transition()
              .delay(function(d, i) { return i * 10; })
              .duration(1250);

          // Add the X Axis
          mainGroup.append("g")
              .attr("class", "xaxis")
              .attr("transform", "translate(0," + this.height + ")")
              .call(xAxis);

          // Add the Y Axis
          mainGroup.append("g")
              .attr("class", "y axis")
              .call(yAxis);

          i++;
      });
  }

  ngOnInit() {
      this.draw()
  }
}
