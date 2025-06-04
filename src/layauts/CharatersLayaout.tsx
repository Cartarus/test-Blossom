import { Outlet } from "react-router"
import { SideBar } from "../components/SideBar"
import type { RootState } from "../store/store"
import { useSelector } from "react-redux"

export const CharatersLayaout = () => {
  const isOpen = useSelector((state: RootState) => state.characters.isOpen)
  return (
    <div className="flex h-auto lg:h-screen bg-white " >
     <SideBar />
      <main className={`${isOpen ? "hidden lg:block" : "block"} flex-1 p-6 `} style={{boxShadow: '0px 4px 60px 0px rgba(0, 0, 0, 0.05)'}}>
        <Outlet />
      </main>
    </div>
  )
}
