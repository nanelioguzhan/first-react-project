import Navbar from "../src/Components/Navbar"
import Trip from "../src/Components/Trip"
import data from "./data"


export default function App() {
    const travel = data.map(trip => { 
        return (
            <Trip
                key = {trip.id}
                trip = {trip}
            />
        )
    })
    
    return (
        <>
            <Navbar />
            {travel}
        </>
    )
}