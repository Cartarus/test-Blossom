import { SearchSideBar } from './SideBar/SearchSideBar'
import { StarredCharacters } from './SideBar/StarredCharacters'
import { Characters } from './SideBar/Characters'

export const SideBar = () => {
  return (
    <aside className="w-[375px]  p-6 flex flex-col">
    <h2 className="text-3xl font-light mb-6 ">Rick and Morty list</h2>
    <SearchSideBar />
    <StarredCharacters />
    <Characters />
    {/* Aquí puedes agregar el contenido del sidebar, como la lista de personajes */}
  </aside>
  )
}
