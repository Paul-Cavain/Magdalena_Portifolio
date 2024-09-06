import resume from "./resume.pdf";
import { FaGifts, FaHeadphones, FaLightbulb } from "react-icons/fa";


const About = () => {
    return(
        <section id="About" className="pt-20">
            <div className=''>
                <h3 className='text-center text-2xl md:text-3xl'>About Me</h3>
                <p className='text-center text-lg md:text-xl'>My Introduction</p>

                <div className='flex flex-col md:flex-row justify-center md:space-x-3 pt-8'>
                    <div className='flex md:flex-wrap justify-center'>
                        <div className='md:px-10 md:mt-3 px-10'>
                            <img src="../img/foto.jpg" width={600} height={100} alt="Portfolio image" className='mt-4 md:mb-40 rounded-full ring-1 ring-gray-300'/>
                        </div>
                    </div>

                    <div className="flex flex-col md:px-32">
                    
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 pt-10 px-4 md:px-0">

                            <div className="bg-black w-full px-8 py-8 md:py-4 rounded-md">
                            <span className="flex justify-center">
                                <FaLightbulb className="text-3xl text-white"/>
                            </span>
                            <div className="flex flex-col mt-2 text-center text-white">
                                <span className="text-xl">Experience</span>
                                <span>4+ Years</span>
                            </div>
                            </div>

                        <div className="bg-black w-full px-8 py-8 md:py-4 rounded-md">
                        <span className="flex justify-center">
                            <FaGifts className="text-3xl text-white"/>
                        </span>
                        <div className="flex flex-col mt-2 text-center text-white">
                            <span className="text-xl">Complete</span>
                            <span>4+</span>
                        </div>
                        </div>

                        <div className="bg-black w-full px-8 py-8 md:py-4 rounded-md">
                        <span className="flex justify-center">
                            <FaHeadphones className="text-3xl text-white"/>
                        </span>
                        <div className="flex flex-col mt-2 text-center text-white">
                            <span className="text-xl">Support</span>
                            <span>9+</span>
                        </div>
                        </div>
                        </div>

                        <div className="mt-12 px-4 md:px-0">
                            <div className="">
                                <p>A Pasionated Front End developer, I create Web Pages with UI/UX user interface, mobile applications for both Android and iOS.</p>
                            </div>
                            <div className="mt-6">
                                <a href={resume} download={"Paulo Nkelego Resume"}>
                                    <button type="button" name="download_cv" className="w-34 px-4 rounded-md text-white bg-black text-center h-10 hover:text-gray-300">Download CV</button>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
export default About;