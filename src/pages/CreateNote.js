import { useHistory } from "react-router-dom";
import { useState, useRef } from "react";
import Nav from "../Navigation";
import CreateStyle from "../styles/CreateStyle.module.css";

export default function CreateNote() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const currentDate = new Date();
    const navigate = useHistory();

    if (localStorage.getItem("dataKey") == null) {
        localStorage.setItem("dataKey", "[]");
    }

    let noteID =
        currentDate.getMonth() +
        "-" +
        currentDate.getDate() +
        "-" +
        currentDate.getFullYear() +
        "_" +
        Math.floor(Math.random() * 100000);

    const createNotes = e => {
        let newData = {
            id: noteID,
            head: title,
            body: content,
            desc: currentDate.toDateString()
        };

        let parsedStorage = JSON.parse(localStorage.getItem("dataKey"));
        parsedStorage.push(newData);
        localStorage.setItem("dataKey", JSON.stringify(parsedStorage));

        navigate.push("/");
    };

    return (
        <div className={CreateStyle.CreateNote}>
            <Nav />
            <div className={CreateStyle.component}>
                <div className={CreateStyle.title}>
                    <h1>F I L L</h1>
                    <p>The only thing you'll do here.</p>
                </div>
                <form onSubmit={createNotes}>
                    <div className={CreateStyle.inputs}>
                        <input
                            required
                            value={title}
                            onChange={e => setTitle(e.target.value)}
                            placeholder="Enter title"
                            type="text"
                        ></input>
                        <textarea
                            required
                            value={content}
                            onChange={e => setContent(e.target.value)}
                            placeholder="Start typing"
                        ></textarea>
                        <button>Create notes</button>
                    </div>
                </form>
            </div>
        </div>
    );
}
