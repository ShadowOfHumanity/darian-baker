import { Braces, Calendar, CornerRightDown, Disc, MapPin, MoveRight } from 'lucide-react'
import React from 'react'
import { GetAge } from './lib/Utility'
import Tag from './components/tag'

const page = () => {
  return (
    <div className='flex justify-center h-screen'>
      <div className='flex'> {/* Master Container */}
        <div>{/* small mini header ontop of the about me section. this is the left side */}
          <h2 className='text-gray-500 text-md font-sans mb-4 ml-2 tracking-wide'>ABOUT ME</h2>

          <div className='flex-col m-2'> {/* Main about me section, seperated as a div.*/}
            <h1 className='text-4xl font-bold tracking-wide'>Hi, I'm <span className='text-[#C96065]'>Darian</span></h1>
            <h1 className='text-4xl font-bold tracking-wide'><span className='text-[#C96065]'>Baker</span></h1>       
                  <div className='mt-5'>
            <div className='flex pr-3 items-center text-gray-400 mb-2'>
              <MapPin  className='w-5 h-5 text-gray-400 mr-3' aria-hidden />
              <h4 className='text-sm'>Based in Għargħur, Malta</h4>
            </div>
            <div className='flex pr-3 items-center text-gray-400 mb-2'>
              <Disc className='w-5 h-5 text-gray-400 mr-3' aria-hidden />
              <h4 className='text-sm'>{GetAge()} Years Old</h4>
            </div>
            <div className='flex pr-3 items-center text-gray-400 mb-2'>
              <Braces className='w-5 h-5 text-gray-400 mr-3' aria-hidden />
              <h4 className='text-sm'>Fullstack Software Developer</h4>
            </div>
            <div className='flex pr-3 items-center text-gray-400 mb-2'>
              <Calendar className='w-5 h-5 text-gray-400 mr-3' aria-hidden />
              <h4 className='text-sm'>{GetAge() - 17}+ Years Of Experience</h4> {/* Started Working at 17, professionally */}
            </div>
            <div className='mt-4 text-gray-200'>
              <h4 className='text-sm leading-relaxed'>
                As a {GetAge()}-year-old software developer from Malta
                <br />
                {GetAge() < 21 && (
                  <span>
                    that is currently studying at the University of Malta,
                    <br />
                  </span>
                )}
                I look to push my skills further daily.
                <br />
                Outside of development, I enjoy football,
                <br />
                staying active, and learning about "magical" solutions
              </h4>
            </div>

            <div className='flex pt-4 gap-5'>
              <button className='bg-[#EB5C58] text-white-100 rounded-md px-4 py-2 hover:bg-[#C96065] transition-colors duration-300 cursor-pointer'>
                Contact Me
              </button>
              <button className='bg-[#140F10] border-3 border-[#191919] text-white-100 rounded-md px-4 py-2 hover:bg-[#1F1F1F] transition-colors duration-300 cursor-pointer'>
                View Projects
              </button>
            </div>

          </div>
          </div>
        </div>
        
        {/* Right side section, what i do, skills, technologies.*/}
        <div>
          <h2 className='text-gray-100 text-lg font-sans mt-16 ml-2 tracking-wide'>Key Skills</h2>

        {/* Some tags, for skills*/}
          <div className='grid grid-cols-4 ml-2 mt-4 gap-2'>
            <Tag>C#</Tag> <Tag>TypeScript</Tag> <Tag>React</Tag>
            <Tag>Next.Js</Tag> <Tag>.NET</Tag> <Tag>SQL</Tag> <Tag>Docker</Tag>
          </div>
          
        {/* What I do / Services */}
          <div className='flex ml-2 mt-8'>
            <h2 className='text-gray-100 text-lg font-sans ml-2 tracking-wide'> What I Do </h2>
            <CornerRightDown className='text-[#C96065] ml-2 mt-2'/>
          </div>

          <div className='flex-col gap-4 ml-2 mt-4'>
              <div className='flex items-center gap-4'>
                <MoveRight className='text-[#C96065] ml-2'/>
                <h4 className='text-gray-300'>Web Development</h4>
              </div>
              <div className='flex items-center gap-4'>
                <MoveRight className='text-[#C96065] ml-2'/>
                <h4 className='text-gray-300'>Game Development</h4>
              </div>
              <div className='flex items-center gap-4'>
                <MoveRight className='text-[#C96065] ml-2'/>
                <h4 className='text-gray-300'>Service Development</h4>
              </div>
              <div className='flex items-center gap-4'>
                <MoveRight className='text-[#C96065] ml-2'/>
                <h4 className='text-gray-300'>API Solutions</h4>
              </div>
              <div className='flex items-center gap-4'>
                <MoveRight className='text-[#C96065] ml-2'/>
                <h4 className='text-gray-300'>AI Solutions</h4>
              </div>
          </div>
          

        </div>
      </div>
    </div>
  )
}

export default page