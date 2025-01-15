import Calendar from '@/components/github/calendar';
import Image from 'next/image';
import SkillsList from '@/components/ui/icons/skill-list';

function About() {
  return (
    <div className="home-page flex flex-col w-[70vw] mx-auto home-section">
      <section className="about-section text-white">
        <div className="container mx-auto px-4">
          {/* Main Content */}
          <div className="flex flex-col lg:flex-row justify-center items-center py-10 pb-5">
            {/* Left Column */}
            <div className="text-center md:text-left mb-8 md:mb-0">
              <section className="text-white py-16 px-4">
                <div className="container mx-auto max-w-4xl">
                  <h1 className="text-4xl font-bold mb-8">
                    Welcome to <span className="text-primary-purple">My website</span>&nbsp;!
                  </h1>
                  <p className="text-lg leading-relaxed mb-8">
                    Hi Everyone, I am <span className="text-primary-purple">Avi E. Koenig</span>{' '}
                    from
                    <span className="text-primary-purple"> Tel Aviv, Israel.</span>
                    <br />I am currently employed as a{' '}
                    <span className="text-primary-purple">
                      backend-oriented full-stack developer
                    </span>
                    .
                  </p>
                  <p className="text-lg leading-relaxed mb-8">
                    Apart from coding, some other activities that I love to do!
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-left">
                    <li>🎮 Playing Games</li>
                    <li>✍️ Writing Tech Blogs</li>
                    <li>🌍 Travelling</li>
                  </ul>
                  <p className="text-sm italic mt-8">
                    &quot;Strive to build things that make a difference!&ldquo;
                    <br />
                    <span className="text-primary-purple">— Avi E. Koenig</span>
                  </p>
                </div>
              </section>
            </div>

            {/* Right Column */}
            <div className="flex justify-center">
              <Image
                src="/about.png"
                width={400}
                height={400}
                alt="about"
                className="img-fluid rounded-lg shadow-lg max-w-full"
              />
            </div>
          </div>

          {/* Professional Skillset */}
          <div className="text-center my-10">
            <h1 className="text-4xl font-bold text-center mb-12">
              <span className="text-black dark:text-white">A partial list of my</span>&nbsp;
              <span className="text-primary-purple">Professional Skillset</span>
            </h1>
            {/* <Techstack /> */}
            <SkillsList />
          </div>

          {/* Tools */}
          {/* <div className="text-center my-10">
            <h1 className="text-3xl md:text-4xl font-bold mb-5">
              <strong className="text-purple-500">Tools</strong> I use
            </h1>
            <Toolstack /> 
          </div> */}

          {/* GitHub Section */}
          <div className="mt-10 flex flex-col items-center">
            <h1 className="text-4xl font-bold text-center mb-12">
              <span className="text-black dark:text-white">My</span>&nbsp;
              <span className="text-primary-purple">Github</span>
              <span className="text-black dark:text-white">Activity</span>&nbsp;
            </h1>
            <Calendar />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
