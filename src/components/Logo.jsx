import React from "react";
import logo from "../images/GBFS-Logo-black.svg";
import logoColoured from "../images/GBFS-Logo-coloured.svg";
import CollapsedLogo from "../images/Logo-colapsed.svg";
import { Image } from "./Image";


export default function Logo(props) {
  const { coloured, w, h, isShrink } = props;
  

  const isLogoColoured = () => {
    if (isShrink) {
      return CollapsedLogo;
    }
    if (coloured) {
      return logoColoured;
    }
    return logo;
  };

  return (
    <div>
      <Image width={w} height={h} src={isLogoColoured()} alt="" />
    </div>
  );
}
