import {Button, Card} from "antd";
import {Link} from "react-router-dom";

const {Meta} = Card;

export default function Building({id, name, imageUrl}){
    return (
        <Card className="" cover={<img className="h-[220px]" alt="example" src={`${imageUrl}`} />}>
            <Meta title="Europe Street beat" />
            <Link to={`/buildings/${id}/jobs`}>
                <Button type="primary" style={{marginTop:'20px'}}>Buildings</Button>
            </Link>

        </Card>
    );
}