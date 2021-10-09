import Meta from '../components/meta'
import Header from '../components/header'
import Wallpaper from './wallpaper'
import Footer from '../components/footer'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <Header />
      <Wallpaper />
      <main>{children}</main>
      <Footer />
    </>
  )
}
