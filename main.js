/* Funciton 1 */ 
// function myFunction() {
//             var x = document.getElementById("myLinks");
//             if (x.style.display === "block") {
//                 x.style.display = "none";
//             } else {
//                 x.style.display = "block";
//             }
//         }


// //Leaflet Script
//   var map = L.map("mapid").setView([55.67, 12.57], 7);
//         L.tileLayer(
//             "https://stamen-tiles.a.ssl.fastly.net/terrain/{z}/{x}/{y}.jpg"
//         ).addTo(map);
//         var legend = L.control({
//             position: "bottomleft"
//         });

//         legend.onAdd = function(map) {
//             var div = L.DomUtil.create("div", "legend");
//             div.innerHTML += "<h4>Legend</h4>";
//             div.innerHTML += '<i style="background: #477AC2"></i><span>Data Centers</span><br>';
//             div.innerHTML += '<i style="background: #448D40"></i><span>IXPs</span><br>';
//             div.innerHTML += '<i style="background: #E6E696"></i><span>Sale Centers</span><br>';
//             div.innerHTML += '<i style="background: #E8E6E0"></i><span>2G towers</span><br>';
//             div.innerHTML += '<i style="background: #FFEFFF"></i><span>3G towers</span><br>';
//             div.innerHTML += '<i style="background: #FFFFFF"></i><span>4G towers</span><br>';
//             div.innerHTML += '<i style="background: #FFFFFF"></i><span>Deployed</span><br>';
//             div.innerHTML += '<i style="background: #FFFFFF"></i><span>In Progress</span><br>';
//             div.innerHTML += '<i style="background: #FFFFFF"></i><span>Proposed</span><br>';
//             return div;
//         };

//         legend.addTo(map);

//         var basemaps = L.control({
//             position: "topright"
//         });
//         basemaps.onAdd = function(map) {
//             var div = L.DomUtil.create("div", "basemaps");
//             div.innerHTML += "<h4>Basemaps</h4>";
//             div.innerHTML += '<i style="background: #477AC2"></i><span>Light v9</span><br>';
//             div.innerHTML += '<i style="background: #448D40"></i><span>Dark v9</span><br>';
//             div.innerHTML += '<i style="background: #E6E696"></i><span>Sattelite v9</span><br>';
//             div.innerHTML += '<i style="background: #E6E696"></i><span>Carto Positron</span><br>';
//             div.innerHTML += '<i style="background: #E6E696"></i><span>Custom 1</span><br>';
//             div.innerHTML += '<i style="background: #E6E696"></i><span>Custom 2</span><br>';
//             return div;
//         };
//         basemaps.addTo(map);

//         var addy = document.getElementById("myInput");


//Mobile Version Script
            var acc = document.getElementsByClassName("accordion");
            var i;

            for (i = 0; i < acc.length; i++) {
                acc[i].addEventListener("click", function() {
                    this.classList.toggle("active");
                    var panel = this.nextElementSibling;
                    if (panel.style.maxHeight) {
                        panel.style.maxHeight = null;
                    } else {
                        panel.style.maxHeight = panel.scrollHeight + "px";
                    }
                });
            }



