'use client'
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
    {
      quote:
        "First Induction class of our TECH Club in which we deliverd the roadmaps of evry tech domain such as Ai/ml,Iot,Web/App development",
      name: 'Devraj Bharti',
      title: 'Induction Class',
    },
    {
      quote:
        'We conducted a sucessfull 4 hour Hackthon specially for first year students which had an amazing responce which was unexpected',
      name: 'Ankul Tiwari',
      title: 'Hackathon',
    },
    {
      quote:
        "Conducted 3 classess of Python from basic to advance in order to persue Ai/Ml",
      name: 'Sagar',
      title: 'Python Classess',
    },
  ];
    // {
    //   quote:
    //     '',
    //   name: '',
    //   title: '',
    // },
    // {
    //   quote:
    //     '',
    //   name: '',
    //   title: '',
    // },

function MusicSchoolTestimonials() {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-3xl font-bold text-center mb-8 z-10">Successful events that we conducted!</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default MusicSchoolTestimonials