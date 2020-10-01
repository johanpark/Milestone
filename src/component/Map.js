import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
        
class Maps extends React.Component{
    render(){
        const mapStyles = {
            width: '100%',
            height: '100%',
          };
        
        let positionstate ={
          lat : 0,
          lng : 0,
         
        };

       componentDidMount = () =>{
          if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(successGetCurrentPosition);
          }else{
            console.log("Fail");
          }
        };
      const successGetCurrentPosition = (position) => {
        let setpositionstate =() =>{
          ...positionstate,
          lat : position.coords.latitude,
          lng : position.coords.longitude,
          
        };
      };
        return(
            <div className={"FindAddressPresenter"}>
                <Map
                google={this.props.google}
                zoom={15}
                center={{positionstate}}
                initialCenter={{positionstate}}
                style={mapStyles}
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
    
}
  export default GoogleApiWrapper({
    apiKey: '..'
  })(Maps)
