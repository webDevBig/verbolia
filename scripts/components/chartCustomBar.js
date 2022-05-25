let CHART_ARRAY = [];

class ChartCustom {
    constructor(block) {
        this.block = document.getElementById(block);
        this.mainBlock = document.getElementById('totalChartConfig');
    }

    init() {
        if(this.block) {
            this.changeConfigList = this.block.querySelectorAll('.chart-change-config a');
            if(this.mainBlock) {
                this.changePeriodList = this.mainBlock.querySelectorAll('.chart-change-data a');
            } else {
                this.changePeriodList = this.block.querySelectorAll('.chart-change-data a');
            }
            this.getActiveConfig();
        }
    }

    getAttribute() {
        this.type = this.block.getAttribute('data-type');
        this.minSize = Number(this.block.getAttribute('data-min-size'));
        this.maxSize = Number(this.block.getAttribute('data-max-size'));
        this.stepSize = Number(this.block.getAttribute('data-step-size'));
    }

    getActiveConfig() {
        this.changeConfigList.forEach(e => {
            if(e.classList.contains('active')) {
                const fileConfig = e.getAttribute('data-config');
                const id = e.closest('.block-dashboard__chart').getAttribute('id');
                fetch(`./data/${fileConfig}.json`)
                    .then(response => response.json())
                    .then(data => {
                        this.config = data;
                        if(this.mainBlock) {
                            CHART_ARRAY.push({id: id, config: this.config});
                        }
                        this.plot();
                    });
            }
        });
    }

    getActivePeriod() {
        this.changePeriodList.forEach(e => {
            if(e.classList.contains('active')) {
                this.period = e.getAttribute('data-period');
            }
        });
    }

    plot() {
        this.getActivePeriod();
        this.getAttribute();
        const context = this.block.querySelector('.chart').getContext('2d');
        const config = getConfig(context, this.config.label, this.config[this.period], this.type, this.minSize, this.maxSize, this.stepSize);
        Chart.Legend.prototype.afterFit = function() {
            this.height = this.height + 32;
            this.width = this.width + 76;
        };
        this.chart = new Chart(context, config);
        this.chart.update();
        if(this.mainBlock) {
            const id = this.block.getAttribute('id');
            CHART_ARRAY.forEach(data => {
                if(data.id === id) {
                    data.chart = this.chart;
                }
            });
        }
        this.listeners();
    }

    listeners() {
        this.changePeriodList.forEach(link => {
            link.addEventListener('click',e => {
                e.preventDefault();
                if(!e.target.classList.contains('active')) {
                    this.removeClass(this.changePeriodList);
                    this.period = e.target.getAttribute('data-period');
                    e.target.classList.add('active');
                    this.plotNewChart();
                }
            });
        });
        this.changeConfigList.forEach(link => {
            link.addEventListener('click', (e, i) => {
                e.preventDefault();
                if(!e.target.classList.contains('active')) {
                    this.removeClass(this.changeConfigList);
                    this.removeClass(this.changePeriodList);
                    this.changePeriodList[0].classList.add('active');
                    e.target.classList.add('active');
                    const fileConfig = e.target.getAttribute('data-config');
                    if(this.mainBlock) {
                        const id = e.target.closest('.block-dashboard__chart').getAttribute('id');
                        CHART_ARRAY.forEach(data => {
                            if(data.id === id) {
                                this.createNewContext(fileConfig, data.chart, id);
                            }
                        });
                    } else {
                        this.createNewContext(fileConfig, this.chart);
                    }
                }
            });
        });
        if(document.body.classList.contains('mobile-version')) {
            if(document.body.clientWidth < 700) {
                this.mainBlock.classList.add('mobile');
            }

            window.addEventListener('resize', () => {
                if(document.body.clientWidth < 700 && !this.mainBlock.classList.contains('mobile')) {
                    this.mainBlock.classList.add('mobile');
                    this.plotNewChart();
                }
                if(document.body.clientWidth >= 700 && this.mainBlock.classList.contains('mobile')) {
                    this.mainBlock.classList.remove('mobile');
                    this.plotNewChart();
                }
            });
        }
    }

    createNewContext(fileConfig, chart, id = '') {
        if(chart != null){
            chart.destroy();
        }
        fetch(`./data/${fileConfig}.json`)
            .then(response => response.json())
            .then(data => {
                this.config = data;
                if(id) {
                    const config = this.config;
                    CHART_ARRAY.forEach(data => {
                        if(data.id === id) {
                            data.config = config;
                        }
                        this.block = document.getElementById(data.id);
                        this.config = data.config;
                        this.plot();
                    });
                } else {
                    this.plot();
                }
            });
    }

    plotNewChart() {
        if(this.mainBlock) {
            CHART_ARRAY.forEach(data => {
                if(data.chart.options.legend.display) {
                    if(this.mainBlock.classList.contains('mobile')) {
                        data.chart.options.legend.labels.boxWidth = 11;
                        data.chart.options.legend.labels.fontSize = 11;
                    } else {
                        data.chart.options.legend.labels.boxWidth = 18;
                        data.chart.options.legend.labels.fontSize = 18;
                    }
                }

                if(this.mainBlock.classList.contains('mobile')) {
                    data.chart.options.scales.yAxes[0].ticks.stepSize = data.chart.options.scales.yAxes[0].ticks.stepSize * 2;
                } else {
                    data.chart.options.scales.yAxes[0].ticks.stepSize = data.chart.options.scales.yAxes[0].ticks.stepSize / 2;
                }

                this.getChartValue(data.chart, data.config);
            });
        } else {
            this.getChartValue(this.chart, this.config)
        }
    }

