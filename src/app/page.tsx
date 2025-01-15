import MyParticles from '@/components/ui/particles';
import TypeWritterWrapper from '@/components/ui/typewriter';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="home-page flex flex-col w-[70vw] mx-auto">
      <MyParticles />
      <section className="text-white min-h-screen flex items-start">
        <div className="container px-4">
          <div className="flex items-center justify-between text-xl">
            {/* Left Section */}
            <div className="home-header flex flex-col gap-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Hi There!{' '}
                <span className="wave inline-block animate-wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>
              <h1 className="text-4xl md:text-5xl font-bold">
                I'M
                <strong className="text-[#be6adf] ml-2">AVI E. Koenig</strong>
              </h1>
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
              <Image
                src={'./home-main.svg'}
                alt="home pic"
                height={350}
                width={350}
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
