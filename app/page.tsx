import Navbar from "@/components/Navbar";
import Body from "@/components/Body";
import Footer from "@/components/Footer";

export default  function Home(){
    return(
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Navbar/>
            <Body/>
            <Footer/>

        </main>
    )
}