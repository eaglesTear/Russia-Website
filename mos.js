function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showLocation);
        }
    }

    function showLocation(position) {

        var moscowlat = 55.5807481;
        var moscowlon = -36.8251304;

        var currentpositionlat=position.coords.latitude;
        var currentpositionlon=position.coords.longitude;

        var distance=getDistanceFromLatLonInMiles(moscowlat, moscowlon, currentpositionlat, currentpositionlon);
            document.getElementById("geodisplay").innerHTML="LATITUDE: " + currentpositionlat + "<br>LONGITUDE: " + currentpositionlon;
            alert("YOUR CURRENT COORDINATES ARE: " + "LATITUDE: " + currentpositionlat + " LONGITUDE: " + currentpositionlon);
            alert("YOU ARE " + distance + " MILES FROM MOSCOW");
    }

    function getDistanceFromLatLonInMiles(lat1,lon1,lat2,lon2) {
            var R = 6371; 
            var dLat = deg2rad(lat2-lat1);
            var dLon = deg2rad(lon2-lon1);
            var a =
                Math.sin(dLat/2) * Math.sin(dLat/2) +
                Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
                Math.sin(dLon/2) * Math.sin(dLon/2);

            var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
            var d = R * c * 0.621371;  
            return d;
        }

    function deg2rad(deg) {
        return deg * (Math.PI/180);
    }

    function locationMoscow() {
        window.location.href="russia_images/moscow_map.jpg";
    }

    function hide_location() {
        document.getElementById("geodisplay").style.display="none";
    }

    function show_location() {
        document.getElementById("geodisplay").style.display="block";
    }
