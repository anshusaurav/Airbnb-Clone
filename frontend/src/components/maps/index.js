
import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const apiMaps = "AIzaSyA5UEAy2FQgtkK3FaVOfnFFp9hVNAxxQTM";

const mapStyles = {
    width: "90%",
    heigth: "100%"
};

export class MapContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: null,
            lng: null
        };
    }
    displayMarkers = () => {
        return this.state.venues.map((venue, index) => {
            return (
                <Marker
                    key={index}
                    id={index}
                    position={{
                        lat: venue.lat,
                        lng: venue.lng
                    }}
                    onClick={() => console.log(this.state.venues)}
                />
            );
        });
    };
    componentDidMount() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {

                console.log("Latitude is :", position.coords.latitude);
                console.log("Longitude is :", position.coords.longitude);
                this.setState({ lat: position.coords.latitude, lng: position.coords.longitude })


            });


        } else {
            console.log("Not Available");
        }
    }
    render() {
        return (
            this.state.lat &&
            < Map
                google={this.props.google}
                zoom={17}
                style={mapStyles}
                initialCenter={{ lat: this.state.lat, lng: this.state.lng }}
            >
                <Marker
                    position={{
                        lat: this.state.lat,
                        lng: this.state.lng
                    }}

                    onClick={() => console.log(this.state.venues)}>
                </Marker>
            </Map >
        );
    }
}

export default GoogleApiWrapper({
    apiKey: apiMaps
})(MapContainer);