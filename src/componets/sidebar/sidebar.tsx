import React, { useContext } from "react"
import { AppContext, IAppContext } from "../../appcontent/appcontent"
import { TNote } from "../note/note";

function Sidebar() {
    const { jsonData, setJsonData } = useContext(AppContext) as IAppContext;

    return (
        <div className="sidebar">
            <h2>Lista Note</h2>
            <ul id="note-list">
                {jsonData?.map((item) => (
                <div>
                    <p>Titolo: {item.title}</p>
                    <p>Body: {item.body}</p>
                </div>
                ))}
            </ul>
            </div>
    )
}
export default Sidebar