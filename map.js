
function makeGray(a){
    a.style.backgroundColor= "#c4bfaf";
    a.style.color = "black";

}

function makeBlack(b){
  b.style.backgroundColor = "black";
  b.style.color = "white";
}


function GetMap() {
    map = new Microsoft.Maps.Map('#myMap', {
        credentials: 'AoYDlUxB1n_Wkk8nKDVnVCFD_SzWWkxX5NoAiYNYhILk2ZXTrYLfe7LMgYash4y1'
    });

    map.setView({
     center: new Microsoft.Maps.Location(47.751076, -120.740135),
     zoom: 7});
    //Create an infobox at the center of the map but don't show it.
    infobox = new Microsoft.Maps.Infobox(map.getCenter(), {
        visible: false
    });
    //Assign the infobox to a map instance.

    infobox.setMap(map);

    function Resturant(lat, long, title, address, website){
      this.lat = lat;
      this.long = long;
      this.title = title;
      this.address = address;
      this.website = website;
    }

    var pomBistro = new Resturant("47.666573", "-122.099266", "Pomegranate Bistro", "18005 NE 68th St, Redmond, WA 98052", "https://pomegranatebistro.com/");
    var ettas = new Resturant("47.61079",  "-122.343871", "Etta's", "2020 Western Ave, Seattle, WA 98121", "https://www.ettasrestaurant.com/");
    var raysBoathouse = new Resturant("47.673388", "-122.407643", "Ray's Boathouse", "6049 Seaview Ave NW, Seattle, WA 98107", "https://www.rays.com/");
    var pikeplacechowder = new Resturant("47.612514", "-122.335409", "Pike's Place Chowder", "1530 Post Alley, Seattle, WA 98101", "http://www.pikeplacechowder.com/");
    var kneaders = new Resturant("40.768536", "-111.889307","Kneaders Bakery and Cafe", "28 S State St Ste 235, Salt Lake City, UT 84111", "https://www.kneaders.com/")

    Resturants = [pomBistro, ettas, raysBoathouse, pikeplacechowder, kneaders];


    for (var i = 0; i < Resturants.length; i++) {
        var latLon = new Microsoft.Maps.Location(Resturants[i].lat, Resturants[i].long);
        var pin = new Microsoft.Maps.Pushpin(latLon, {color: '#ccccff',  icon: '<svg xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="40"><circle cx="12.5" cy="14.5" r="10" fill="{color}"/><image x="0" y="0" height="40" width="25" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAnCAYAAAGNntMoAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxMAAAsTAQCanBgAAAPBSURBVEhLtZY/SGRXFMaHpE0bSJVkt8oKAf+CKytispGIjY1NcGXF/QM2wlYLgyCC+bPYpUhSCgZiJhapxEAKC0HE3cUtBLETFrExG2zMkPHm+5059/nmvTG+bHY+OL57vvOd79775s4dSzmMjY297cP6uKur67Pz8/NPFYOMrXJ0dBQIS5qis7PzgQ9LJfXesEEI4baSTzCLxIVJQzI6OmpJJGOO8wsbZJDwh4eHQRM8VzxV8w65FSK6u7vvYMvTqUb09vY2dkRoji7C0zqwSsPI4+NjGyj/KG7fuESRgnH8EeL7sXcEUero6PgclYhnyncYR44VfYwKMDYywvn8Xnp6egLhaUHI/8f19XU3rYMc3iUXwB4w1sq/9/gujuFroXaxDB2uJ7HhKqBDz5J++y9N6C1ZWFiIS/smhupfExp/pfgyrUugaadWV1c5YS+dMpDDU3cqj6GhIVaRgNxL/461tTVr4OnU1dAhuVmr1QJPp1oAbgm91i8Ud51qDr2ZWxMTE+H09NT2AqrVaoCj5rI6RJTTX1zXJzk1NJawhN3d3aSozyJ31gAGdqlx6FSoOk/DjXQ4bbADurS0VPi9m/bg4KBwg2m3trYKN5h2enraGrSn24TWzSVNJPcHgca0el2PeQMiLz3yPNGgpbE0MDBAHi/UZ4qnMUTvUENj4oi+vj743H7gqHnaCC7dLC69iIE+mPc43mnAebk5ZmdnXRoCY6cvB5eb65tfdFlwwE5OTgJhh60IJicnA+Hp1dBGbxKethD6lRzQcfiJ78H4+Hgol8uBW3Fubs5yeOrovKUY1PRocHDQ7jSgI9Vwo2ZBHR16+uj3Uh78tg8PDwd+c4HTBhlxltPBubaxSwxn539ZPz65/xU0e3l+fj5nDmQ0Kfpus4g1lyYQF/DD1wgNbk1NTcEXPxYFgB+++DPJ79vb2y2ZBF/8+Qo939/fb8kk+OLPTp5w88ZJ9Liud30tHeI+zIb4D7Ih/n0iToIv/vbd5rzzv6+EVcVD1R+kQ9z9bJ6Ke9k4+ftVVTr7HjXcF9rWrxsbG9RsRxL/4lGJodLP2aePVwj6lAd88CPPQVt7NDIyEvb29tAmn5EM/iREvYqh/A/CJWZOH/34OH05tM12CX+oVFjs1UCHnj63KA41Pl5cXHSr5qCOzlteDzJY29zcdMtGwFN36eujra3tnf7+/nB2dubWF4Cn7tL/B52UkZmZGbeugxzeJW8GMvx2ZWXFJuBJ7qU3C13fleXlZa7xilMtwVvt7e3v+rggSqV/ABNOzES/IWvuAAAAAElFTkSuQmCC"/></svg>',});
        //Store some metadata with the pushpin.
        Resturants[i].website = "<a href = " + Resturants[i].website + ">Website Link</a>";
        pin.metadata = {
            title: Resturants[i].title,
            description: Resturants[i].address + Resturants[i].website
          };

        Microsoft.Maps.Events.addHandler(pin, 'click', pushpinClicked);
        map.entities.push(pin);
}
}

function pushpinClicked(e) {
    if (e.target.metadata) {
        infobox.setOptions({
            location: e.target.getLocation(),
            title: e.target.metadata.title,
            description: e.target.metadata.description,
            visible: true
        });
    }
}

/*MAP API */

var view;
var map;
var ourLoc;
function init(){
  ourLoc = ol.proj.fromLonLat([0, 0]);
     view = new ol.View({
       center: ourLoc,
       zoom: 4
     });

     var map = new ol.Map({
        target: 'map',
        layers: [
          new ol.layer.Tile({
            source: new ol.source.OSM()
          })

        ],

     loadTilesWhileAnimating: true,

     view: view

   });

   //pins();

var map = new Microsoft.Maps.Map(document.getElementById('myMap'), {});
var pushpin = new Microsoft.Maps.Pushpin(map.getCenter(), { icon: 'https://www.bingmapsportal.com/Content/images/poi_custom.png',
    anchor: new Microsoft.Maps.Point(12, 39) });
map.entities.push(pushpin);

}
