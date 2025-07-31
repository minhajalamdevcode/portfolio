function Skills({skillName, skillContent, src }) {
  return (
    <div className="flex md:justify-between w-full" id="skills">
      <div>
        <h3 className="text-3xl">{skillName}</h3>
        <p className="text-lg mt-4">{skillContent}</p>
      </div>
      <img
        className="hidden md:block md:w-32 ml-auto w-[128px] h-[128px] rounded-md"
        src={src}
        alt={skillName}
      />
    </div>
  );
}

export default Skills;
