import NavigationMenu from '../components/NavigationMenu'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex">
      <NavigationMenu />
      <main className="main-container overflow-hidden bg-white w-full min-h-dvh mt-4 drop-shadow-lg px-6 md:px-14 py-10">
        <Outlet></Outlet>
      </main>
    </div>
  )
}
