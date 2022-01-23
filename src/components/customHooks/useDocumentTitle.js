import { useEffect } from "react"

const useDocumentTitle = title => {
    useEffect(() => document.title = title);
}

export default useDocumentTitle;