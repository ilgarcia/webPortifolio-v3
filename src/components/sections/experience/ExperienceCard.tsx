function ExperienceCard() {
  return (
    <div className="horizontal-animation relative">
      <h3 className="text-4xl lg:text-6xl font-bold lg:leading-10">
        Meet the Developer
      </h3>
      <div className="space-y-2 sm:space-y-4 mt-6 md:mt-8 px-4">
        <p>
          My journey into web development ignited in 2018 when I embarked on the
          adventure of establishing my own company. Striving to balance both my
          creative and logical faculties, I recognized the perfect synergy in
          utilizing my creativity for design and my logical prowess for coding.
        </p>
        <p>
          A meticulous and well-organized individual, I thrive as a problem
          solver with an unwavering attention to detail. I&apos;am always
          committed to learning and growing professionally, an eagerness to
          embrace new challenges.
        </p>
      </div>
      <div className="grid grid-cols-3 border-secondary py-3 border-y mt-5 px-4">
        <div className="flex flex-col items-center">
          <div className=" text-5xl font-semibold">
            1 <span className="text-primary">+</span>
          </div>
          <div>Experiences</div>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default ExperienceCard;
