import { ComponentPropsWithoutRef } from "react"

export const VuetifyIcon = (props: ComponentPropsWithoutRef<"svg"> & {size?: number}) => {
    return (
        <svg 
            width={props.size} 
            height={props.size}
            viewBox="0 0 256 222" 
            version="1.1" 
            xmlns="http://www.w3.org/2000/svg" 
            preserveAspectRatio="xMidYMid"
            {...props}
            >
    <title>Vuetify</title>
    <g>
        <polygon fill="#1697F6" points="130.710957 49.5638261 79.6681739 137.991652 128 221.754435 192.014609 110.877217 256 0 159.307826 0"></polygon>
        <polygon fill="#AEDDFF" points="64.0145391 110.877217 67.3668174 116.708174 115.11513 33.9657739 134.733913 0 128 0 0 0"></polygon>
        <path d="M159.307826,0 C183.502609,79.6229565 128,221.754435 128,221.754435 L79.6681739,137.991652 L159.307826,0 Z" fill="#1867C0"></path>
        <path d="M134.733913,0 C32.7948522,0 67.3673043,116.708174 67.3673043,116.708174 L134.733913,0 Z" fill="#7BC6FF"></path>
    </g>
</svg>


);
};