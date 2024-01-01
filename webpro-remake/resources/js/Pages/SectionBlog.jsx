import Navbar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import TechCat from "@/Components/TechCat";
import ProgrammingCat from "@/Components/ProgrammingCat";
import { Link } from "@inertiajs/react";

const SectionBlog = () => {
    return (
        <>
        <Navbar />
            <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                
                <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
                    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white"><span className="mb-11 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Code Fun.</span> Blog</h2>
                    <p class="mt-1 text-gray-600 dark:text-gray-400">Explore articles that are related to your interest here.</p>
                </div>
                <TechCat />
                <ProgrammingCat />

            </div>
            <Footer />
        </>
    );
}

export default SectionBlog