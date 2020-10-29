import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import React from "react";
import Twitt from "../routes/Twitt";

class FindAddressPresenter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    }
    // binding this to event-handler functions
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }
  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }
  onMapClick = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  }


   state = {
    lat: 0,
    lng: 0,
    loading: true
  };
  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.successGetCurrentPosition);
    } else {
      console.log("Geolocation is not supported by this browser");
    }
  }

   render() {
    const { lat, lng, loading } = this.state;
   
   
     if (loading) {
      return "loading...";
    }

    
    
    return (
      <div className={"FindAddressPresenter"} id="map">
        <Map
          google={this.props.google}
          zoom={14}
          center={{ lat, lng }}
          initialCenter={{ lat, lng }}
        >
        <Marker
          onClick = { this.onMarkerClick }
          title = { 'Changing Colors Garage' }
          position = {{ lat, lng }}
          name = { 'Changing Colors Garage' }
        />
        <InfoWindow
          marker = { this.state.activeMarker }
          visible = { this.state.showingInfoWindow }
        >
              Changing Colors Garage
              98G Albe Dr Newark, DE 19702 <br />302-293-8627
           <Twitt />
        </InfoWindow>
        </Map>
      </div>
    );
  }

   successGetCurrentPosition = position => {
     console.log("lat :" + position.coords.latitude);
     console.log("lng : " + position.coords.longitude);
    this.setState({
      ...this.state,
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      loading: false,
      
    });
  };
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA07KpTijPFrEBp3vMgSNQjtZrqNYeSgXk'
})(FindAddressPresenter);


