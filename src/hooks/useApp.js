import {useContext} from "react"
import {AppContext} from "context/app"

const useApp = () => {
    const appCtx = useContext(AppContext)
    return appCtx
}

export default useApp
