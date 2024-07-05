import React from 'react';

const SvgHexagon = ({ image, id }) => (
    <svg
        width="100"
        height="115"
        viewBox="0 0 100 115"
        xmlns="http://www.w3.org/2000/svg"
    >
        <defs>
            <pattern id={`hexPattern-${id}`} patternUnits="userSpaceOnUse" width="100" height="115">
                {image && <image href={image} x="0" y="0" width="100" height="115" preserveAspectRatio="xMidYMid slice" />}
            </pattern>
        </defs>
        <polygon
            points="50,0 100,28.87 100,86.13 50,115 0,86.13 0,28.87"
            fill={image ? `url(#hexPattern-${id})` : "grey"}
        />
    </svg>
);

export default SvgHexagon;
