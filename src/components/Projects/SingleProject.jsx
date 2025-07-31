function SingleProject({ title, description, image, href, techStack }) {
  return (
    <div
      id="project"
      className="bg-zinc-800 rounded-2xl overflow-hidden min-w-[343px] w-[400px] inline-block "
    >
      <div>
        <a href={href} target="_blank">
        <img className="w-full h-full" src={image} alt="project " />
        </a>
      </div>
      <div className="p-4 flex flex-col gap-4 py-1">
        <h2 className="text-2xl"><a href={href} target="_blank">{title}</a></h2>
        <p className="text-md">
          <a href={href} target="_blank"
         
         >{description}</a>
        </p>
        <div className="tech-stack flex flex-wrap items-center gap-4 mt-8 mb-5">
          {techStack.map((tech, index) => (
          <span 
           key={index}
          className="rounded-2xl outline px-2 py-1 flex w-fit justify-center items-center font-semibold ">
            <img className="w-6 h-6" src= {tech.icon} alt="" />  {tech.name}
          </span>
            ))}
        
        </div>
      </div>
      
    </div>

    
  );
}

export default SingleProject;
