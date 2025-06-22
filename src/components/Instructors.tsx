'use client'
// import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
    {
      id: 1,
      name: 'Aniket',
      designation: 'Cyber Security',
      image:
        'https://images.unsplash.com/photo-1743337557851-1b3be3c63496?q=80&w=1954&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'Devraj Bharti', 
      designation: 'Core Programming & Ai/Ml',
      image:
        'https://images.unsplash.com/photo-1743337733065-5fd0b2b32423?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Ankul Tiwari & Sagar Madame',
      designation: 'Web Dev',
      image:
        'https://images.unsplash.com/photo-1743337733065-5fd0b2b32423?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 4,
      name: 'Harshwardhan',
      designation: 'IOT',
      image:
        'https://images.unsplash.com/photo-1743337733065-5fd0b2b32423?q=80&w=1930&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
            <h2 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold text-center mb-8">Meet Our Team Members</h2>
            <p className="text-base md:text-lg text-white text-center mb-4"></p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
        
    </div>
  )
}

export default Instructors