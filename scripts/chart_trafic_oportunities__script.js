  am5.ready(function () {

      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      var current = am5.Root.new("chartdivCurrent");
      var myTheme = am5.Theme.new(current);
      myTheme.rule("Label").set("fontSize", "11px");

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      current.setThemes([
                am5themes_Animated.new(current),
                myTheme
            ]);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
      var chart = current.container.children.push(
          am5percent.PieChart.new(current, {
              endAngle: 270
          })
      );

      // Create series
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
      var seriesCurrent = chart.series.push(
          am5percent.PieSeries.new(current, {
              valueField: "value",
              categoryField: "category",
              endAngle: 270,
              alignLabels: false,
              labels: false,
              fillField: "color",
              radius: 80
          })
      );

      seriesCurrent.states.create("hidden", {
          endAngle: -90
      });
      seriesCurrent.ticks.template.setAll({
          forceHidden: true
      });

      seriesCurrent.labels.template.setAll({
          text: ''
      });
    

      //      seriesCurrent.slices.template.set("tooltipText", "");
      // Set data
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
      seriesCurrent.data.setAll([
          {
              category: "Competitor 1",
              value: 3,
              color: '#EEAB34'
                }, {
              category: "Competitor 2",
              value: 3,
              color: "#CED0FF"
                }, {
              category: "Competitor 3",
              value: 3,
              color: "#6CADA7"
                }, {
              category: "Competitor 4",
              value: 6,
              color: "#E6E7E8"
                }, {
              category: "Your website",
              value: 6,
              color: "#E37D38"
                }, {
              category: "Competitor 6",
              value: 11,
              color: "#D65359"
                }, {
              category: "Competitor 7",
              value: 14,
              color: "#F0AD00"
                }, {
              category: "Competitor 8",
              value: 14,
              color: "#32BA7C"
                }, {
              category: "Competitor 9",
              value: 11,
              color: "#5B5151"
                }, {
              category: "Competitor 10",
              value: 11,
              color: "#B1B1B1"
                }, {
              category: "Others",
              value: 18,
              color: "#F4A28C"
                }
            ]);

      seriesCurrent.appear(1000, 100);

  }); // end am5.ready()

  am5.ready(function () {

      // Create root element
      // https://www.amcharts.com/docs/v5/getting-started/#Root_element
      var predicted = am5.Root.new("chartdivPredicted");
      var myThemePredicted = am5.Theme.new(predicted);
      myThemePredicted.rule("Label").set("fontSize", "11px");

      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      predicted.setThemes([
                am5themes_Animated.new(predicted),
                myThemePredicted
            ]);

      // Create chart
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
      var chart = predicted.container.children.push(
          am5percent.PieChart.new(predicted, {
              endAngle: 270
          })
      );

      // Create series
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
      var seriesPredicted = chart.series.push(
          am5percent.PieSeries.new(predicted, {
              valueField: "value",
              categoryField: "category",
              endAngle: 270,
              alignLabels: false,
              fillField: "color",
              radius: 80
          })
      );

      seriesPredicted.states.create("hidden", {
          endAngle: -90
      });
      seriesPredicted.ticks.template.setAll({
          forceHidden: true
      });

      seriesPredicted.labels.template.setAll({
          text: ""
      });
     
      // Set data
      // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
      seriesPredicted.data.setAll([{
              category: "Competitor 1",
              value: 3,
              color: '#EEAB34'
                }, {
              category: "Competitor 2",
              value: 3,
              color: "#CED0FF"
                }, {
              category: "Competitor 3",
              value: 3,
              color: "#6CADA7"
                }, {
              category: "Competitor 4",
              value: 6,
              color: "#E6E7E8"
                }, {
              category: "Your website",
              value: 6,
              color: "#E37D38"
                }, {
              category: "Competitor 6",
              value: 11,
              color: "#D65359"
                }, {
              category: "Competitor 7",
              value: 14,
              color: "#F0AD00"
                }, {
              category: "Competitor 8",
              value: 14,
              color: "#32BA7C"
                }, {
              category: "Competitor 9",
              value: 11,
              color: "#5B5151"
                }, {
              category: "Competitor 10",
              value: 11,
              color: "#B1B1B1"
                }, {
              category: "Others",
              value: 18,
              color: "#F4A28C"
                },
            ]);

      seriesPredicted.appear(1000, 100);

  }); // end am5.ready()

  am4core.ready(function () {

      // Themes begin
      am4core.useTheme(am4themes_animated);
      // Themes end

      // Create chart instance
      var chart = am4core.create("chartdiv", am4charts.XYChart);


      // Add data
      chart.data = [{
          "year": "0 month",
          "italy": 0,
}, {
          "year": "3 month",
          "italy": 156,
}, {
          "year": "6 month",
          "italy": 276,
}, {
          "year": "12 month",
          "italy": 400,
}];

      // Create category axis
      var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "year";
      categoryAxis.renderer.grid.template.location = 0;
      categoryAxis.renderer.ticks.template.disabled = true;
      categoryAxis.renderer.ticks.template.opacity = 0;
      categoryAxis.renderer.line.opacity = 0;
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.tooltip.disabled = true;
      categoryAxis.renderer.grid.template.stroke = "#EAECF0";
      categoryAxis.renderer.grid.template.strokeOpacity = 1;


      categoryAxis.renderer.minGridDistance = 30;
      categoryAxis.renderer.labels.template.adapter.add("dy", function (dy, target) {
          //          if (target.dataItem && target.dataItem.index & 2 == 2) {
          //              return dy + 15;
          //          }
          return dy;
      });
      var axisLabels = categoryAxis.renderer.labels.template;
      axisLabels.fontSize = 11;
      axisLabels.fontWeight = "500";
      axisLabels.fill = "#373131";


      // Create value axis
      var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.tooltip.disabled = true;
      valueAxis.renderer.line.opacity = 0;
      valueAxis.renderer.ticks.template.disabled = true;
      valueAxis.min = 0;
      valueAxis.renderer.grid.template.stroke = "#EAECF0";
      valueAxis.renderer.grid.template.strokeOpacity = "1";
      valueAxis.renderer.minGridDistance = 30;
      valueAxis.min = 0;
      valueAxis.max = 400;

      var axisLabels2 = valueAxis.renderer.labels.template;
      axisLabels2.fontSize = 11;
      axisLabels2.fontWeight = "500";
      axisLabels2.fill = "#373131";

      // Create series
      var series1 = chart.series.push(new am4charts.LineSeries());
      series1.dataFields.valueY = "italy";
      series1.dataFields.categoryX = "year";
      series1.tooltipText = "{valueY}";
      //      series1.tooltip.label.padding = 4;
      series1.tooltip.label.padding(3, 3, 3, 3);
      series1.tooltip.label.wrap = true;
      series1.tooltip.getFillFromObject = false;
      series1.tooltip.background.fill = am4core.color("#ffffff");
      series1.tooltip.getStrokeFromObject = false;
      series1.tooltip.background.stroke = am4core.color("#EAECF0");
      series1.tooltip.label.fill = am4core.color("#E37D38");
      series1.tooltip.label.fontSize = 10;
      series1.tooltip.background.filters.clear();
      //      shadow.color = am4core.color("transparent");
      series1.tooltip.background.pointerLength = 0;
      series1.stroke = am4core.color("#E37D38");


      // Add chart cursor

      chart.cursor = new am4charts.XYCursor();
      chart.cursor.behavior = "panX";
      chart.cursor.lineX.opacity = 0;
      chart.cursor.lineY.opacity = 0;

      series1.segments.template.strokeWidth = 1;


  });
