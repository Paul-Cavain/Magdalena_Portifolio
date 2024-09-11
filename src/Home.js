import { BsClock } from "react-icons/bs";
import About from "./About";
import Contact from "./Contact";
import Service from "./Service";

const Home = () => {
    
    return (
        <main className="">

            <section className="static">
                <div className="">
                    <img src="../img/red.jpg" alt="my photo" className="w-screen h-[100vh] md:h-[100vh] bg-cover" />
                </div>
                <div className="absolute top-0 px-4 md:px-32 mt-28 md:mt-40 text-white flex flex-col-reverse md:flex-row">
                    <div className="md:mt-48 mt-5 mx-2">
                        <div>
                            <h3 className="uppercase font-black text-2xl md:text-3xl">I`M Magdalena Chubwa</h3>
                        </div>
                        <hr className="w-10 border-rose-600 my-6 border-2" />
                        <div className="">
                            <p>In a professional context it often happens that private clients corder a publication to be made.</p>
                        </div>
                        <div className="mt-3 md:mt-8">
                            <button className="bg-rose-600 w-24 h-10 rounded-sm text-white transition ease-out hover:bg-black hover:text-white">Learn More</button>
                        </div>
                    </div>
                    
                    <div className='flex justify-center md:justify-end'>
                        <img src="../img/cpu.jpg" alt="Portfolio image" className='rounded-full ring-1 ring-gray-300 w-2/3 h-auto'/>
                    </div>  
                </div>
            </section>

            {/* about section */}
            <section id="About" className="mx-4">
                <About />
            </section>

            {/* service section */}
            <section id="Service" className="pt-24 mx-4">
                <Service />
            </section>

            {/* contact section */}
            <section id="Contact" className="pt-24 mx-4">
                <Contact />
            </section>
        </main>
    );
}

export default Home;
