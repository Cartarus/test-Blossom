import { Outlet } from "react-router"
import { SideBar } from "../components/SideBar"





export const CharatersLayaout = () => {
  return (
    <div className="flex h-screen bg-white " >
     <SideBar />
      <main className="flex-1 p-6 " style={{boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.05)'}}>
        <Outlet />
      </main>
    </div>
  )
}
