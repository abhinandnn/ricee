import Header from "@/components/Header"
import TopBanner from "@/components/TopBanner"
import Share from "@/components/share"
import About from "@/components/about"
import Footer from "@/components/footer"
import Products from "@/components/Products"
import Review from "@/components/review"
export default function Home() {
  return (
    <div className="font-gd font-light relative scroll-smooth">
    <Header/>
    <TopBanner/>
    <Products/>
    <Share/>
    <About/>
    <Review/>
    <Footer/>
    </div>
  )
}