    getChartValue(chart, config) {
        chart.data.labels = config[this.period]['labels'];
        chart.data.datasets.forEach((dataset, index) => {
            dataset.data = config[this.period]['datasets'][index].data;
        });
        chart.update();
    }

    removeClass(list) {
        list.forEach(e => {
            if(e.classList.contains('active')) {
                e.classList.remove('active');
            }
        });
    }
}

function getConfig (context, label, data, type, minSize, maxSize, stepSize) {
    if(document.body.clientWidth < 700) {
        stepSize = stepSize * 2;
    }
    const labels = data.labels;
    const datasets = data.datasets;
    const scalesCustom = {
        xAxes: [{
            gridLines: {
                display: true,
                drawBorder: true,
                drawOnChartArea: false,
                drawTicks: false,
            },
            ticks: {
                autoSkip: true,
                maxTicksLimit: 3,
                fontColor: '#9da6ab',
                fontSize: 12,
                fontFamily: "Mulish, Arial, Helvetica, sans-serif"
            },
        }],
        yAxes: [{
            gridLines: {
                display: true,
                drawBorder: false,
                drawOnChartArea: true,
                drawTicks: false,
                color: 'rgba(#ebf3fa, 0.5)',
                borderDash: [3, 3],
            },
            ticks: {
                min: minSize,
                max: maxSize,
                stepSize: stepSize,
                beginAtZero: true,
                fontColor: '#9da6ab',
                fontSize: 12,
                fontFamily: "Mulish, Arial, Helvetica, sans-serif"
            },
            scaleLabel: {
                labelString: label,
                display: true,
                fontSize: 10,
            }
        }]
    };
    const backgroundColor = ['#ffad5d', '#3dcba0', '#72b0ea'];
    const legendCustom = {
        display: true,
        align: 'center',
        labels: {
            boxWidth: 18,
            fontSize: 18,
            fontFamily: "Mulish, Arial, Helvetica, sans-serif",
            padding: 15
        }
    };
    const legendCustomMobile = {
        display: true,
        align: 'center',
        labels: {
            boxWidth: 11,
            fontSize: 11,
            fontFamily: "Mulish, Arial, Helvetica, sans-serif",
            padding: 15
        }
    };
    let legend, bgColor = [];
    let isLineStep = false;
    if(type === 'lineStep') {
        type = 'line';
        isLineStep = true;
    }
    switch (type) {
        case 'line':
            if (datasets.length === 1) {
                legend = {display: false};
            } else {
                if(document.body.classList.contains('mobile-version')) {
                    if(document.body.clientWidth < 700) {
                        legend = legendCustomMobile;
                    } else {
                        legend = legendCustom;
                    }
                } else {
                    legend = legendCustom;
                }
            }
            bgColor = backgroundColor;
            break;
        case 'bar':
            legend = {display: false};
            backgroundColor.forEach((color, index) => {
                bgColor[index] = getGradientColor(context, color)
            });
            break;
    }
    datasets.forEach((item, index) => {
        item.backgroundColor = bgColor[index];
        item.hoverBackgroundColor = backgroundColor[index];
        item.borderColor = backgroundColor[index];
        switch (type) {
            case 'line':
                item.borderWidth = 4;
                item.pointRadius = 2;
                item.fill = false;
                item.steppedLine = isLineStep;
                break;
            case 'bar':
                item.borderWidth = 0;
                item.label = label;
                break;
        }
    });
    if(type === 'line') {
        type = 'LineWithLine';
    }
    return  {
        type: type,
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            legend: legend,
            tooltips: {
                position: 'custom',
                backgroundColor: '#fff',
                titleFontFamily: "Mulish, Arial, Helvetica, sans-serif",
                titleFontSize: 12,
                titleFontColor: '#31353e',
                bodyFontFamily: "Mulish, Arial, Helvetica, sans-serif",
                bodyFontSize: 12,
                bodyFontColor: '#9da6ab',
                displayColors: false,
                caretSize: 0,
                callbacks: {
                    label: function(tooltipItem) {
                        return Number(tooltipItem.yLabel) + " " + label;
                    }
                }
            },
            scales: scalesCustom
        }
    };
}

function getGradientColor(context, color) {
    const background = context.createLinearGradient(0, 0, 0, 600);
    background.addColorStop(0, color);
    background.addColorStop(1, '#fff');

    return background;
}

Chart.Tooltip.positioners.custom = function(elements, position) {
    if (!elements.length) {
        return false;
    }
    let offset = 0;
    let tooltipWidth = 0;
    if (elements[0]._chart.tooltip._view.width) {
        tooltipWidth = elements[0]._chart.tooltip._view.width / 2;
    } else {
        tooltipWidth = 135;
    }
    if (elements[0]._chart.width / 2 > position.x) {
        offset = tooltipWidth;
    }
    return {
        x: position.x - offset,
        y: position.y
    }
};

Chart.controllers.LineWithLine = Chart.controllers.line.extend({
    draw: function(ease) {
        Chart.controllers.line.prototype.draw.call(this, ease);

        if (this.chart.tooltip._active && this.chart.tooltip._active.length) {
            const activePoint = this.chart.tooltip._active[0],
                ctx = this.chart.ctx,
                x = activePoint.tooltipPosition().x,
                topY = this.chart.legend.bottom,
                bottomY = this.chart.chartArea.bottom;

            // draw line
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x, topY);
            ctx.lineTo(x, bottomY);
            ctx.lineWidth = 1;
            ctx.setLineDash([5, 5]);
            ctx.strokeStyle = '#ff9060';
            ctx.stroke();
            ctx.restore();

            // draw Circle
            ctx.save();
            ctx.beginPath();
            ctx.arc(x , topY + 5, 4, 0, 2 * Math.PI);
            ctx.fillStyle ="#ffad5d";
            ctx.fill();
            ctx.stroke();
        }
    }
});
