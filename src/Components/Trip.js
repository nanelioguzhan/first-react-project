export default function Trip(props) {
    return (
        <>
            <div className="trip-container">
                <img src={props.trip.img}
                alt="city" />
                <div className="info-div">
                    <div className="country-div">
                        <h5><i className="fa-solid fa-location-dot"></i>{props.trip.country}</h5>
                        <a href={props.trip.gps} target="_blank">
                            <p>
                                View on Google Maps
                            </p>
                        </a> 
                    </div>
                    <h1>{props.trip.destination}</h1>
                    <p className="date"><strong>{props.trip.date}</strong></p>
                    <p>{props.trip.info}</p>
                </div>
            </div>
        </>
    )
}