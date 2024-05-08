import Experience from "@/components/main/ Experience";
import Certificates from "@/components/main/Certificates";
import Encryption from "@/components/main/Encryption";
import Footer from "@/components/main/Footer";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Contact from "@/components/main/contact";
import Education from "@/components/main/Education";
import { Certificate } from "crypto";
import Image from "next/image";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
       
       
       
        <Hero />
        <Skills />   
        <Experience/>
        <Certificates />
        <Projects />
        <Contact/>
        <Encryption />
        <Footer />
      
       
      </div>
    </main>
  );
}