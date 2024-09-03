import { useState } from "react";

import Nav from "../Navigation";
import HomeContent from "../pages/HomeContent";
import HomeStyle from "../styles/HomeStyle.module.css";

export default function Home() {
    const [isHaving, setHaving] = useState(true);
    if (localStorage.getItem("dataKey") == null) {
        localStorage.setItem("dataKey", "[]");
        setHaving(false);
    }

    return (
        <div className={HomeStyle.Home}>
            <Nav />
            {isHaving && <HomeContent />}
        </div>
    );
}
