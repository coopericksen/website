import { type Project } from "../types/types";

import '../styles/Card.css';

function Card(props: Project) {
    return (
        <a className="card" href={props.href}>
            <h1>{props.title}</h1>
            <h5>{props.description}</h5>
        </a>
    )
}

export default Card;