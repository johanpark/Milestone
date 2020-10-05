import { GoogleApiWrapper, InfoWindow, Map, Marker } from "google-maps-react";
import React from "react";

class FindAddressPresenter extends React.Component {
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
      <div className={"FindAddressPresenter"}>
        <Map
          google={this.props.google}
          zoom={14}
          center={{
            lat,
            lng
          }}
          initialCenter={{
            lat,
            lng
          }}
        >
          <Marker name={"Current location"} />
          <InfoWindow>
            <div>
              <h1>test</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }

   successGetCurrentPosition = position => {
    this.setState({
      ...this.state,
      lat: position.coords.latitude,
      lng: position.coords.longitude,
      loading: false
    });
  };
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyA07KpTijPFrEBp3vMgSNQjtZrqNYeSgXk'
})(FindAddressPresenter);