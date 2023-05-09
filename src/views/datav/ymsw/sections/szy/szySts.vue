<template>
  <dv-border-box-11 title="水资源" class="datav-border-box-content">
    <div id="cards">
      <div class="card-item" v-for="(card, i) in cards" :key="card.title">
        <dv-border-box-12>
          <div class="card-header">
            <div class="card-header-left">{{ card.title }}</div>
            <!-- <div class="card-header-right">{{ '0' + (i + 1) }}</div> -->
            <!-- <dv-digital-flop class="card-header-right" :config="card.flop" /> -->
          </div>
          <dv-charts class="ring-charts" :option="card.ring" />
          <div class="card-footer">
            <div class="card-footer-item">
              <div class="footer-title">比常年</div>
              <div class="footer-detail">
                <dv-digital-flop :config="card.total" style="width: 70%; height: 35px" />%
              </div>
            </div>
            <div class="card-footer-item">
              <div class="footer-title">比上年</div>
              <div class="footer-detail">
                <dv-digital-flop :config="card.num" style="width: 70%; height: 35px" />%
              </div>
            </div>
          </div>
        </dv-border-box-12>
      </div>
    </div>
  </dv-border-box-11>
</template>
<script>
  export default {
    setup() {
      const cards = [
        {
          title: '水资源总量(万m³)',
          total: {
            number: [3.71],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#ea6027',
              fontWeight: 'bold',
            },
          },
          num: {
            number: [5.6],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#26fcd8',
              fontWeight: 'bold',
            },
          },
          flop: {
            number: [12689.26],
            toFixed: 2,
            content: '{nt}',
          },
          ring: {
            series: [
              {
                type: 'gauge',
                startAngle: -Math.PI / 2,
                endAngle: Math.PI * 1.5,
                arcLineWidth: 13,
                radius: '80%',
                data: [{ name: '水资源总量(万m³)', value: 33000 }],
                axisLabel: {
                  show: false,
                },
                axisTick: {
                  show: false,
                },
                pointer: {
                  show: false,
                },
                backgroundArc: {
                  style: {
                    stroke: '#224590',
                  },
                },
                details: {
                  show: true,
                  formatter: '{value} ',
                  style: {
                    fill: '#1ed3e5',
                    fontSize: 20,
                  },
                },
              },
            ],
            color: ['#04ce17'],
          },
        },
        {
          title: '供水能力(万m³)',
          total: {
            number: [3.69],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#ea6027',
              fontWeight: 'bold',
            },
          },
          num: {
            number: [4.5],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#26fcd8',
              fontWeight: 'bold',
            },
          },
          flop: {
            number: [11928.62],
            toFixed: 2,
            content: '{nt}',
          },
          ring: {
            series: [
              {
                type: 'gauge',
                startAngle: -Math.PI / 2,
                endAngle: Math.PI * 1.5,
                arcLineWidth: 13,
                radius: '80%',
                data: [{ name: '供水能力(万m³)', value: 12000 }],
                axisLabel: {
                  show: false,
                },
                axisTick: {
                  show: false,
                },
                pointer: {
                  show: false,
                },
                backgroundArc: {
                  style: {
                    stroke: '#224590',
                  },
                },
                details: {
                  show: true,
                  formatter: '{value}',
                  style: {
                    fill: '#1ed3e5',
                    fontSize: 20,
                  },
                },
              },
            ],
            color: ['#2936e7'],
          },
        },
        {
          title: '用水总量(万m³)',
          total: {
            number: [9.26],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#ea6027',
              fontWeight: 'bold',
            },
          },
          num: {
            number: [8.26],
            content: '{nt}',
            textAlign: 'right',
            style: {
              fill: '#26fcd8',
              fontWeight: 'bold',
            },
          },
          flop: {
            number: [25384],
            toFixed: 0,
            content: '{nt}',
          },
          ring: {
            series: [
              {
                type: 'gauge',
                startAngle: -Math.PI / 2,
                endAngle: Math.PI * 1.5,
                arcLineWidth: 13,
                radius: '80%',
                data: [{ name: '用水总量(万m³)', value: 13900 }],
                axisLabel: {
                  show: false,
                },
                axisTick: {
                  show: false,
                },
                pointer: {
                  show: false,
                },
                backgroundArc: {
                  style: {
                    stroke: '#224590',
                  },
                },
                details: {
                  show: true,
                  formatter: '{value}',
                  style: {
                    fill: '#1ed3e5',
                    fontSize: 20,
                  },
                },
              },
            ],
            color: ['#f6ff00'],
          },
        },
      ];

      return { cards };
    },
  };
</script>
<style lang="less">
  @import './../../layouts/layout.less';

  #cards {
    display: flex;
    justify-content: space-between;
    height: 95%;

    .card-item {
      background-color: rgba(6, 30, 93, 0.5);
      // border-top: 2px solid rgba(1, 153, 209, 0.5);
      width: 32%;
      display: flex;
      flex-direction: column;
    }

    .card-header {
      display: flex;
      height: 20%;
      align-items: center;
      justify-content: space-between;

      .card-header-left {
        font-size: 18px;
        font-weight: bold;
        padding-left: 20px;
      }

      .card-header-right {
        padding-right: 20px;
        font-size: 40px;
        color: #03d3ec;
      }
    }

    .ring-charts {
      height: 55%;
    }

    .card-footer {
      height: 25%;
      display: flex;
      align-items: center;
      justify-content: space-around;
    }

    .card-footer-item {
      padding: 5px 10px 0px 10px;
      box-sizing: border-box;
      width: 40%;
      background-color: rgba(6, 30, 93, 0.7);
      border-radius: 3px;

      .footer-title {
        font-size: 15px;
        margin-bottom: 5px;
      }

      .footer-detail {
        font-size: 20px;
        color: #1294fb;
        display: flex;
        font-size: 18px;
        align-items: center;

        .dv-digital-flop {
          margin-right: 5px;
        }
      }
    }
  }
</style>
