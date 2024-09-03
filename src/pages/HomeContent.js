import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import removeAll from "../assets/delete_sweep.svg";
import remove from "../assets/delete.svg";
import HomeStyle from "../styles/HomeStyle.module.css";

export default function HomeContent() {
    const parsedStorage = JSON.parse(localStorage.getItem("dataKey"));
    const [isEmpty, setEmpty] = useState(true);

    useEffect(() => {
        if (parsedStorage.length > 1) {
            setEmpty(false);
        }
    }, []);

    const deleteNote = noteID => {
        let dataIndex = parsedStorage.findIndex(data => data.id === noteID);
        let strUpdatedData = parsedStorage.splice(dataIndex, 1);
        localStorage.setItem("dataKey", JSON.stringify(parsedStorage));
        window.location.reload(false);
    };

    const DeleteAll = () => {
        localStorage.setItem("dataKey", "[]");
        window.location.reload(false);
    };

    return (
        <div className={HomeStyle.HomeContent}>
            <div className={HomeStyle.content}>
                <div className={HomeStyle.cont_title}>
                    <h1 className={HomeStyle.cont_h1}>S A V E D</h1>
                    <p className={HomeStyle.cont_p}>
                        All notes was compiled here, check it or leave it !
                    </p>
                </div>
                {parsedStorage.map(notes => (
                    <div className={HomeStyle.preview} key={notes.id}>
                        <Link to={`/notes/${notes.id}`}>
                            <h1 className={HomeStyle.pre_h1}>{notes.head}</h1>
                        </Link>
                        <div className={HomeStyle.right_side}>
                            <p className={HomeStyle.pre_p}>
                                Added : {notes.desc}
                            </p>
                            <img
                                src={remove}
                                onClick={() => deleteNote(notes.id)}
                            />
                        </div>
                    </div>
                ))}
            </div>
            {!isEmpty && (
                <div className={HomeStyle.below_button} onClick={DeleteAll}>
                    <p>Clear</p>
                    <img src={removeAll} />
                </div>
            )}
        </div>
    );
}
