import Header from "@/components/Header"
import TopBanner from "@/components/TopBanner"

import Share from "@/components/share"
import About from "@/components/about"
import Footer from "@/components/footer"
import Review from "@/components/review"
import Products from "@/components/Products"

export default function Home() {
  return (
    <div className="font-gd font-light relative">
    <Header/>
    <TopBanner/>
 
    <Share/>
    <About/>
    <Review/>
    <Footer/>


   

    </div>
  )
}
