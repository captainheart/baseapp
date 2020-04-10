import * as React from 'react';

export const AvatarIcon = ({fillColor}) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12.1807 20.4697C9.30566 20.4697 6.76416 18.9977 5.28066 16.7897C5.31516 14.4897 9.88066 13.2247 12.1807 13.2247C14.4807 13.2247 19.0462 14.4897 19.0807 16.7897C17.5972 18.9977 15.0557 20.4697 12.1807 20.4697ZM12.1807 4.1397C13.0957 4.1397 13.9732 4.50318 14.6202 5.15018C15.2672 5.79718 15.6307 6.6747 15.6307 7.5897C15.6307 8.50469 15.2672 9.38222 14.6202 10.0292C13.9732 10.6762 13.0957 11.0397 12.1807 11.0397C11.2657 11.0397 10.3881 10.6762 9.74115 10.0292C9.09414 9.38222 8.73066 8.50469 8.73066 7.5897C8.73066 6.6747 9.09414 5.79718 9.74115 5.15018C10.3881 4.50318 11.2657 4.1397 12.1807 4.1397ZM12.1807 0.689697C10.6705 0.689697 9.17505 0.987154 7.7798 1.56508C6.38456 2.14301 5.11681 2.9901 4.04894 4.05797C1.89227 6.21464 0.680664 9.13971 0.680664 12.1897C0.680664 15.2397 1.89227 18.1648 4.04894 20.3214C5.11681 21.3893 6.38456 22.2364 7.7798 22.8143C9.17505 23.3922 10.6705 23.6897 12.1807 23.6897C15.2307 23.6897 18.1557 22.4781 20.3124 20.3214C22.4691 18.1648 23.6807 15.2397 23.6807 12.1897C23.6807 5.8302 18.5057 0.689697 12.1807 0.689697Z" fill={fillColor}/>
        </svg>
    );
};

export const CloseIcon = ({fillColor}) => {
    return (
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.655151 1.34485L4.99998 5.34485L9.34481 1.34485" stroke={fillColor}/>
        </svg>
    );
};

export const OpenIcon = ({fillColor}) => {
    return (
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.34479 5.34485L4.99996 1.34485L0.655132 5.34485" stroke={fillColor}/>
        </svg>
    );
};

export const OpenUserMenu = () => {
    return (
        <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.680664 1.03455L5.02549 5.03455L9.37032 1.03455" stroke="#648280"/>
        </svg>

    );
};

export const USDIcon = () => {
    return (
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.5" cx="10" cy="10" r="9.5" stroke="white"/>
            <path d="M10.6661 14.3749V13.5433C11.8851 13.3921 12.575 12.655 12.575 11.6439C12.575 10.6611 11.9796 10.1319 10.6094 9.82945V7.8922C11.148 7.97725 11.526 8.24185 11.8001 8.60095L12.4994 8.0245C12.0647 7.46695 11.4693 7.12675 10.6661 7.05115V6.229H9.86283V7.05115C8.71938 7.174 8.00118 7.78825 8.00118 8.78995C8.00118 9.7444 8.57763 10.3114 9.92898 10.6044V12.7212C9.33363 12.6456 8.88003 12.3432 8.49258 11.8707L7.80273 12.4944C8.27523 13.0614 8.90838 13.4866 9.86283 13.5622V14.3749H10.6661ZM11.5827 11.71C11.5827 12.2298 11.2236 12.6078 10.6094 12.7117V10.7461C11.3465 10.9351 11.5827 11.2375 11.5827 11.71ZM8.98398 8.7427C8.98398 8.2702 9.33363 7.9678 9.92898 7.88275V9.67825C9.28638 9.4987 8.98398 9.26245 8.98398 8.7427Z" fill="white"/>
            <path d="M10.6661 14.3749V13.5433C11.8851 13.3921 12.575 12.655 12.575 11.6439C12.575 10.6611 11.9796 10.1319 10.6094 9.82945V7.8922C11.148 7.97725 11.526 8.24185 11.8001 8.60095L12.4994 8.0245C12.0647 7.46695 11.4693 7.12675 10.6661 7.05115V6.229H9.86283V7.05115C8.71938 7.174 8.00118 7.78825 8.00118 8.78995C8.00118 9.7444 8.57763 10.3114 9.92898 10.6044V12.7212C9.33363 12.6456 8.88003 12.3432 8.49258 11.8707L7.80273 12.4944C8.27523 13.0614 8.90838 13.4866 9.86283 13.5622V14.3749H10.6661ZM11.5827 11.71C11.5827 12.2298 11.2236 12.6078 10.6094 12.7117V10.7461C11.3465 10.9351 11.5827 11.2375 11.5827 11.71ZM8.98398 8.7427C8.98398 8.2702 9.33363 7.9678 9.92898 7.88275V9.67825C9.28638 9.4987 8.98398 9.26245 8.98398 8.7427Z" stroke="white"/>
        </svg>
    );
};

