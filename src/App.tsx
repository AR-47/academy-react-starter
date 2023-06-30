import Header from "./components/Header";
import Place from "./components/Place";

function App(): JSX.Element {
  return (
    <>
      <Header/>
      <Place
        title="The Grand Canyon"
        placeName="Arizona"
        countryName="USA"
        img='/img/grand-canyon.jpg'
        altMsg="The Grand Canyon"
        mapLink="https://www.google.com/maps/place/Grand+Canyon+Village,+AZ+86023,+USA/@36.0518713,-112.1987788,12z/data=!4m6!3m5!1s0x8733174f95ffe325:0xb8ccc2749a229ea1!8m2!3d36.0544445!4d-112.1401108!16zL20vMHFueHI?entry=ttu"
        description="The Grand Canyon is a steep-sided canyon carved by the Colorado River in Arizona, United States."
      />
    </>
  )
}

export default App;
