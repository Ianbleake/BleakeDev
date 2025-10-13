import React from "react";
import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"
import SideHeader from "./components/sideHeader";
import SideMenu from "./components/sideMenu";
import SideFooter from "./components/sideFooter";

export default function Dashbar(): React.ReactElement {

  return (
    <Sidebar collapsible="icon">

      <SideHeader/>

      <SidebarContent>
        <SideMenu/>
      </SidebarContent>

      <SideFooter/>
      
    </Sidebar>
  )
}