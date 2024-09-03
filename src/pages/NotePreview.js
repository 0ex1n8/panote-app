import { useParams } from "react-router-dom";

import PrevStyle from "../styles/PrevStyle.module.css";
import Nav from "../Navigation";

export default function NotePreview() {
    const { id } = useParams();
    const parsedStorage = JSON.parse(localStorage.getItem("dataKey"));
    const dataKey = parsedStorage.find(data => data.id === id);

    return (
        <div className={PrevStyle.NotePreview}>
            <Nav />
            <div className={PrevStyle.preview}>
                <div className={PrevStyle.content}>
                    <div className={PrevStyle.title}>
                        <h1>{dataKey.head}</h1>
                        <p>Created: {dataKey.desc}</p>
                    </div>
                    <p className={PrevStyle.body_p}>{dataKey.body}</p>
                </div>
            </div>
        </div>
    );
}
