interface Place {
  title: string;
  placeName: string;
  countryName: string;
  img: string;
  altMsg: string;
  mapLink: string;
  description: string;
}

function PlaceData(props: Place): JSX.Element {
  return (
    <>
      <img src={props.img} alt={props.altMsg} width={500} height={600} />
      <h1>{props.title}</h1>
      <h3>
        {props.placeName}, {props.countryName} (
        <a href={props.mapLink}>map link</a>)
      </h3>
      <p>{props.description}</p>
    </>
  );
}

export default PlaceData;
