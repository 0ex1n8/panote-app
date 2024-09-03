import { Link } from "react-router-dom";

import add from "./assets/write.svg";

import NavStyle from "./styles/NavStyle.module.css";

export default function Navigation() {
    return (
        <div className={NavStyle.Navigation}>
            <div className={NavStyle.title}>
                <Link to="/">
                    <h1>P A N O T E</h1>
                </Link>
            </div>
            <div className={NavStyle.btn}>
                <button>
                    <Link to="/create">Create</Link>
                    <img src={add} />
                </button>

                <div className={NavStyle.bg}>
                    <Link to="/create">
                        <img className={NavStyle.but} src={add} />
                    </Link>
                </div>
            </div>
        </div>
    );
}
