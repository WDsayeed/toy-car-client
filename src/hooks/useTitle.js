import { useEffect } from "react"

const useTitle = title =>{
        useEffect(()=>{
                document.title = `TC Hub | ${title}`
        },[title])
}
export default useTitle