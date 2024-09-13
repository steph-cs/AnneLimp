import NavigationMenu from '../components/NavigationMenu'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex">
      <NavigationMenu />
      <main className="main-container bg-white w-full min-h-dvh mt-4 drop-shadow-lg px-14 py-10">
        <Outlet></Outlet>
      </main>
    </div>
  )
}
