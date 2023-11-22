import { createContext } from "react"
import {io} from "socket.io-client"
export default createContext(io("http://localhost:3000"))
