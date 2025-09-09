import { Header } from "./components/layout/Header";
import { Hero } from "./components/sections/Hero";



export function App() {

  return (
    <div className="bg-[url('./image-hero.jpg')] bg-cover bg-center w-screen min-h-[600px] flex flex-col">
      <div className="lg:max-w-5xl lg:mx-auto w-full">
        <Header />
        <Hero />
      </div>
    </div>
  )
}
