import Marquee from "react-fast-marquee";

const SpecialDisplay = () => {
  return (
    <Marquee
      speed={60}
      className="bg-[#1C78B6] py-1 font-roboto-condensed flex text-white text-lg tracking-widest"
    >
      <h5 className="px-2">৹</h5>
      <h5>
        K.P.N.G (Knagz Power and Network-Infrastructure Group) operates as a
        subcontractor on various projects across India in collaboration with the
        Ministry of Housing and Urban Affairs (MoHUA) and the Government of
        India
      </h5>
      <h5 className="px-2">৹</h5>
      <h5>
        Job applicants are advised to have advanced professional skill
        certification available before submitting their job application
      </h5>
      <h5 className="px-2">৹</h5>
      <h5>
        K.P.N.G (Knagz Power and Network-Infrastructure Group) never requests
        payment for any job opportunities
      </h5>
    </Marquee>
  );
};

export default SpecialDisplay;
