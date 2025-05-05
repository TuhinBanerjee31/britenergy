import Marquee from "react-fast-marquee";

const SpecialDisplay = () => {
  return (
    <Marquee speed={60} className="bg-[#1C78B6] py-1 font-roboto-condensed flex text-white text-lg tracking-widest">
      <h5 className="px-2">৹</h5>
      <h5>
        K.P.N.G (Knagz Power and Network-Infrastructure Group) is working as a
        subcontractor on different projects throughout the India in
        collaboration with the MoHUA (Ministry Housing and Urban Affairs)
      </h5>
      <h5 className="px-2">৹</h5>
      <h5>
        Job applicants are advised to have advance professional skill
        certification available before placing job application
      </h5>
      <h5 className="px-2">৹</h5>
      <h5>
        K.P.N.G (Knagz Power and Network-Infrastructure Group) never ask for
        money for any kind of job opportunities
      </h5>
    </Marquee>
  );
};

export default SpecialDisplay;
