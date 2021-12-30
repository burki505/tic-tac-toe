import { gsap } from "gsap";


export const GsapFunctions = (item,animation,timeline = "to") => {
    if (timeline === "from"){
        gsap.from(item,animation);
    }
    if(timeline === "to"){
        gsap.to(item,animation);
    }
}