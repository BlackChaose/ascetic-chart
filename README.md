# ascetic-chart
### simple chart

*** add   ```<span id="Chart-1"></span><span id="Legend-1"></span>```  to your html, choose name for id, for example 'Chart-1' & 'Legend-1' ***
*** add script like this:
``` <script src="js/ascetic-chart.js"></script>
    <script>
      var AsceticChartData = {
      "idName":"",
      "mode":"handle",
      "width": "320", //px
      "height": "250", //px
      "x-note": "гг",
      "y-note": "%",
      "x-dim": "10px",
      "y-dim": "10px",
      "chart-width": "50", //px
      "chart-height": "250", //px
      "grid": "show",
      "axis-color": "gray",
      "grid-color": "light-green",
      "background-color": "silver",
      "font-size": "normal",
      "chart-font-color": "black",
      "chart-gap": "10px",
      "padding-left": 40, //px
      "padding-top": 0, //px
      "padding-right": 0, //px
      "padding-bottom": 20, //px
      "typeChart": "",
      "typeLegend": "Circle",
      "legendPl": "20px",
      "legendWidth": "120",
      "legendHeight": "250",
      "chart-font": "16px Arial",
      "margin": "1",
      "aD":[/** fixme: height to size*/
        {"index": 1, "height": 2, "color": "red", "text": "1995", "fontStyle": "14 Arial", "fontColor": "black"},
        {"index": 2, "height": 14, "color": "cyan", "text": "1996", "fontStyle": "14 Courier", "fontColor": "black"},
        {"index": 3, "height": 73, "color": "pink", "text": "1997", "fontStyle": "14 Tahoma", "fontColor": "black"},
        {"index": 4, "height": 12, "color": "gray", "text": "1998", "fontStyle": "14 Terminal", "fontColor": "black"},
        {"index": 5, "height": 91, "color": "magenta", "text": "1999", "fontStyle": "14 Times New Roman", "fontColor": "black"},
        {"index": 6, "height": 47, "color": "lightgreen", "text": "2000", "fontStyle": "14 Monospace Coursiva", "fontColor": "black"},
        {"index": 7, "height": 83, "color": "brown", "text": "2001", "fontStyle": "14 Symbol", "fontColor": "black"},
        {"index": 8, "height": 17, "color": "lightgray", "text": "2002", "fontStyle": "14 Arial", "fontColor": "black"},
        {"index": 9, "height": 7, "color": "yellow", "text": "2003", "fontStyle": "14 Arial Black", "fontColor": "black"},
        {"index": 10, "height": 42, "color": "orange", "text": "2004", "fontStyle": "14 Courier", "fontColor": "black"}
      ]
    }

    document.addEventListener("DOMContentLoaded", function() {
      console.log("!!!");
      console.warn(AsceticChartData);
      
       var aC_1 = ascetic_.Chart();
       AsceticChartData.idName='Chart-1';
       AsceticChartData.typeChart='circle';
       aC_1(AsceticChartData);
      
       var aL_1 = ascetic_.Chart();
       AsceticChartData.idName='Legend-1';
       AsceticChartData.typeChart='legend';
       aL_1(AsceticChartData);
       
    });   ```

use your settings for configure chart ***
