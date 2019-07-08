# ascetic-chart
### simple chart

*** add   ```<div id="App"></div>```  to your html, choose name for id, for example 'App'***
*** add script like this:
``` <script src="js/ascetic-chart.js"></script>
    <script>
      var AsceticChartData = {
      "idName":"App",
      "mode":"handle",
      "width": "620", //px
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
      "typeChart": "rectangles",
      "margin": "1",
      "aD":[
        {"index": 1, "height": 2, "color": "red", "text": "1995", "fontSize": "24", "fontColor": "black"},
        {"index": 2, "height": 14, "color": "cyan", "text": "1996", "fontSize": "24", "fontColor": "black"},
        {"index": 3, "height": 73, "color": "pink", "text": "1997", "fontSize": "24", "fontColor": "black"},
        {"index": 4, "height": 12, "color": "gray", "text": "1998", "fontSize": "24", "fontColor": "black"},
        {"index": 5, "height": 91, "color": "magenta", "text": "1999", "fontSize": "24", "fontColor": "black"},
        {"index": 6, "height": 47, "color": "lightgreen", "text": "2000", "fontSize": "24", "fontColor": "black"},
        {"index": 7, "height": 83, "color": "brown", "text": "2001", "fontSize": "24", "fontColor": "black"},
        {"index": 8, "height": 17, "color": "lightgray", "text": "2002", "fontSize": "24", "fontColor": "black"},
        {"index": 9, "height": 7, "color": "yellow", "text": "2003", "fontSize": "24", "fontColor": "black"},
        {"index": 10, "height": 42, "color": "orange", "text": "2004", "fontSize": "24", "fontColor": "black"}
      ]
    }

    document.addEventListener("DOMContentLoaded", function() {
      console.log("!!!");
      console.warn(AsceticChartData);
       var aC = ascetic_.Chart();
       aC(AsceticChartData);
    });   
    </script> ```

use your settings for configure chart ***