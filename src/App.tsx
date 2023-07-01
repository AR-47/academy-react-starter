import Header from "./components/Header";
import Place from "./components/Place";
import PlaceSection from "./components/PlaceSection";
import placeArray from "./placeArray";
import PlaceObject from "./types";


function createPlaceSection(placeObject: PlaceObject) {
  return <PlaceSection
    title= {placeObject.title}
    placeName= {placeObject.placeName}
    countryName= {placeObject.countryName}
    img= {placeObject.img}
    altMsg= {placeObject.altMsg}
    mapLink= {placeObject.mapLink}
    description= {placeObject.description}
  />
}

function App(): JSX.Element {

  return (
    <>
      <Header />
      {placeArray.map(createPlaceSection)}
    </>
  );
}

export default App;
