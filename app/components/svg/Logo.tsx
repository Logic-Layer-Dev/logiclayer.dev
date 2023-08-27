import React from "react";
import Image from "next/image";

interface LogoProps {
  width?: number;
  height?: number;
}

const Logo: React.FC<LogoProps> = ({ width = 640, height = 832 }) => {
    return (
        <Image
            className={`w-${width} h-${height}`}
            src="/LogicLayerB.png"
            alt="Logo"
            width={width}
            height={height}
        />
    );
};

export default Logo;
