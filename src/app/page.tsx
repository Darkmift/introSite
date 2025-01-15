'use client';

import Image from 'next/image';

import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';

import MyParticles from '@/components/ui/particles';
import TypeWritterWrapper from '@/components/ui/typewriter';

export default function Home() {
  return (
    <div className="home-page flex flex-col w-[70vw] mx-auto home-section">
      <MyParticles />
      <section className="text-white flex items-start">
        <div className="container px-4">
          <div className="flex items-center justify-between text-xl">
            {/* Left Section */}
            <div className="home-header flex flex-col gap-3">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Hi There!{' '}
                <span className="wave inline-block animate-wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h2>
              <h2 className="text-3xl md:text-4xl font-bold">
                I'M
                <strong className="text-[#be6adf] ml-2">AVI E. Koenig</strong>
              </h2>
              <h2 className="mt-8 text-[#be6adf] text-[35px] md:text-[30px] font-bold">
                &nbsp;
                <TypeWritterWrapper
                  options={{
                    words: [
                      'Full Stack Developer',
                      'React Developer',
                      'Vue Developer',
                      'Node Developer',
                      'Express Developer',
                      'Nest Developer',
                      'MERN Stack Developer',
                      'Freelancer',
                    ],
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </h2>
            </div>

            {/* Right Section */}
            <div className="flex justify-center md:justify-end">
              <Image src={'./home-main.svg'} alt="home pic" height={350} width={350} priority />
            </div>
          </div>
        </div>
      </section>
      <section id="about" className="home-about-section text-white mt-[15vh]">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start">
            {/* Left Column */}
            <div className="md:w-8/12 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4 text-center">
                LET ME <span className="text-purple-500"> INTRODUCE </span> MYSELF
              </h1>

              <section className="home-about-body text-lg leading-relaxed">
                <p>
                  I fell in love with programming, and I have at least learned something, I think…
                  🤷‍♂️
                </p>
                <p>
                  I am fluent in classics like
                  <i>
                    <b className="text-purple-500"> Javascript,C# & PHP. </b>
                  </i>
                </p>
                <p>
                  My field of interest is building new&nbsp;
                  <i>
                    <b className="text-purple-500">Web Technologies and Products</b>
                  </i>
                  &nbsp;&nbsp;and areas related to&nbsp;&nbsp;
                  <i>
                    <b className="text-purple-500">Fullstack Apps,CRM</b>
                  </i>
                  &nbsp;& many more.
                </p>
                Whenever possible, I also apply my passion for developing products with{' '}
                <b className="text-purple-500">Node.js</b> and modern frameworks like{' '}
                <i>
                  <b className="text-purple-500">React.js and Next.js.</b>
                </i>
              </section>
            </div>

            {/* Right Column */}
            <div className="md:w-4/12 flex justify-center">
              <Tilt>
                <img src={'./avatar.svg'} alt="avatar" className="rounded-lg shadow-lg" />
              </Tilt>
            </div>
          </div>

          {/* Social Links */}
          <div className="mt-16 text-center">
            <h1 className="text-3xl font-bold mb-4">FIND ME ON</h1>
            <p className="text-lg mb-6">
              Feel free to <span className="text-purple-500">connect</span> with me
            </p>
            <ul className="flex justify-center space-x-6">
              <li>
                <a
                  href="https://github.com/Darkmift"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-500 rounded-full p-3 hover:bg-purple-500 hover:text-white transition"
                >
                  <AiFillGithub size={25} />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/avi-koenig/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-500 rounded-full p-3 hover:bg-purple-500 hover:text-white transition"
                >
                  <FaLinkedinIn size={25} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
