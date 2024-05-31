import { createContext } from "react";
import {TNote} from "../componets/note/note";

export interface IAppContext {
    jsonData: TNote[] | undefined,
    setJsonData: (args: TNote[]) => void
}

export const AppContext = createContext<IAppContext | null>(null);