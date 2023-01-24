import { useEffect, useState } from "react";

export const clamp = (value) => Math.max(0, value);

export const isBetween = (value, floor, ceil) => 
    value >= floor && value <= ceil;


export const useScrollspy = (ids, offset = 0) =>  {
    const [activeId, setActiveId] = useState("");

    useEffect(() => {
        const listener = () => {
            const scroll = window.pageXOffset;

            const position =ids
            .map((id) => {
                const element = document.getElementById(id);

                if(!element) return {id, top : -1, bottom : -1};

                const rect = element.getBoundingClientRect();
                const top = clamp(rect.top + scroll - offset);
                const bottom = clamp(rect.bottom + scroll - offset);

                return {id, top, bottom};
            })
            .find(({top, bottom}) => isBetween(scroll, top, bottom));

            setActiveId(position?.id || "")
        }
        
        listener();

        window.addEventListener("resize", listener);
        window.addEventListener("scroll", listener);

        return () => {
            window.addEventListener("resize", listener);
            window.addEventListener("scroll", listener);
        }
    }, [ids, offset])

    return activeId;
}