export const EURIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.5" cx="9" cy="9" r="8.5" stroke="white"/>
            <path d="M9.31702 12.7133C10.5455 12.7133 11.2165 12.0896 11.6039 11.3525L10.8101 10.7949C10.5266 11.4375 10.0258 11.825 9.31702 11.825C8.47597 11.825 7.89952 11.2958 7.72942 10.4358H10.0352V9.70818H7.68217V8.89548H10.0352V8.16783H7.72942C7.89952 7.32678 8.47597 6.77868 9.31702 6.77868C10.0069 6.77868 10.4794 7.14723 10.744 7.74258L11.5378 7.20393C11.122 6.43848 10.4794 5.89038 9.31702 5.89038C7.62547 5.89038 6.55762 7.11888 6.55762 9.30183C6.55762 11.4848 7.62547 12.7133 9.31702 12.7133Z" fill="white"/>
        </svg>
    );
};

export const RUBIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.5" cx="9" cy="9" r="8.5" stroke="white"/>
            <path d="M10.4142 11.4566V10.6533H8.06118V9.80281H9.75273C10.9529 9.80281 11.6616 9.09406 11.6616 7.90336C11.6616 6.71266 10.9529 6.00391 9.75273 6.00391H6.99333V8.99956H6.20898V9.80281H6.99333V10.6533H6.20898V11.4566H6.99333V12.6H8.06118V11.4566H10.4142ZM8.06118 6.90166H9.67713C10.2252 6.90166 10.5371 7.18516 10.5371 7.71436V8.18686C10.5371 8.71606 10.2252 8.99956 9.67713 8.99956H8.06118V6.90166Z" fill="white"/>
        </svg>
    );
};

export const CNYIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.5" cx="9" cy="9" r="8.5" stroke="white"/>
            <path d="M10.4142 11.4566V10.6533H8.06118V9.80281H9.75273C10.9529 9.80281 11.6616 9.09406 11.6616 7.90336C11.6616 6.71266 10.9529 6.00391 9.75273 6.00391H6.99333V8.99956H6.20898V9.80281H6.99333V10.6533H6.20898V11.4566H6.99333V12.6H8.06118V11.4566H10.4142ZM8.06118 6.90166H9.67713C10.2252 6.90166 10.5371 7.18516 10.5371 7.71436V8.18686C10.5371 8.71606 10.2252 8.99956 9.67713 8.99956H8.06118V6.90166Z" fill="white"/>
        </svg>

    );
};

export const AEDIcon = () => {
    return (
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.5" cx="9" cy="9" r="8.5" stroke="white"/>
            <path d="M4.65114 10.7999H5.87964C6.95694 10.7999 7.58064 10.1762 7.58064 9.13668C7.58064 8.31453 7.27824 7.72863 6.45609 6.84033L5.58669 5.89533L4.82124 6.67023L5.78514 7.66248C6.49389 8.34288 6.74904 8.72088 6.74904 9.09888C6.74904 9.45798 6.56004 9.73204 5.97414 9.73204H4.46214V9.06108H3.62109V9.75094C3.62109 10.4597 4.01799 10.7999 4.65114 10.7999Z" fill="white"/>
            <path d="M9.30364 10.9133C9.76669 10.9133 9.99349 10.6392 9.99349 10.2707V10.1289C9.99349 9.76039 9.76669 9.48633 9.30364 9.48633C8.84059 9.48633 8.61379 9.76039 8.61379 10.1289V10.2707C8.61379 10.6392 8.84059 10.9133 9.30364 10.9133Z" fill="white"/>
            <path d="M10.7782 13.2852H12.8478V12.5765H12.1957C11.7705 12.5765 11.5342 12.4442 11.5342 12.1985C11.5342 12.0378 11.6854 11.915 11.9122 11.915C12.0823 11.915 12.2524 12 12.3847 12.1323L12.7816 11.622C12.5832 11.3763 12.2335 11.2157 11.9122 11.2157C11.3736 11.2157 10.9767 11.5937 10.9767 12.0945C10.9767 12.2741 11.0428 12.4631 11.1562 12.5859L11.1468 12.6332H10.7782V13.2852ZM11.3263 10.7999H12.2052V3.80688H11.3263V10.7999Z" fill="white"/>
        </svg>
    );
};

