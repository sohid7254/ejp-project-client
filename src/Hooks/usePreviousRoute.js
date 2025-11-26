"use-client"

import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react";

export default function usePreviousRoute () {
 const pathname = usePathname();
 const [previousPath, setPreviousPath] = useState(null);
 const previousPathRef = useRef(null)

useEffect(()=> {
    setPreviousPath(previousPathRef.current)
    previousPathRef.current = pathname;
}, [pathname]);

return previousPath.current

}