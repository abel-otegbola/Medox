import { SVGProps } from "react";

const CirclesIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg 
        width="80" 
        height="32" 
        viewBox="0 0 80 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        {...props}
        >
        <circle cx="16" cy="16" r="16" fill="currentColor"/>
        <ellipse cx="42" cy="16" rx="10" ry="16" fill="currentColor"/>
        <ellipse cx="60" cy="16" rx="8" ry="16" fill="currentColor"/>
        <ellipse cx="74" cy="16" rx="6" ry="16" fill="currentColor"/>
    </svg>
)

export default CirclesIcon;