export const DownloadIcon = () => {
    return (
        <svg width="15" height="15" viewBox="0 0 10 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.08301 4.25H6.74967V0.75H3.24967V4.25H0.916341L4.99967 8.91667L9.08301 4.25ZM0.333008 10.0833H9.66634V11.25H0.333008V10.0833Z" fill="#FFD541"/>
        </svg>

    );
};

export const UserIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 20.64C9 20.64 6.348 19.104 4.8 16.8C4.836 14.4 9.6 13.08 12 13.08C14.4 13.08 19.164 14.4 19.2 16.8C17.652 19.104 15 20.64 12 20.64ZM12 3.6C12.9548 3.6 13.8705 3.97929 14.5456 4.65442C15.2207 5.32955 15.6 6.24522 15.6 7.2C15.6 8.15478 15.2207 9.07045 14.5456 9.74559C13.8705 10.4207 12.9548 10.8 12 10.8C11.0452 10.8 10.1295 10.4207 9.45442 9.74559C8.77928 9.07045 8.4 8.15478 8.4 7.2C8.4 6.24522 8.77928 5.32955 9.45442 4.65442C10.1295 3.97929 11.0452 3.6 12 3.6ZM12 0C10.4241 0 8.86371 0.310389 7.4078 0.913446C5.95189 1.5165 4.62902 2.40042 3.51472 3.51472C1.26428 5.76516 0 8.8174 0 12C0 15.1826 1.26428 18.2348 3.51472 20.4853C4.62902 21.5996 5.95189 22.4835 7.4078 23.0866C8.86371 23.6896 10.4241 24 12 24C15.1826 24 18.2348 22.7357 20.4853 20.4853C22.7357 18.2348 24 15.1826 24 12C24 5.364 18.6 0 12 0Z" fill="#FFD541"/>
        </svg>
    );
};

export const LeftMenuIcon = () => {
    return (
        <svg width="20" height="14" viewBox="0 0 20 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 13C12 13.5523 11.5523 14 11 14L1 14C0.447715 14 -6.78525e-08 13.5523 -4.37114e-08 13C-1.95702e-08 12.4477 0.447715 12 1 12L11 12C11.5523 12 12 12.4477 12 13Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 7C20 7.55228 19.5523 8 19 8L1 8C0.447716 8 -6.78525e-08 7.55228 -4.37114e-08 7C-1.95703e-08 6.44771 0.447716 6 1 6L19 6C19.5523 6 20 6.44772 20 7Z" fill="white"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 1C20 1.55228 19.5523 2 19 2L1 2C0.447716 2 -6.78525e-08 1.55228 -4.37114e-08 0.999999C-1.95703e-08 0.447714 0.447716 -3.30121e-07 1 -3.0598e-07L19 -4.37114e-08C19.5523 -1.95703e-08 20 0.447715 20 1Z" fill="white"/>
        </svg>

    );
};

export const RightMenuIcon = () => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle opacity="0.5" cx="12" cy="12" r="11.5" stroke="white"/>
            <path d="M11.9997 20.8984C9.23044 20.8984 6.78244 19.4806 5.35352 17.3538C5.38675 15.1384 9.78428 13.92 11.9997 13.92C14.2151 13.92 18.6126 15.1384 18.6458 17.3538C17.2169 19.4806 14.7689 20.8984 11.9997 20.8984ZM11.9997 5.16919C12.881 5.16919 13.7262 5.5193 14.3494 6.1425C14.9726 6.76569 15.3227 7.61093 15.3227 8.49227C15.3227 9.3736 14.9726 10.2188 14.3494 10.842C13.7262 11.4652 12.881 11.8153 11.9997 11.8153C11.1183 11.8153 10.2731 11.4652 9.6499 10.842C9.0267 10.2188 8.67659 9.3736 8.67659 8.49227C8.67659 7.61093 9.0267 6.76569 9.6499 6.1425C10.2731 5.5193 11.1183 5.16919 11.9997 5.16919Z" fill="white"/>
        </svg>
    );
};
