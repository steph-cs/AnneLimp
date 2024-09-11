import NavigationMenu from '../components/NavigationMenu'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="flex">
      <NavigationMenu />
      <main
        style={{ borderStartStartRadius: '5rem' }}
        className="bg-white w-full h-dvh mt-4 drop-shadow-lg ml-3 px-14 py-10"
      >
        <Outlet></Outlet>
      </main>
    </div>
  )
}
