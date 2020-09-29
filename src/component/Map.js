import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
 
class Maps extends Component{
    render(){
        const mapStyles = {
            width: '100%',
            height: '100%',
          };
        return(
            <div>
                <Map
                google={this.props.google}
                zoom={15}
                initialCenter={{lat: 37.5, lng : 127}}
                style={mapStyles}
                >
                </Map>
            </div>
        );
    }
}
  export default GoogleApiWrapper({
    apiKey: '..'
  })(Maps)