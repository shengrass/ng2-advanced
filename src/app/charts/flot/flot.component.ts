import { Component, OnInit, NgZone } from '@angular/core';

@Component({
  selector: 'app-flot',
  templateUrl: './flot.component.html',
  styleUrls: ['./flot.component.css']
})
export class FlotComponent implements OnInit {

  constructor(private ngZone: NgZone) { }

  ngOnInit() {

    //執行在 Angular 2 生命週期外(這樣外部程式就不會引發變更偵測)
    this.ngZone.runOutsideAngular(() => {
      //在頁面切換的時候，切到folt那頁時在該頁面重新整理後會發現，
      //點擊menu的charts無法展開裡面的元素，功能失效，但是dashboard跟cards的點擊換頁功能都正常。
      //解決方式：載入app.js裡面的4個function，FlotCharts(), initSettings(),initRipple(),sidebarNav()
      $(FlotCharts);

      function FlotCharts() {

        if (!$.fn.plot) return;

        // Dont run if charts page not loaded
        if (!$('#bar-flotchart').length) return;

        // BAR
        // -----------------------------------
        $.get('assets/server/chart/bar.json', function (data) {

          var barData = data;
          var barOptions = {
            series: {
              bars: {
                align: 'center',
                lineWidth: 0,
                show: true,
                barWidth: 0.6,
                fill: true,
                fillColor: {
                  colors: [{
                    opacity: 0.8
                  }, {
                    opacity: 0.5
                  }]
                }
              }
            },
            grid: {
              borderColor: 'rgba(162,162,162,.26)',
              borderWidth: 1,
              hoverable: true,
              backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
              content: function (label, x, y) {
                return x + ' : ' + y;
              }
            },
            xaxis: {
              tickColor: 'rgba(162,162,162,.26)',
              font: {
                color: Colors.byName('blueGrey-200')
              },
              mode: 'categories'
            },
            yaxis: {
              // position: (isRTL ? 'right' : 'left'),
              tickColor: 'rgba(162,162,162,.26)',
              font: {
                color: Colors.byName('blueGrey-200')
              }
            },
            shadowSize: 0
          };

          $('#bar-flotchart').plot(barData, barOptions);
        });



        // BAR STACKED
        // -----------------------------------
        $.get('assets/server/chart/barstacked.json', function (data) {

          var barStackeData = data;
          var barStackedOptions = {
            series: {
              stack: true,
              bars: {
                align: 'center',
                lineWidth: 0,
                show: true,
                barWidth: 0.6,
                fill: 0.9
              }
            },
            grid: {
              borderColor: 'rgba(162,162,162,.26)',
              borderWidth: 1,
              hoverable: true,
              backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
              content: function (label, x, y) {
                return x + ' : ' + y;
              }
            },
            xaxis: {
              tickColor: 'rgba(162,162,162,.26)',
              font: {
                color: Colors.byName('blueGrey-200')
              },
              mode: 'categories'
            },
            yaxis: {
              min: 0,
              max: 200, // optional: use it for a clear represetation
              // position: (isRTL ? 'right' : 'left'),
              tickColor: 'rgba(162,162,162,.26)',
              font: {
                color: Colors.byName('blueGrey-200')
              }
            },
            shadowSize: 0
          };

          $('#barstacked-flotchart').plot(barStackeData, barStackedOptions);
        });

        // SPLINE
        // -----------------------------------
        $.get('assets/server/chart/spline.json', function (data) {

          var splineData = data;
          var splineOptions = {
            series: {
              lines: {
                show: false
              },
              points: {
                show: true,
                radius: 2
              },
              splines: {
                show: true,
                tension: 0.4,
                lineWidth: 1,
                fill: 1
              }
            },
            grid: {
              borderColor: 'rgba(162,162,162,.26)',
              borderWidth: 1,
              hoverable: true,
              backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
              content: function (label, x, y) {
                return x + ' : ' + y;
              }
            },
            xaxis: {
              tickColor: 'rgba(162,162,162,.26)',
              font: {
                color: Colors.byName('blueGrey-200')
              },
              mode: 'categories'
            },
            yaxis: {
              min: 0,
              max: 150, // optional: use it for a clear represetation
              tickColor: 'rgba(162,162,162,.26)',
              font: {
                color: Colors.byName('blueGrey-200')
              },
              // position: (isRTL ? 'right' : 'left'),
              tickFormatter: function (v) {
                return v /* + ' visitors'*/;
              }
            },
            shadowSize: 0
          };

          $('#spline-flotchart').plot(splineData, splineOptions);
        });

        // AREA
        // -----------------------------------
        $.get('assets/server/chart/area.json', function (data) {
          var areaData = data;
          var areaOptions = {
            series: {
              lines: {
                show: true,
                fill: true,
                fillColor: {
                  colors: [{
                    opacity: 0.5
                  }, {
                    opacity: 0.9
                  }]
                }
              },
              points: {
                show: false
              }
            },
            grid: {
              borderColor: 'rgba(162,162,162,.26)',
              borderWidth: 1,
              hoverable: true,
              backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
              content: function (label, x, y) {
                return x + ' : ' + y;
              }
            },
            xaxis: {
              tickColor: 'rgba(162,162,162,.26)',
              font: {
                color: Colors.byName('blueGrey-200')
              },
              mode: 'categories'
            },
            yaxis: {
              min: 0,
              max: 150,
              tickColor: 'rgba(162,162,162,.26)',
              font: {
                color: Colors.byName('blueGrey-200')
              },
              // position: (isRTL ? 'right' : 'left')
            },
            shadowSize: 0
          };

          $('#area-flotchart').plot(areaData, areaOptions);

        });

        // LINE
        // -----------------------------------
        $.get('assets/server/chart/line.json', function (data) {

          var lineData = data;
          var lineOptions = {
            series: {
              lines: {
                show: true,
                fill: 0.01
              },
              points: {
                show: true,
                radius: 4
              }
            },
            grid: {
              borderColor: 'rgba(162,162,162,.26)',
              borderWidth: 1,
              hoverable: true,
              backgroundColor: 'transparent'
            },
            tooltip: true,
            tooltipOpts: {
              content: function (label, x, y) {
                return x + ' : ' + y;
              }
            },
            xaxis: {
              tickColor: 'rgba(162,162,162,.26)',
              font: {
                color: Colors.byName('blueGrey-200')
              },
              mode: 'categories'
            },
            yaxis: {
              // position: (isRTL ? 'right' : 'left'),
              tickColor: 'rgba(162,162,162,.26)',
              font: {
                color: Colors.byName('blueGrey-200')
              }
            },
            shadowSize: 0
          };

          $('#line-flotchart').plot(lineData, lineOptions);
        });

        // PIE
        // -----------------------------------
        var pieData = [{
          'label': 'CSS',
          'color': '#009688',
          'data': 40
        }, {
          'label': 'LESS',
          'color': '#FFC107',
          'data': 90
        }, {
          'label': 'SASS',
          'color': '#FF7043',
          'data': 75
        }];
        var pieOptions = {
          series: {
            pie: {
              show: true,
              innerRadius: 0,
              label: {
                show: true,
                radius: 0.8,
                formatter: function (label, series) {
                  return '<div class="flot-pie-label">' +
                    //label + ' : ' +
                    Math.round(series.percent) +
                    '%</div>';
                },
                background: {
                  opacity: 0.8,
                  color: '#222'
                }
              }
            }
          }
        };

        $('#pie-flotchart').plot(pieData, pieOptions);

        // DONUT
        // -----------------------------------
        var donutData = [{
          'color': '#4CAF50',
          'data': 60,
          'label': 'Coffee'
        }, {
          'color': '#009688',
          'data': 90,
          'label': 'CSS'
        }, {
          'color': '#FFC107',
          'data': 50,
          'label': 'LESS'
        }, {
          'color': '#FF7043',
          'data': 80,
          'label': 'Jade'
        }, {
          'color': '#3949AB',
          'data': 116,
          'label': 'AngularJS'
        }];
        var donutOptions = {
          series: {
            pie: {
              show: true,
              innerRadius: 0.5 // This makes the donut shape
            }
          }
        };

        $('#donut-flotchart').plot(donutData, donutOptions);

        // REALTIME
        // -----------------------------------
        var realTimeOptions = {
          series: {
            lines: {
              show: true,
              fill: true,
              fillColor: {
                colors: ['#3F51B5', '#3F51B5']
              }
            },
            shadowSize: 0 // Drawing is faster without shadows
          },
          grid: {
            show: false,
            borderWidth: 0,
            minBorderMargin: 20,
            labelMargin: 10
          },
          xaxis: {
            tickFormatter: function () {
              return '';
            }
          },
          yaxis: {
            min: 0,
            max: 110
          },
          legend: {
            show: true
          },
          colors: ['#3F51B5']
        };

        // Generate random data for realtime demo
        var data = [],
          totalPoints = 300;

        var realTimeData = getRandomData();
        update();

        function getRandomData() {
          if (data.length > 0)
            data = data.slice(1);
          // Do a random walk
          while (data.length < totalPoints) {
            var prev = data.length > 0 ? data[data.length - 1] : 50,
              y = prev + Math.random() * 10 - 5;
            if (y < 0) {
              y = 0;
            } else if (y > 100) {
              y = 100;
            }
            data.push(y);
          }
          // Zip the generated y values with the x values
          var res = [];
          for (var i = 0; i < data.length; ++i) {
            res.push([i, data[i]]);
          }
          return [res];
        }

        function update() {
          realTimeData = getRandomData();
          $('#realtime-flotchart').plot(realTimeData, realTimeOptions);
          setTimeout(update, 30);
        }
        // end random data generation
      }

      $(initSettings);

      function initSettings() {

        // Themes setup
        var themes = [
          'theme-1',
          'theme-2',
          'theme-3',
          'theme-4',
          'theme-5',
          'theme-6',
          'theme-7',
          'theme-8',
          'theme-9'
        ];

        var body = $('body');
        var header = $('.layout-container > header');
        var sidebar = $('.layout-container > aside');
        var brand = sidebar.find('.sidebar-header');
        var content = $('.layout-container > main');

        // Handler for themes preview
        $('input[name="setting-theme"]:radio').change(function () {
          var index = this.value;
          if (themes[index]) {
            body.removeClass(themeClassname);
            body.addClass(themes[index]);
          }
        });
        // Regular expression for the pattern bg-* to find the background class
        function themeClassname(index, css) {
          var cmatch = css.match(/(^|\s)theme-\S+/g);
          return (cmatch || []).join(' ');
        }


        // Handler for menu links
        $('input[name="headerMenulink"]:radio').change(function () {
          var menulinks = $('.menu-link');
          // remove allowed classses
          menulinks.removeClass('menu-link-slide menu-link-arrow menu-link-close');
          // Add selected
          menulinks.addClass(this.value);
        });

        // Handlers for layout variations
        // var lContainer = $('.layout-container');
        $('#sidebar-showheader').change(function () {
          brand[this.checked ? 'show' : 'hide']();
        });
        var sidebarToolbar = $('.sidebar-toolbar');
        $('#sidebar-showtoolbar').change(function () {
          sidebarToolbar[this.checked ? 'show' : 'hide']();
        });

        $('#sidebar-offcanvas').change(function () {
          body[this.checked ? 'addClass' : 'removeClass']('sidebar-offcanvas');
        });
      }

      $(initRipple);

      function initRipple() {
        $('.ripple').each(function () {
          new Ripple($(this));
        });
      }

      $(sidebarNav);

      function sidebarNav() {

        var $sidebarNav = $('.sidebar-nav');
        var $sidebarContent = $('.sidebar-content');

        activate($sidebarNav);

        $sidebarNav.on('click', function (event) {
          var item = getItemElement(event);
          // check click is on a tag
          if (!item) return;

          var ele = $(item),
            liparent = ele.parent()[0];

          var lis = ele.parent().parent().children(); // markup: ul > li > a
          // remove .active from childs
          lis.find('li').removeClass('active');
          // remove .active from siblings ()
          $.each(lis, function (idx, li) {
            if (li !== liparent)
              $(li).removeClass('active');
          });

          var next = ele.next();
          if (next.length && next[0].tagName === 'UL') {
            ele.parent().toggleClass('active');
            event.preventDefault();
          }
        });

        // find the a element in click context
        // doesn't check deeply, asumens two levels only
        function getItemElement(event) {
          var element = event.target,
            parent = element.parentNode;
          if (element.tagName.toLowerCase() === 'a') return element;
          if (parent.tagName.toLowerCase() === 'a') return parent;
          if (parent.parentNode.tagName.toLowerCase() === 'a') return parent.parentNode;
        }

        function activate(sidebar) {
          sidebar.find('a').each(function () {
            var href = $(this).attr('href').replace('#', '');
            if (href !== '' && window.location.href.indexOf(href) >= 0) {
              var item = $(this).parents('li').addClass('active');
              // Animate scrolling to focus active item
              // $sidebarContent.animate({
              //     scrollTop: $sidebarContent.scrollTop() + item.position().top
              // }, 1200);
              return false; // exit foreach
            }
          });
        }

        var layoutContainer = $('.layout-container');
        var $body = $('body');
        // Handler to toggle sidebar visibility on mobile
        $('#sidebar-toggler').click(function (e) {
          e.preventDefault();
          layoutContainer.toggleClass('sidebar-visible');
          // toggle icon state
          $(this).parent().toggleClass('active');
        });
        // Close sidebar when click on backdrop
        $('.sidebar-layout-obfuscator').click(function (e) {
          e.preventDefault();
          layoutContainer.removeClass('sidebar-visible');
          // restore icon
          $('#sidebar-toggler').parent().removeClass('active');
        });

        // Handler to toggle sidebar visibility on desktop
        $('#offcanvas-toggler').click(function (e) {
          e.preventDefault();
          $body.toggleClass('offcanvas-visible');
          // toggle icon state
          $(this).parent().toggleClass('active');
        });

        // remove desktop offcanvas when app changes to mobile
        // so when it returns, the sidebar is shown again
        window.addEventListener('resize', function () {
          if (window.innerWidth < 768) {
            $body.removeClass('offcanvas-visible');
            $('#offcanvas-toggler').parent().addClass('active');
          }
        });
      }
    });
  }
}
