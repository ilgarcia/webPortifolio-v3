function AboutCard() {
  return (
    <div className="relative px-8">
      <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl opacity-300" />
      <div className="relative shadow-xl bg-gray-900 border border-gray-800 px-6 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
        <div className="space-y-2 sm:space-y-4">
          <p>
            My journey into web development ignited in 2018 when I embarked on
            the adventure of establishing my own company. Striving to balance
            both my creative and logical faculties, I recognized the perfect
            synergy in utilizing my creativity for design and my logical prowess
            for coding.
          </p>
          <p>
            A meticulous and well-organized individual, I thrive as a problem
            solver with an unwavering attention to detail. I&apos;am always
            committed to learning and growing professionally, an eagerness to
            embrace new challenges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutCard;
