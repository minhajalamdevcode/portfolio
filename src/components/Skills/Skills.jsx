function Skills({ skillName, skillContent, src }) {
  return (
    <div
      className="w-full flex flex-col md:flex-row md:justify-between md:items-start"
      id="skills"
    >
      {/* LEFT SECTION */}
      <div className="w-full md:w-auto">
        {/* Title + Image in one line for mobile, only title on desktop */}
        <div className="flex items-center justify-between md:block">
          <h3 className="text-3xl">{skillName}</h3>

          {/* Image for mobile only */}
          <img
            src={src}
            alt={skillName}
            className="w-20 h-20 object-cover rounded-md md:hidden"
          />
        </div>

        {/* Paragraph always below (on both) */}
        <p className="text-lg mt-4">{skillContent}</p>
      </div>

      {/* Image for desktop only */}
      <img
        src={src}
        alt={skillName}
        className="hidden md:block md:w-32 md:h-32 object-cover rounded-md"
      />
    </div>
  );
}

export default Skills;
