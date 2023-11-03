import React from "react";
import {ComponentPreview, Previews} from "@react-buddy/ide-toolbox-next";
import {PaletteTree} from "./palette";
import SideNav from "@/app/ui/dashboard/sidenav";

const ComponentPreviews = () => {
    return (
        <Previews palette={<PaletteTree/>}>
            <ComponentPreview path="/SideNav">
                <SideNav/>
            </ComponentPreview>
        </Previews>
    );
};

export default ComponentPreviews;