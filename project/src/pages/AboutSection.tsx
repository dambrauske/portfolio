const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-zinc-900 h-screen py-12 flex flex-col gap-12 items-center "
    >
      <h2 className="text-6xl md:text-8xl font-bold text-center text-zinc-300 opacity-10 pt-12">
        About me
      </h2>
      <div className="md:w-1/2 p-4 md:p-0 flex flex-col gap-2 justify-center text-zinc-300 tracking-wide">
        <div>
          I am a motivated and hardworking individual with a strong passion to
          become an accomplished developer.
        </div>
        <div>
          Currently, I am in the process of transitioning my career to web
          development, as I found the passion in creating applications and
          learning new things everyday.
        </div>

        <div>
          I have successfully completed an intensive 1060-hour TypeScript course
          at Code Academy, which was the start of my journey into the
          fascinating world of coding. Also, I was learning on my own and I
          participated in Swedbank IT adacemy, where I gained knowledge about
          the fundamentals of Java programming language Angular framework for JavaScript.
        </div>
        <div>
          I am continually striving to acquire new knowledge and improve my
          skills through learning the programming concepts.
        </div>
        <div>
          I enjoy learning new things and I am eager to gain hands-on experience
          by working on real projects within a team environment.
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
