import { MdEmail } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer id="hire-me" className="my-container py-4 overflow-hidden">
      <div className="text-center">
        <h2 className="text-4xl font-semibold w-fit mx-auto bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
          Thanks For Visiting
        </h2>
        <p className="text-lg mt-4 italic text-zinc-400 min-w-[342px] shiny-text">
          You’ve reached the end of my portfolio, but maybe the beginning of our
          collaboration. Feel free to contact & hire me 👇
        </p>
      </div>

      <div className="py-8 flex flex-col justify-center gap-8 lg:flex-row lg:justify-between lg:py-16">
        <div className="flex justify-between items-center gap-4">
          <img
            className="rounded-full w-[30vw] h-[30vw] lg:w-[16vw] lg:h-[16vw] xl:w-[204.8px] xl:h-[204.8px] cursor-pointer"
            src="/minhaj.jpg"
            alt="minhajdevcode"
            onClick={() => window.open('/minhaj.jpg', '_blank')}
          />
          <h2 className="font-semibold text-[12vw] lg:text-[6vw] xl:text-[78px] leading-none">
            LETS
            <br />
            CONNECT!
          </h2>
        </div>

        <ul className="flex flex-col justify-center gap-4 flex-wrap md:flex-row md:gap-0 md:text-center md:gap-y-4 lg:text-left lg:flex-nowrap lg:flex-col">
          <li className="md:w-1/2 lg:w-[310px] lg:ml-auto">
            <div className="text-xl italic text-zinc-400 shiny-texttt">Email Address</div>
            <a
              href="mailto:myminhajalam392@gmail.com"
              target="_blank"
              className="text-2xl hover:bg-gradient-to-r from-blue-500 to-pink-500 hover:text-transparent bg-clip-text"
            >
              myminhajalam392@gmail.com
            </a>
          </li>
          <li className="md:w-1/2 lg:w-[310px] lg:ml-auto">
            <div className="text-xl italic text-zinc-400 shiny-texttt">Contact</div>
            <a
              href="tel:9113162004"
              className="text-2xl hover:bg-gradient-to-r from-blue-500 to-pink-500 hover:text-transparent bg-clip-text"
            >
              +91 9113162004
            </a>
          </li>
          <li className="md:w-1/2 lg:w-[310px] lg:ml-auto">
            <div className="text-xl italic text-zinc-400 shiny-texttt">LinkedIn</div>
            <a
              href="https://www.linkedin.com/in/minhaj-alam875/"
              target="_blank"
              className="text-2xl hover:bg-gradient-to-r from-blue-500 to-pink-500 hover:text-transparent bg-clip-text"
            >
              Minhaj Alam
            </a>
          </li>
          <li className="md:w-1/2 lg:w-[310px] lg:ml-auto">
            <div className="text-xl italic text-zinc-400 shiny-texttt">GitHub</div>
            <a
              href="https://github.com/minhajalamdevcode"
              target="_blank"
              className="text-2xl hover:bg-gradient-to-r from-blue-500 to-pink-500 hover:text-transparent bg-clip-text"
            >
              minhajalamdevcode
            </a>
          </li>
        </ul>
      </div>

      {/* ✅ Copyright with icons */}
      <div className="flex flex-col  items-center gap-4 lg:flex-row lg:justify-between px-4 pb-10 pt-5">
        <p className="text-center text-xl">
          © 2025{" "}
          <a
            className="text-xl hover:bg-gradient-to-r from-blue-500 to-pink-500 hover:text-transparent bg-clip-text"
            href="#"
          >
            MinhajAlam.dev
          </a>{" "}
          | All Rights Reserved
        </p>

        <div className="flex gap-4 justify-center text-2xl pb-10">
          <a
            href="mailto:myminhajalam392@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <MdEmail />
          </a>
          <a
            href="https://www.linkedin.com/in/minhaj-alam875/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/minhajalamdevcode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
