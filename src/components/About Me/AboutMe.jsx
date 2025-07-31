import Heading from "../Heading/Heading"

function AboutMe() {
  return (
    <div id="aboutMe" className="my-container flex flex-col gap-8 lg:flex-row lg:justify-between pb-8 sm:pb-16">
      <Heading title="About Me"  tagline="I wasn’t born for this — I’m building myself into it. Real success is earned, not given." />
    <div className="flex flex-col gap-8 items-center justify-center">
      <p className="mb-4 text-lg">Hi, I'm Minhaj — passionate Frontend Developer with a love for turning ideas into clean, responsive, and interactive websites{' '}
        <strong className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
           I specialize in building sleek user interfaces using HTML, CSS, JavaScript, and modern frameworks like React.
        </strong>
        .
      </p>

      <p className="mb-4 text-lg">
        What drives me the most is creating experiences that not only 
        <strong className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">look beautiful</strong>
         but also
        <strong className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">feel smooth and intuitive.</strong>
           Whether it's a landing page or a complex web app, I focus on details, performance, and cross-browser compatibility to ensure a seamless user journey.
        <strong className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
          talent, not influence
        </strong>
        , decides your success.
      </p>

      <p className="mb-4 text-lg">
        Currently, I'm expanding my skills in <strong className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">Next.js and UI/UX design</strong> to push the boundaries of frontend development even further. I'm always curious, always learning — and I believe that good design is as important as good code.
        
      </p>
      <p className="mb-4 text-lg">
        If you're looking for someone who writes code with creativity and purpose — I'm that guy. Let's build something awesome together!
        
      </p>

      <h3 className="text-2xl font-semibold mb-2 lg:mr-auto">My Vision</h3>
      <p className="mb-4 text-lg">
        I envision becoming a{' '}
        <strong className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
          full-stack creative developer
        </strong>{' '}
        — someone who blends{' '}
        <strong className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
          logic with design
        </strong>
        , and builds smart, stunning, and impactful web experiences.
        My core skill is{' '}
        <strong className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
          JavaScript
        </strong>
        , and I love using it to bring ideas to life across different stacks.
        I'm always curious, exploring new technologies, and staying updated with
        the latest trends.
      </p>

      
      
      {/* <p className="quote text-center text-gray-400 italic text-lg">
        <ShinyText
          text="I chose the skillful one. Because real success is earned, not given."
          disabled={false}
          speed={3}
          className="custom-class"
        />
      </p> */}
    </div>
  </div>
  )
}

export default AboutMe  