import React, { Component } from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

class GoogleMap extends Component {
  // const style = {
  //  width: '100%',
  //  height: '100%'
  // }
  render() {
    return (
      <div>
        <Map
          google={this.props.google}
          // style={style}
          center={{
            lat: 53.899189,
            lng: 30.336523,
          }}
          zoom={18}
          onClick={this.onMapClicked}
        >
          <Marker
            style={{ width: "80%", height: "80%", position: "relative" }}
            title={"Чистовик"}
            name={"Чистовик"}
            position={{ lat: 53.899189, lng: 30.336523 }}
          />
          <InfoWindow onClose={this.onInfoWindowClose}></InfoWindow>
        </Map>
      </div>
    )
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCpWBDaMHCJ_2a7RxbuY0mxS044KQzLsKo",
})(GoogleMap)

// const key = AIzaSyCpWBDaMHCJ_2a7RxbuY0mxS044KQzLsKo;
