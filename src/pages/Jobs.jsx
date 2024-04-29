import {Card, Typography} from 'antd';
import {useLoaderData} from "react-router-dom";
import Building from "../components/Building.jsx";

export default function JobsPage() {
    const {buildings} = useLoaderData();

    return (
        <div className="grid grid-cols-4 gap-4">
            {buildings.map((building) => {
                console.log(building)
                return <Building key={building.id} id={building.id} name={building.name} image={building.imageUrl} />
            })}
        </div>
    );
}

export async function jobsLoader({params}) {
    const buildingId = params.buildingId;

    const response = await fetch('http://localhost:8000/api/v1/building/'+buildingId);
    if (response.ok === 200) {
        throw {message: "Could not Fetch Jobs. "}
    } else {
        return response;
    }
}