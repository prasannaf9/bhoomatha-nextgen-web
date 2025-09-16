import svnImg from "@/assets/svn.webp";

const FullWidthImageSection = () => {
  return (
    <section className="relative w-full">
      <div className="relative w-full min-h-[320px] sm:min-h-[420px] md:min-h-[520px] lg:min-h-[620px]">
        <img
          src={svnImg}
          alt="Project visual"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </section>
  );
};

export default FullWidthImageSection;
