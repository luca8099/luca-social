import"./Head.css"
import React, { useContext, useEffect, useState } from "react";

import { AppContext, IAppContext } from "../appcontent/appcontent";



export function Head() {
    const [textContent, setTextContent] = useState<string>('')
    const [titleContent, setTitleContent] = useState<string>('')
    
    const { jsonData, setJsonData } = useContext(AppContext) as IAppContext
    
    function handleSave() {
        if(jsonData) {
            const obj = {
                userId: 99,
                id: 99,
                title: titleContent,
                views: 0,
                body: ""
            }
         
            jsonData.push(obj)
            setJsonData([...jsonData])
        }
    }
    return (
        <div id='topbar'>
            <h1>Inserisci una post</h1>
    <div className="input-container">
            <input type="text" id="phrase" name="phrase" placeholder="Inserisci una post" value={titleContent}
                onChange={(e) => setTitleContent(e.target.value)}></input>
            <button id="save" onClick={() => handleSave()}>Invia</button>
    </div>
        </div>
    );
}

