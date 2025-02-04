import "./buttonStyle.css";
import image1 from "../assets/allProjectImages/image1.jpg";
import image2 from "../assets/allProjectImages/image2.jpg";
import image3 from "../assets/allProjectImages/image3.jpg";
import image4 from "../assets/allProjectImages/image4.jpg";
import image5 from "../assets/allProjectImages/image5.jpg";
import image6 from "../assets/allProjectImages/image6.jpg";
import image7 from "../assets/allProjectImages/image7.jpg";
import image9 from "../assets/allProjectImages/image9.jpg";
import image10 from "../assets/allProjectImages/image10.jpg";
import image11 from "../assets/allProjectImages/image11.jpg";
import image12 from "../assets/allProjectImages/image12.jpg";
import image13 from "../assets/allProjectImages/image13.jpg";
import image14 from "../assets/allProjectImages/image14.jpg";
import image15 from "../assets/allProjectImages/image15.jpg";
import image16 from "../assets/allProjectImages/image16.jpg";
import image17 from "../assets/allProjectImages/image17.jpg";
import image18 from "../assets/allProjectImages/image18.jpg";
import image19 from "../assets/allProjectImages/image19.jpg";
import image20 from "../assets/allProjectImages/image20.jpg";
import image21 from "../assets/allProjectImages/image21.jpg";
import image22 from "../assets/allProjectImages/image22.jpg";
import image23 from "../assets/allProjectImages/image23.jpg";
import image24 from "../assets/allProjectImages/image24.jpg";
import image25 from "../assets/allProjectImages/image25.jpg";
import image26 from "../assets/allProjectImages/image26.jpg";
import image27 from "../assets/allProjectImages/image27.jpg";
import image28 from "../assets/allProjectImages/image28.jpg";
import image29 from "../assets/allProjectImages/image29.jpg";
import image30 from "../assets/allProjectImages/image30.jpg";
import imageDown from "../assets/SliderAreaImages/image1.jpg";
import { Link } from "react-router-dom";

const AllProjects = () => {
  const projectsData = [
    // {
    //   id: 1,
    //   imgUrl: image1,
    //   sector: "Building",
    //   venue: "Skyscraper Development, New York",
    //   headline: "Reaching New Heights: Skyscraper Development in NYC",
    // },
    // {
    //   id: 2,
    //   imgUrl: image2,
    //   sector: "Energy",
    //   venue: "Solar Power Plant, California",
    //   headline: "Harnessing the Sun: California's Solar Power Revolution",
    // },
    // {
    //   id: 3,
    //   imgUrl: image3,
    //   sector: "Construction",
    //   venue: "Bridge Construction, Sydney",
    //   headline: "Connecting Horizons: Iconic Bridge Project in Sydney",
    // },
    // {
    //   id: 4,
    //   imgUrl: image4,
    //   sector: "Energy",
    //   venue: "Hydroelectric Dam, Colorado",
    //   headline: "Powering the Future: Hydroelectric Energy in Colorado",
    // },
    // {
    //   id: 5,
    //   imgUrl: image5,
    //   sector: "Building",
    //   venue: "Smart City Initiative, Singapore",
    //   headline: "Living the Future: Singapore's Smart City Transformation",
    // },
    // {
    //   id: 6,
    //   imgUrl: image6,
    //   sector: "Construction",
    //   venue: "Tunnel Excavation Project, Switzerland",
    //   headline: "Breaking Barriers: Switzerland's Underground Innovation",
    // },
    // {
    //   id: 7,
    //   imgUrl: image7,
    //   sector: "Energy",
    //   venue: "Offshore Wind Farm, Denmark",
    //   headline: "Winds of Change: Denmark's Offshore Energy Pioneer",
    // },
    // {
    //   id: 9,
    //   imgUrl: image9,
    //   sector: "Construction",
    //   venue: "Highway Expansion, Mumbai",
    //   headline: "Expanding Horizons: Mumbai's Highway Development",
    // },
    // {
    //   id: 10,
    //   imgUrl: image10,
    //   sector: "Energy",
    //   venue: "Biogas Plant, Germany",
    //   headline: "Green Energy Revolution: Germany's Biogas Breakthrough",
    // },
    {
      id: 11,
      imgUrl: image11,
      sector: "Transportation",
      venue: "Riyadh Metro, Saudi Arabia",
      headline: "Transforming Connectivity: Riyadh Metro Development",
      redirect: "/our-impact/riyadh-metro",
      client: "The Royal Commission for Riyadh City (RCRC)",
      status: "Completed",
      desc: "KPNG is proud to have played a key role in the Riyadh Metro project, one of the most ambitious transportation infrastructure initiatives in Saudi Arabia. As a leading partner in this monumental endeavor, we contributed significantly to the successful completion of this world-class metro system, which aims to transform Riyadh’s public transportation landscape.",
      scope: "As part of the Royal Commission for Riyadh City (RCRC), KPNG was entrusted with designing, manufacturing, and deploying essential heavy machinery crucial for the construction and operationalization of the metro system. Our state-of-the-art machinery and engineering expertise were integral to building tunnels, stations, and tracks. We played a significant role in various aspects of the project. Our specialized tunnel boring machines (TBMs) facilitated precise and efficient underground excavation, ensuring smooth tunneling beneath Riyadh’s busy streets. Additionally, our advanced cranes and lifting equipment were utilized for heavy lifting and installation, enabling the seamless assembly of metro station structures, including platform sections, walls, and roofing systems. In track construction and alignment, our machinery was instrumental in laying and aligning railway tracks, ensuring the seamless operation of trains across the network. Furthermore, our fleet of transport vehicles managed material transport and handling, ensuring the timely movement of essential construction materials, minimizing delays, and maintaining efficient operations.",
      operations: "KPNG’s involvement in the Riyadh Metro project is a testament to our engineering expertise and commitment to excellence. Our team played a crucial role in various aspects of the project, ensuring efficiency and precision at every stage. With extensive experience in infrastructure projects, our engineers provided technical expertise, optimizing all machinery to meet the specific demands of the Riyadh Metro’s complex construction phases. Additionally, we offered continuous on-site support and maintenance, minimizing downtime and ensuring that all equipment operated at peak efficiency. Adhering to strict international safety and quality standards, we maintained the highest levels of operational safety and compliance, reinforcing our dedication to delivering a world-class metro system.",
      impact: "The completion of the Riyadh Metro project marks a significant milestone in Saudi Arabia’s vision to develop a modern, sustainable public transport system. The metro system will not only reduce traffic congestion but also provide a more sustainable and efficient mode of transport for Riyadh’s growing population.KPNG’s role in the project underscores our capacity to deliver heavy machinery solutions for large-scale infrastructure projects. Our contribution helped ensure that the Riyadh Metro project was completed on time, within budget, and to the highest standards of quality.",
    },
    {
      id: 12,
      imgUrl: image12,
      sector: "Transportation",
      venue: "Haramain High-Speed Railway, Saudi Arabia",
      headline: "Speeding Through History: Haramain High-Speed Railway",
      redirect: "/our-impact/haramain-railway",
      client: "Saudi Railways Organization (SRO)",
      status: "Completed",
      desc: "KPNG is honored to have been an integral part of the Haramain High-Speed Railway project, one of the most groundbreaking transportation initiatives in Saudi Arabia. This high-speed rail network, connecting the cities of Mecca, Medina, Jeddah, and King Abdulaziz International Airport, is a vital part of the Kingdom’s vision to enhance transportation infrastructure, reduce travel time, and offer a modern, eco-friendly alternative for millions of passengers.KPNG played a significant role in the successful completion of this world-class railway system, working closely with the Saudi Railways Organization (SRO) to ensure the delivery of robust, high-performance machinery, equipment, and engineering expertise",
      scope:"As a key partner in the Riyadh Metro project, KPNG played a pivotal role in supplying and operating advanced heavy machinery essential for constructing railway tracks, stations, and supporting infrastructure. Our expertise extended across several critical areas, ensuring efficiency and precision at every stage. In track construction and alignment, we provided high-performance track-laying machinery, ensuring the precise installation and alignment of railway tracks for safe and reliable high-speed travel. For tunneling and excavation, our advanced tunnel boring machines (TBMs) and earth-moving equipment facilitated the creation of tunnels, even in challenging terrain, minimizing environmental disruption. Additionally, our cranes and heavy lifting equipment were instrumental in station infrastructure development, enabling the precise installation of steel structures, roofing, and station platforms. To support seamless operations, we deployed heavy-duty transport vehicles for material handling and logistics, ensuring the efficient movement of essential construction materials such as steel, concrete, and rail components across multiple sites.",
      operations: "KPNG’s engineering team collaborated closely with the Saudi Railways Organization (SRO) to ensure the precise and timely execution of each phase of the Haramain High-Speed Railway project. Leveraging our extensive experience in large-scale infrastructure projects, we provided tailored technical solutions to meet the unique demands of this ambitious initiative. Our expertise extended beyond design and deployment, as we also offered real-time maintenance and support throughout the construction phases, ensuring all machinery and equipment remained in peak operational condition. Additionally, we upheld the highest standards of safety and quality control, adhering to international safety regulations and rigorous quality assurance protocols. By prioritizing precision, efficiency, and safety, KPNG played a vital role in the successful development of this high-speed rail network.",
      impact: "The completion of the Haramain High-Speed Railway marks a significant milestone for Saudi Arabia, revolutionizing travel between Mecca and Medina while strengthening the Kingdom’s transportation infrastructure. This railway system plays a vital role in fostering economic growth, boosting tourism, and facilitating the efficient movement of people, particularly religious pilgrims during the Hajj season. KPNG’s involvement in this landmark project underscores our ability to deliver cutting-edge machinery solutions for large-scale infrastructure developments. By providing advanced equipment, technical expertise, and engineering support, we contributed to the timely and successful completion of the railway. As we continue to drive innovation in high-speed rail and transportation infrastructure, KPNG remains committed to shaping the future of global connectivity. We look forward to future collaborations that will transform cities and enhance the quality of life for communities worldwide.",
    },
    {
      id: 13,
      imgUrl: image13,
      sector: "Aviation",
      venue: "King Abdulaziz International Airport, Saudi Arabia",
      headline: "Soaring High: King Abdulaziz International Airport Expansion",
      redirect: "/our-impact/king-abdulaziz-airport",
      client: "General Authority of Civil Aviation (GACA)",
      status: "Completed",
      desc: "KPNG is privileged to have played an essential role in the King Abdulaziz International Airport expansion project, a significant infrastructure initiative designed to enhance the airport’s capacity and elevate its status as a global hub. Serving as a key partner to the General Authority of Civil Aviation (GACA), KPNG was actively involved in ensuring the timely and efficient completion of this monumental project, which has increased the airport's capacity to handle millions of passengers and freight annually.",
      scope: "As a primary contributor to the expansion of King Abdulaziz International Airport, KPNG played a crucial role in supplying and operating heavy machinery for key aspects of the project, including terminal construction, runway development, and cargo facilities. Our involvement spanned multiple construction phases, ensuring efficiency and precision in every stage. For runway and taxiway construction, we provided advanced paving and construction machinery, enabling the airport to accommodate larger aircraft and increased traffic volumes. In terminal infrastructure, our cranes, lifts, and construction vehicles were instrumental in assembling and installing complex structural components, such as passenger bridges, terminal buildings, and duty-free areas. To support seamless operations, we deployed heavy-duty material transport vehicles, facilitating the efficient movement of large volumes of construction materials across the expansive project sites. Additionally, our excavation and earth-moving equipment played a key role in foundation works, ensuring stability and precision in the construction of terminal and operational structures. Through our expertise and advanced machinery solutions, KPNG contributed to the successful expansion of one of Saudi Arabia’s most significant aviation hubs.",
      operations: "KPNG’s experienced team worked closely with the General Authority of Civil Aviation (GACA) and its contractors to ensure the flawless execution of each construction phase. Our expertise in large-scale infrastructure projects enabled us to provide custom heavy machinery solutions tailored to the unique challenges of airport construction, including managing operations in a high-traffic environment and adhering to strict timelines. Throughout the project, we delivered real-time on-site support and maintenance, ensuring all machinery remained in optimal working condition to minimize downtime and maintain steady progress. Additionally, we upheld the highest safety and quality standards, strictly adhering to international regulations and protocols. By prioritizing precision, efficiency, and safety, KPNG played a vital role in the successful expansion of King Abdulaziz International Airport.",
      impact: "The completion of the King Abdulaziz International Airport expansion represents a major milestone in Saudi Arabia’s vision to establish Jeddah as a key hub for international travel and trade. The newly expanded facilities accommodate the growing demand for air travel and play a crucial role in driving economic growth, boosting tourism, and enhancing logistics operations in the region. KPNG’s contribution to this landmark project highlights our expertise in delivering specialized heavy machinery solutions for complex transportation infrastructure developments. Through our advanced machinery, engineering expertise, and operational support, we helped ensure the timely and successful execution of one of the largest airport expansions in the region. As we continue to innovate, KPNG remains dedicated to developing world-class infrastructure solutions that advance global connectivity and improve communities worldwide.",
    },
    {
      id: 14,
      imgUrl: image14,
      sector: "Building",
      venue: "Kingdom Tower, Saudi Arabia",
      headline: "Reaching the Sky: Advanced Systems for Kingdom Tower",
      redirect: "/our-impact/kingdom-tower",
      client: "Jeddah Economic Company (JEC)",
      status: "Completed",
      desc: "KPNG is proud to have been an essential partner in the Kingdom Tower project in Jeddah, Saudi Arabia, a landmark development that is poised to become one of the tallest buildings in the world. As a key collaborator with the Jeddah Economic Company (JEC), KPNG was deeply involved in providing heavy machinery, expertise, and support throughout the construction of this iconic skyscraper, designed to redefine Jeddah’s skyline and further elevate Saudi Arabia’s position as a leader in global architecture and engineering.",
      scope: "As part of the Kingdom Tower project, KPNG played a significant role in the structural construction, foundation work, and vertical development of this groundbreaking skyscraper. Our cutting-edge equipment and on-site support were essential in ensuring the tower’s successful completion on time and within budget. In foundation construction, we deployed advanced excavators, piling rigs, and earth-moving equipment to prepare the site for the massive structure, delivering the precision and expertise required for such a complex undertaking. For structural lifting and installation, our cranes and heavy lifting equipment facilitated the precise placement of steel frameworks, reinforced concrete, and glass panels, ensuring adherence to the project’s high standards. Additionally, our machinery was vital in the vertical construction of the tower, enabling the safe and efficient installation of tall building sections and upper-floor infrastructure. To maintain smooth operations, KPNG’s fleet of transport vehicles managed the movement of heavy materials across the sprawling construction site, optimizing logistics and minimizing delays. Through our expertise and state-of-the-art machinery solutions, KPNG contributed to the realization of one of the world’s most ambitious architectural projects.",
      operations: "KPNG’s experienced engineers worked closely with JEC to provide top-tier support and technical expertise throughout the Kingdom Tower project. Our role extended beyond supplying machinery, as we ensured optimal performance even in the most challenging environments. Leveraging our vast experience in high-rise construction, we provided critical guidance and technical solutions to overcome specific challenges, such as maintaining precision in foundation work and optimizing resource utilization. Throughout the project, our team delivered continuous on-site support and maintenance, ensuring all machinery operated at peak efficiency and preventing disruptions to the project timeline. Additionally, KPNG upheld the highest safety and quality control standards, strictly adhering to industry regulations to guarantee the safe and efficient operation of all heavy equipment. Our dedication to excellence and innovation played a crucial role in the successful execution of this landmark skyscraper.",
      impact: "The Kingdom Tower stands as a symbol of innovation and architectural excellence, offering world-class residential, commercial, and hotel facilities. As the tallest building in Saudi Arabia and one of the tallest in the world, it will serve as a major hub for business and tourism, strengthening the Kingdom’s global stature and contributing to its economic growth. KPNG’s involvement in this landmark project underscores our expertise in providing advanced heavy machinery and engineering solutions for large-scale, high-rise developments. Our contributions played a crucial role in ensuring the project's success, allowing the tower to reach its full potential as a global icon. We are proud to have been part of this visionary endeavor and remain committed to supporting major infrastructure projects that shape the future of urban landscapes worldwide."
    },
    {
      id: 15,
      imgUrl: image15,
      sector: "Urban Development",
      venue: "Jeddah Economic City, Saudi Arabia",
      headline: "Building the Future: Jeddah Economic City Development",
      redirect: "/our-impact/jeddah-economic-city",
      client: "Jeddah Economic Company (JEC)",
      status: "Completed",
      desc: "KPNG is honored to have played a key role in several ambitious urban development projects led by the Jeddah Economic Company (JEC). As a trusted partner in urban development, KPNG contributed to transforming the landscape of Jeddah, helping create state-of-the-art facilities, commercial spaces, and residential complexes. These projects are part of the vision to redefine the city’s infrastructure and provide a modern living experience for its growing population.",
      scope: "KPNG’s contribution to JEC’s urban development initiatives spans multiple sectors, including residential, commercial, and mixed-use spaces. Our role encompassed the manufacturing and supply of heavy machinery, as well as specialized support in construction, infrastructure, and logistics. In site preparation and earthworks, we deployed advanced excavators, bulldozers, and graders to ready development sites, laying a strong foundation for roads, buildings, and utilities. Our involvement in foundation construction included providing piling rigs and earth-moving equipment to establish deep foundations, ensuring robust structural integrity capable of withstanding the region’s environmental conditions. For infrastructure development, KPNG’s heavy machinery facilitated the grading, paving, and construction of essential components like roads, bridges, and utilities, enhancing connectivity and accessibility across urban areas. Additionally, in building construction support, our cranes and material handling equipment were pivotal in assembling residential and commercial structures, lifting and installing prefabricated materials, steel frameworks, and façade elements, thus accelerating construction timelines. Through our comprehensive involvement, KPNG has been instrumental in advancing JEC’s urban development projects, shaping sustainable and resilient communities.",
      operations: "KPNG’s engineers collaborated closely with JEC to ensure that each urban development project was executed with precision and efficiency. Our team provided essential expertise and support at every stage of development, addressing complex construction challenges with tailored engineering solutions. We specialized in managing high-density construction and seamlessly integrating modern infrastructure systems into existing urban environments. Additionally, our real-time operational support ensured that all machinery remained in peak condition, minimizing delays and maximizing productivity on-site. Upholding the highest safety and quality standards, KPNG adhered to strict protocols to ensure safe operations and the optimal performance of all equipment. Through our expertise and commitment, we played a key role in advancing JEC’s urban development initiatives, contributing to the creation of sustainable and well-connected communities.",
      impact: "The successful completion of JEC’s urban development projects reflects the growing demand for modern infrastructure in Jeddah, transforming the city’s landscape with world-class facilities for residents, businesses, and tourists. By prioritizing sustainability, innovation, and efficient resource utilization, KPNG played a crucial role in bringing these developments to life, enhancing both the quality of life and the city’s economic potential. Our involvement underscores our expertise in providing advanced heavy machinery and engineering solutions for large-scale urban developments. As we continue to drive innovation in infrastructure, KPNG remains committed to shaping the future of urban living by delivering cutting-edge solutions that foster sustainable and connected communities."
    },
    {
      id: 16,
      imgUrl: image16,
      sector: "Urban Development",
      venue: "Lumina Smart City, Singapore",
      headline: "Living the Future: Sustainable Solutions in Lumina Smart City",
      redirect: "/our-impact/lumina-smart-city",
      client: "",
      status: "Completed",
      desc: "KPNG was responsible for the energy systems and smart infrastructure solutions in this fully solar powered city, setting a global benchmark for sustainable urban development. "
    },
    {
      id: 17,
      imgUrl: image17,
      sector: "Logistics",
      venue: "Bharat Mumbai Container Terminals, India",
      headline: "Smooth Sailing: Advanced Systems for BMCT",
      redirect: "/our-impact/mumbai-container-terminals",
      client: "Bharat Mumbai Container Terminals Ltd (BMCT)",
      status: "Completed",
      desc: "KPNG is privileged to have played a significant role in the development of Bharat Mumbai Container Terminals Ltd (BMCT), a crucial logistics project that has strengthened the region’s port and transportation infrastructure. As a trusted partner in the logistics sector, KPNG’s contribution was vital in ensuring the efficient development of the container terminal, which is a key player in enhancing India’s international trade capabilities and streamlining the movement of goods to and from the country",
      scope: "As part of the BMCT project, KPNG played a pivotal role in the construction and operational readiness of the terminal by providing heavy machinery, engineering expertise, and logistics support. Our contributions spanned key areas such as container handling, infrastructure development, and material transportation. To enhance the terminal’s efficiency, we supplied advanced container handling equipment, including cranes and reach stackers, which facilitated the swift loading, unloading, and movement of cargo, significantly boosting operational capacity. In terminal construction, our excavators, bulldozers, and graders were essential in building cargo handling areas, roads, and storage facilities, laying the foundation for seamless operations. Additionally, KPNG contributed to port and dock infrastructure by supplying heavy-duty cranes and paving equipment, ensuring the docks and quays were reinforced to accommodate large container ships and meet global shipping standards. To streamline operations further, our fleet of transport vehicles efficiently moved construction materials within the terminal and between suppliers, minimizing delays and maximizing productivity. Through our expertise and state-of-the-art machinery, KPNG played an integral role in the successful execution of the BMCT project, supporting the advancement of global trade and logistics.",
      operations: "KPNG’s deep expertise in logistics infrastructure enabled us to provide customized solutions and comprehensive support throughout the BMCT project. Beyond supplying heavy machinery, we played a vital role in engineering and operational execution. Our technical expertise ensured site optimization and the efficient use of equipment, aligning all operations with BMCT’s specific requirements and objectives. Additionally, our team provided real-time on-site support and maintenance, ensuring that all machinery remained in peak condition, minimizing disruptions, and maintaining a smooth workflow. Upholding the highest safety and quality control standards, KPNG prioritized safe equipment operation, reducing risks to personnel while maximizing overall efficiency. Through our commitment to precision, reliability, and innovation, we contributed significantly to the successful development of BMCT’s world-class logistics infrastructure.",
      impact: "The completion of Bharat Mumbai Container Terminals Ltd has established a state-of-the-art facility that strengthens India’s position as a major global logistics hub. With its enhanced handling capacity and cutting-edge technology, BMCT is set to improve the efficiency of global trade, offering a seamless port experience for container shipments while contributing to India’s economic growth. KPNG’s involvement in this project highlights our expertise in delivering heavy machinery solutions and operational support for large-scale logistics infrastructure. Our contributions ensured that BMCT’s development was completed on time, creating a high-capacity, reliable terminal capable of meeting the increasing demands of global shipping. As we continue to drive innovation in logistics infrastructure, KPNG remains committed to supporting the future of global trade and transportation networks through strategic partnerships and advanced engineering solutions."
    },
    {
      id: 18,
      imgUrl: image18,
      sector: "Logistics",
      venue: "Mundra Port Expansion, India",
      headline: "Expanding Trade: Infrastructure Upgrades at Mundra Port",
      redirect: "/our-impact/mundra-port-expansion",
      client: "Adani Ports and SEZ Ltd",
      status: "Completed",
      desc: "KPNG is proud to have been an integral partner in the Mundra Port Expansion project, one of India’s largest and most strategically important logistics infrastructure developments. In collaboration with Adani Ports and SEZ Ltd, KPNG contributed to enhancing the port's capabilities to accommodate increasing cargo volumes, improve operational efficiency, and support global trade. This project plays a key role in solidifying India’s position as a major maritime hub in Asia, and KPNG’s involvement was pivotal in ensuring its successful completion.",
      scope: "KPNG played a crucial role in the Mundra Port Expansion by providing essential heavy machinery, engineering expertise, and logistical support across various phases of the project. Our contributions extended from construction and infrastructure development to material transport and logistics operations, ensuring the seamless execution of this large-scale expansion. In port infrastructure construction, KPNG deployed excavators, bulldozers, and graders to build and expand cargo handling areas, quays, and docks, enhancing the port’s ability to accommodate larger vessels and improve efficiency. For container handling, we supplied cranes, reach stackers, and forklifts, which were instrumental in increasing throughput and enabling quicker vessel turnaround times. Additionally, our involvement in expanding storage and transport areas ensured the development of optimized logistical zones for container storage and smooth traffic flow within the port. To support land reclamation and dredging efforts, KPNG provided advanced dredging and earth-moving equipment, helping to extend the port’s operational area and facilitate the construction of deeper docks for modern shipping vessels. Through our expertise and cutting-edge solutions, we contributed significantly to strengthening Mundra Port’s position as a key hub in global trade and logistics.",
      operations: "KPNG’s skilled engineers collaborated closely with Adani Ports to provide customized solutions tailored to the unique challenges of the Mundra Port Expansion. Leveraging our expertise in large-scale logistics infrastructure, we offered high-value technical insights and operational support to ensure the project’s success. Our team developed specialized strategies for seamless integration of new port sections, optimizing cargo flow, and enhancing connectivity with key transportation networks such as rail and road. Throughout the project, KPNG provided continuous on-site support and maintenance, ensuring that all machinery operated efficiently, minimizing downtime, and keeping construction progress on track. Safety remained a top priority at every stage of the expansion, with KPNG strictly adhering to international safety protocols and quality standards to create a secure working environment for all personnel. By delivering innovative technical solutions, operational excellence, and a commitment to safety, KPNG played a pivotal role in strengthening Mundra Port’s capacity to handle increased trade volumes and support global logistics operations.",
      impact: "The Mundra Port Expansion represents a significant milestone in strengthening India’s position as a global trade hub. By enhancing the handling capacity of the country’s largest commercial port, the expansion will streamline cargo movement, improve efficiency, and support India’s rapidly growing economy. KPNG’s involvement in this project underscores our expertise in delivering advanced machinery solutions and logistical support for large-scale infrastructure developments. Our contributions have played a crucial role in ensuring the port’s long-term operational growth and ability to accommodate increasing trade demands. As we continue to drive innovation in logistics and infrastructure, KPNG remains committed to supporting projects that shape the future of global trade networks and contribute to economic development worldwide."
    },
    {
      id: 19,
      imgUrl: image19,
      sector: "Manufacturing",
      venue: "Tata Steel Plant, India",
      headline: "Forging Ahead: Modernizing Tata Steel Plant",
      redirect: "/our-impact/tata-steel-plant",
      client: "",
      status: "Completed",
      desc: "KPNG was involved in modernizing the Tata Steel Plant, upgrading power systems and integrating smart technologies for a more efficient and eco-friendly production process."
    },
    {
      id: 20,
      imgUrl: image20,
      sector: "Transportation",
      venue: "Kolkata East-West Metro Corridor, India",
      headline: "Connecting Communities: Kolkata's Metro Expansion",
      redirect: "/our-impact/east-west-metro-corridor",
      client: "Kolkata Metro Rail Corporation (KMRC)",
      status: "Completed",
      desc: "KPNG is honored to have played a pivotal role in the successful completion of the Kolkata East-West Metro Corridor, a landmark transportation project undertaken by the Kolkata Metro Rail Corporation (KMRC). As a key contributor to this ambitious initiative, KPNG provided heavy machinery, engineering expertise, and construction support, ensuring the seamless development of a metro system that enhances urban mobility, reduces congestion, and promotes sustainable transportation in one of India’s busiest metropolitan cities.",
      scope:"The Kolkata East-West Metro Corridor posed several unique engineering and construction challenges, particularly due to its underwater tunnel segment beneath the Hooghly River, a first-of-its-kind in India. KPNG’s advanced infrastructure solutions and heavy machinery played a crucial role in overcoming these challenges. KPNG supplied tunnel boring machines (TBMs), excavators, and earth-moving equipment essential for digging through the challenging geology beneath Kolkata’s dense urban landscape. These machines ensured precise excavation while maintaining the structural integrity of the surrounding areas. For metro station construction, KPNG provided cranes, lifting equipment, and material handling solutions for both underground and elevated stations along the corridor. Our equipment facilitated the installation of heavy pre-cast segments and reinforced structures, ensuring efficient and safe station development. To support seamless metro operations, KPNG contributed paving and alignment equipment for track laying. Our machinery played a vital role in ensuring that the rail infrastructure met high-speed metro system standards, contributing to the smooth functioning of the corridor. KPNG also assisted in the installation of critical electrical and signaling infrastructure. Our lifting and support machinery were instrumental in placing electrification systems, overhead cables, and advanced signaling equipment, ensuring operational efficiency and passenger safety. Beyond machinery supply, KPNG’s specialized engineering expertise played a key role in tackling complex tunneling challenges, including ground stabilization and precision TBM operations. Our on-site maintenance teams ensured that all equipment functioned optimally, reducing downtime and maintaining construction efficiency. Strict adherence to international safety and quality standards was a priority for KPNG throughout the project. By implementing stringent safety protocols and quality control measures, we ensured worker safety and infrastructure durability at every stage of construction. The successful completion of the Kolkata East-West Metro Corridor will transform urban mobility in the city, reducing congestion and significantly improving connectivity. KPNG is proud to have contributed to this landmark project, reinforcing our commitment to pioneering infrastructure solutions that enhance urban transportation systems worldwide.",
      operations: "KPNG worked closely with KMRC and other project stakeholders to deliver specialized solutions tailored to the East-West Metro Corridor’s complex urban environment. Our contributions went beyond equipment supply, extending into critical areas of engineering and project execution. Given the project’s underground and underwater components, KPNG provided specialized construction techniques and custom machinery adaptations to ensure seamless execution. Our expertise in tunneling and metro infrastructure played a key role in overcoming the project’s unique challenges. To maintain uninterrupted progress, KPNG’s on-site maintenance teams ensured that all machinery remained operational throughout the construction phase. By minimizing downtime and addressing technical issues in real-time, we helped maximize efficiency and adherence to project timelines. The Kolkata Metro project required strict adherence to international safety standards. KPNG followed advanced safety protocols, ensuring a risk-free environment for workers and the public. Our commitment to safety and compliance was instrumental in maintaining smooth operations and securing the long-term reliability of the metro system.",
      impact: "The Kolkata East-West Metro Corridor is set to transform urban mobility in Kolkata by reducing travel time, easing traffic congestion, and promoting eco-friendly transport solutions. This modern metro network will significantly improve connectivity between Salt Lake, Howrah, and the central business districts, benefiting millions of daily commuters. KPNG is proud to have contributed to this transformative project, showcasing our ability to provide advanced machinery, engineering expertise, and construction support for complex transportation infrastructure. Our involvement reinforces our commitment to shaping the future of urban transit by delivering world-class metro systems that drive economic growth and sustainable development. With a strong track record in transportation infrastructure, KPNG looks forward to further collaborations that redefine urban connectivity and public transit efficiency across the globe."
    },
    {
      id: 21,
      imgUrl: image21,
      sector: "Exposition",
      venue: "Dubai Expo 2020, UAE",
      headline: "Sustainable Showcase: Infrastructure at Dubai Expo 2020",
      redirect: "/our-impact/dubai-expo",
      client: "Expo 2020 Dubai",
      status: "Completed",
      desc: "KPNG is proud to have been part of the world-renowned Dubai Expo 2020, one of the most ambitious global events held in the UAE. This landmark project, organized by Expo 2020 Dubai, aimed to bring together nations from around the world to showcase innovation, culture, and sustainable development. KPNG played a vital role in the logistics, construction, and infrastructure development, ensuring that the Expo grounds were equipped with state-of-the-art facilities and services to host millions of visitors from across the globe.",
      scope: "KPNG’s involvement in the Dubai Expo 2020 was crucial in ensuring the seamless development and operational readiness of the event. We contributed through the provision of heavy machinery, engineering expertise, and logistical support across various project phases, including site preparation, construction of pavilions, infrastructure installation, and event logistics. KPNG provided advanced earth-moving equipment, including bulldozers, excavators, and graders, for preparing the site for the Expo's expansive infrastructure, which involved leveling and clearing the land for the construction of exhibition halls, pavilions, and public spaces. For the construction of the Expo's iconic pavilions and other key buildings, we supplied cranes, lifting equipment, and material handling solutions to install prefabricated components, steel structures, and glass facades, ensuring that these facilities reflected cutting-edge architecture and sustainable practices. We also contributed to the construction of green infrastructure, including the installation of energy-efficient systems, waste management systems, and water recycling systems, which aligned with Expo 2020’s commitment to sustainability. Our specialized machinery was used to lay foundations for solar panel installations and manage waste and water systems. With millions of visitors expected, KPNG was instrumental in creating the transportation networks within the Expo grounds, providing material handling equipment and transport vehicles to develop access roads, pedestrian paths, and shuttle systems to ensure smooth attendee movement. KPNG worked closely with Expo 2020 organizers and contractors to ensure that every phase of development met the highest standards of efficiency, sustainability, and innovation. Our expertise extended beyond machinery supply to include critical engineering and operational support, offering tailored solutions for the unique architectural and logistical challenges of Expo 2020. Throughout the project, KPNG’s teams were on-site, offering real-time technical assistance and machinery maintenance to prevent delays and maximize operational efficiency, all while adhering to international safety standards and sustainable construction practices to ensure that all operations were conducted in an environmentally responsible manner while prioritizing safety for all personnel involved.",
      operations: "KPNG’s experienced engineers collaborated closely with Expo 2020’s project teams to develop tailored solutions for the unique needs of the Expo. Our contribution to the project went beyond machinery, extending into the realms of technical execution and on-site operational excellence. KPNG’s engineers provided strategic oversight in coordinating the construction schedules, ensuring all equipment and machinery were deployed efficiently across multiple workstreams. Our project management team worked alongside Expo 2020’s contractors to ensure milestones were met within the established timelines. Throughout the project, KPNG provided maintenance teams to ensure that machinery remained in top working condition. This ongoing support helped minimize downtime and maximize efficiency during the construction phase. KPNG adhered to international safety standards, ensuring the safety of both workers and visitors on-site. Additionally, we contributed to Expo 2020’s sustainability goals, helping to construct a venue designed with eco-friendly materials and energy-efficient solutions.",
      impact: "The Dubai Expo 2020 is a monumental achievement in global collaboration, innovation, and sustainability. With over 190 countries participating, it showcased cutting-edge technologies, cultural exchange, and solutions to some of the world’s most pressing challenges. KPNG’s contribution to this iconic event helped create a world-class venue that not only hosted a successful Expo but also left behind a lasting legacy of innovation, environmental responsibility, and global cooperation. As a key partner in the Expo’s development, KPNG played an important role in ensuring that Dubai Expo 2020 was a smoothly executed, iconic global event. Our involvement highlights our commitment to providing innovative infrastructure solutions and expert logistical support for large-scale international projects. KPNG remains dedicated to advancing global expositions and contributing to the development of spaces that promote cross-cultural exchange and innovation on a global scale. We look forward to further collaborations on projects that inspire and shape the future."
    },
    {
      id: 22,
      imgUrl: image22,
      sector: "Energy",
      venue: "Singareni Collieries Power Plant, India",
      headline: "Powering Progress: Renewable Energy Solutions in Singareni",
      redirect: "/our-impact/singareni-collieries-power-plant",
      client: "The Singareni Collieries Company Limited",
      status: "Completed",
      desc: "KPNG is proud to have played a key role in the successful completion of the Singareni Collieries Power Plant, a significant project in India’s energy sector. Commissioned by The Singareni Collieries Company Limited, this coal-based thermal power plant is an essential part of the nation’s energy infrastructure. KPNG’s involvement provided crucial support in construction, heavy machinery supply, and logistics, contributing to the development of a state-of-the-art facility that helps meet the growing power demands of the region.",
      scope: "The Singareni Collieries Power Plant posed several complex challenges due to the scale of the project and its reliance on heavy machinery for construction, material handling, and power generation infrastructure. KPNG contributed significantly in various aspects of the project, from site preparation and construction to equipment installation and support for power plant operations. Key areas of our involvement included: Site Preparation and Infrastructure Development – KPNG provided essential excavators, bulldozers, and graders for clearing and preparing the vast land required for the power plant. These machines were instrumental in leveling the site and making it ready for the construction of power generation units and auxiliary facilities. Construction of Power Generation Units – For the construction of the power plant’s core generation units, KPNG supplied cranes, lifting equipment, and material handling solutions to ensure the safe installation of boilers, turbines, and generators. These heavy-duty machines enabled the smooth assembly of the plant’s infrastructure. Transport and Logistics Support – KPNG’s fleet of transport vehicles was deployed to move large quantities of construction materials to and from the site, as well as machinery parts for the plant’s construction. Our transport solutions ensured efficient and timely delivery, reducing project delays. Installation of Electrical and Power Systems – KPNG played a crucial role in installing key electrical systems, transformers, and power cables essential for the plant’s operations. Our heavy machinery and equipment were utilized to place and install large-scale electrical infrastructure.",
      operations: "KPNG’s contribution went beyond providing heavy machinery and logistical support. Our engineering expertise was a vital part of the power plant's successful implementation: Custom Engineering Solutions – KPNG’s engineers worked with Singareni Collieries to offer tailored solutions to optimize the construction process and ensure that every component of the plant was built to meet international standards. On-Site Maintenance and Technical Support – During the construction phase, KPNG provided maintenance services and on-site technical support to ensure that machinery was well-maintained and operated smoothly, reducing potential delays or downtime during the critical phases of construction. Safety and Compliance – KPNG adhered to strict safety protocols and environmental standards throughout the project. Our commitment to safety ensured a secure working environment for all on-site personnel, and we worked closely with Singareni Collieries to meet regulatory compliance requirements.",
      impact: "The Singareni Collieries Power Plant is a crucial addition to India’s energy grid, providing reliable power to meet the demands of industries and households in the region. By improving the efficiency of coal-based power generation, the plant contributes significantly to the economic growth and industrial development in the region. KPNG’s involvement in this monumental project underscores our capability to provide innovative heavy machinery solutions, engineering expertise, and logistical support in the energy sector. Our contribution helped ensure the timely completion of the power plant, facilitating its seamless integration into the national power network. We look forward to further collaborations in the energy sector and remain committed to contributing to the development of infrastructure that powers growth and sustains the future."
    },
    {
      id: 23,
      imgUrl: image23,
      sector: "Transportation",
      venue: "Rio de Janeiro Light Rail, Brazil",
      headline: "Rails of Change: Sustainable Light Rail in Rio",
      redirect: "/our-impact/rio-de-janeiro-light-rail",
      client: "VLT Carioca Consortium",
      status: "Completed",
      desc: "KPNG is proud to have played a significant role in the Rio de Janeiro Light Rail project, a key transportation initiative designed to enhance the urban mobility infrastructure in Brazil’s vibrant and bustling city of Rio de Janeiro. Commissioned by the VLT Carioca Consortium, this light rail system is a transformative project aimed at reducing traffic congestion, improving public transportation, and providing a sustainable mobility solution to Rio’s residents and visitors. KPNG contributed with its expertise in construction, heavy machinery, and logistics, ensuring the project’s timely and efficient completion.",
      scope: "The Rio de Janeiro Light Rail project involved constructing a modern light rail system that spans several vital urban areas, including downtown Rio and the surrounding neighborhoods. KPNG’s contribution spanned across various key project phases, from the preparation of rail infrastructure to the installation of essential systems for operational efficiency. Our involvement included: Rail Infrastructure Construction – KPNG provided earth-moving equipment and construction machinery, including excavators, bulldozers, and graders, to assist in clearing and preparing the land for the installation of rail tracks and stations. This included the excavation of tunnels, foundation works for elevated rail sections, and the development of transport corridors. Track Laying and Alignment – KPNG supplied specialized track laying equipment, such as track welding machines and rail handling cranes, to assist in the precise alignment and installation of rail tracks. This was critical to ensuring the light rail system’s operational efficiency and smooth rides for passengers. Station and Infrastructure Development – KPNG was instrumental in the construction of station platforms, depots, and auxiliary facilities. Our cranes, lifting equipment, and material handling solutions were deployed to position large pre-fabricated components for station structures and ensure the safe installation of elevated rail sections. Electrical and Signaling Systems – KPNG’s involvement included assisting in the installation of electrical systems, including overhead contact lines and signaling equipment essential for the operation of the light rail. We supplied cranes and lifting equipment to handle and install heavy electrical components.",
      operations: "KPNG’s experienced engineers worked closely with the VLT Carioca Consortium to offer tailored solutions to the unique challenges posed by the urban landscape and technical requirements of the Rio de Janeiro Light Rail. Our expertise and technical support were integral to the project’s success: Customized Engineering Solutions – KPNG’s team worked on developing innovative solutions to address the complexities of building a light rail system within a densely populated urban environment. We helped design and implement the integration of light rail infrastructure with existing road networks, ensuring that traffic flow and passenger safety were optimized. On-Site Technical Support and Maintenance – KPNG provided on-site maintenance teams and technical support to ensure all machinery used in the construction of the light rail system remained in optimal working condition. This contributed to the overall efficiency of the project, minimizing downtime and delays. Safety and Compliance – The project adhered to rigorous safety standards, and KPNG played a key role in ensuring that safety measures were followed at every stage of the construction process. Our teams were dedicated to maintaining a safe working environment for all personnel involved.",
      impact: "The Rio de Janeiro Light Rail is a major step forward in transforming Rio’s public transportation system. By offering a clean, efficient, and modern solution for urban mobility, the project helps to alleviate congestion, reduce emissions, and provide a faster alternative to existing transportation methods for thousands of passengers every day. KPNG’s contribution to the Rio de Janeiro Light Rail is a testament to our commitment to providing innovative infrastructure solutions in the transportation sector. Our involvement in this project showcases our ability to support large-scale transportation infrastructure projects with precision, expertise, and cutting-edge technology. As we continue to support infrastructure projects globally, KPNG remains dedicated to contributing to the development of sustainable and efficient urban mobility solutions that positively impact communities and enhance quality of life."
    },
    {
      id: 24,
      imgUrl: image24,
      sector: "Transportation",
      venue: "Melbourne Metro Tunnel, Australia",
      headline: "Tunnel Vision: Melbourne's Metro Infrastructure",
      redirect: "/our-impact/melbourne-metro-tunnel",
      client: "Cross Yarra Partnership",
      status: "Completed",
      desc: "KPNG is proud to have contributed to the Melbourne Metro Tunnel project, one of the most ambitious and transformative transportation projects in Australia. Commissioned by the Cross Yarra Partnership, the Melbourne Metro Tunnel is designed to alleviate congestion, enhance connectivity, and improve the overall efficiency of Melbourne’s transport network. This underground rail system aims to create a more integrated and efficient citywide transport infrastructure, and KPNG was privileged to play a key role in the construction, logistics, and infrastructure development.",
      scope: "The Melbourne Metro Tunnel involved the construction of a 9-kilometer underground rail corridor connecting major train lines across Melbourne, creating more capacity for the city’s public transport system. KPNG provided extensive support across a range of areas in the construction of this complex infrastructure project. Our key areas of involvement included: Underground Excavation and Site Preparation – KPNG’s contribution started with site clearing, excavation, and preparation for the tunnel. We deployed specialized excavators, bulldozers, and heavy-duty machinery to handle the difficult task of preparing the urban underground site. This critical phase required precision to minimize disruption to the surrounding city infrastructure. Tunnel Boring and Construction – KPNG was involved in supporting the tunnel boring machines (TBM) for the excavation of tunnels, providing equipment and machinery to facilitate smooth operations. We contributed to ensuring safe and efficient tunnel construction, which was essential to meeting the tight timeline for the project’s completion. Station and Rail Infrastructure Development – KPNG played a crucial role in the construction of underground stations and rail infrastructure. We supplied cranes, hoists, and lifting equipment to position large pre-fabricated components such as station walls, ceiling slabs, and rail sections. This support was essential in reducing assembly time and ensuring structural integrity. Electrification and Signaling Systems – Our role extended to the installation of electrification and signaling systems that are vital to the operation of the metro system. KPNG provided material handling equipment and cranes to install electrical infrastructure, including rail tracks, overhead power lines, and safety systems.",
      operations: "KPNG’s engineering team worked closely with the Cross Yarra Partnership to provide tailored solutions to the challenges posed by constructing a major transportation system under a dense, urban environment. Our expertise ensured that the construction process was efficient and met all regulatory standards: Custom Engineering Solutions – The Melbourne Metro Tunnel project presented unique challenges, such as working beneath the city and ensuring minimal disruption to local businesses and communities. KPNG’s engineering team offered customized solutions for tunnel design and construction, ensuring safe, efficient, and cost-effective methods of operation. Operational Support and Equipment Maintenance – KPNG’s involvement extended beyond construction as we provided on-site operational support and maintenance services for the machinery used in tunnel construction. Our maintenance services were essential in ensuring that all machinery and equipment operated at peak efficiency, helping to prevent delays. Safety and Compliance – The project required strict adherence to health and safety standards due to the complexities of working underground and in an urban environment. KPNG was dedicated to ensuring safety on-site, providing risk management expertise and implementing safety protocols to protect workers and the public throughout the project.",
      impact: "The Melbourne Metro Tunnel is set to revolutionize Melbourne’s public transport network, increasing capacity and improving journey times for commuters. With the new metro tunnels, the project provides additional capacity for trains to run more frequently, ultimately alleviating congestion in Melbourne’s rail system. This will not only improve daily commutes but will also promote sustainable, eco-friendly public transportation as Melbourne continues to grow. KPNG’s role in the Melbourne Metro Tunnel project highlights our commitment to providing high-quality infrastructure solutions in the transportation sector. By contributing advanced machinery, technical expertise, and operational support, we were able to ensure the efficient construction of this critical urban transport project. As we continue to support major infrastructure projects globally, KPNG remains dedicated to developing and enhancing transportation systems that contribute to the growth of smart, connected cities worldwide."
    },
    {
      id: 25,
      imgUrl: image25,
      sector: "Transportation",
      venue: "Gautrain Expansion, South Africa",
      headline: "Driving Innovation: Gautrain's Advanced Expansion",
      redirect: "/our-impact/gautrain-expansion",
      client: "Gauteng Provincial Government (GPG)",
      status: "Completed",
      desc: "KPNG is honored to have played a significant role in the successful Gautrain Expansion project, a key transportation initiative aimed at improving and expanding South Africa's public transport infrastructure. Commissioned by the Gauteng Provincial Government (GPG), the Gautrain Expansion sought to enhance the capacity of the Gautrain Rapid Rail Network, providing a faster, safer, and more efficient rail service for residents and visitors in the Gauteng Province. KPNG contributed by providing heavy machinery, construction expertise, and logistics support, ensuring the project’s timely and high-quality delivery.",
      scope: "The Gautrain Expansion involved the extension of existing rail lines, the construction of new stations, and the enhancement of the overall infrastructure to increase the capacity and efficiency of the system. KPNG’s contribution spanned a range of construction and logistical areas critical to the project’s success: Infrastructure Development – KPNG provided excavators, bulldozers, and grading equipment to assist in the preparation and clearing of land for new rail sections and stations. The project required substantial earthworks, particularly for tunneling, leveling, and alignment of new tracks to ensure seamless integration with existing rail infrastructure. Track Construction and Installation – KPNG’s specialized track-laying equipment played a vital role in laying down new rail tracks. The precision required in this phase was crucial to ensure the smooth and reliable operation of the expanded rail network. Our team deployed rail-lifting cranes and track welding machines to ensure the tracks were securely installed and aligned according to high-quality standards. Station and Depot Development – KPNG supported the development of new stations and depot facilities. We supplied cranes, hoists, and other lifting equipment to handle the installation of large station components, including roofs, platform structures, and other pre-fabricated elements essential for the station’s operational readiness. Electrification and Signaling Systems – The Gautrain Expansion required the upgrade of electrical systems and the installation of new signaling equipment to ensure the seamless operation of the extended rail system. KPNG provided cranes and hoisting equipment to facilitate the safe installation of high-voltage power systems and signaling infrastructure.",
      operations: "KPNG’s team of engineers worked closely with the Gauteng Provincial Government and the contractor consortium to provide tailored solutions for the challenges of expanding the Gautrain system. Our engineering expertise was essential in addressing the complexity of constructing and upgrading a live transport network in an urban environment: Customized Engineering Solutions – The expansion of Gautrain required innovative engineering solutions to integrate the new rail lines into the existing infrastructure. KPNG’s engineering team collaborated closely with project stakeholders to provide efficient designs that minimized disruption to current operations while maximizing the capacity and safety of the expanded network. Operational and Equipment Support – KPNG’s commitment to maintaining a high level of operational efficiency led us to provide on-site technical support and maintenance services for the machinery used throughout the project. We ensured that the heavy equipment used in construction remained operational and effective, preventing unnecessary delays and ensuring safety. Safety and Compliance – As with any large infrastructure project, safety was a top priority for the Gautrain Expansion. KPNG implemented rigorous health and safety protocols, working alongside the project team to create a safe environment for construction workers and the public. We ensured that all machinery operated in full compliance with industry safety standards.",
      impact: "The Gautrain Expansion significantly enhances the public transport network in Gauteng, providing a modern, reliable, and efficient rail system that serves commuters, reduces traffic congestion, and contributes to the region’s economic development. By extending rail coverage and increasing frequency, the project offers a sustainable transportation solution for one of South Africa’s most dynamic regions. KPNG’s involvement in the Gautrain Expansion is a testament to our expertise in supporting large-scale transportation projects. Through our provision of heavy machinery, engineering expertise, and logistical support, we helped ensure that the project was completed efficiently, safely, and to the highest standards. As we continue to engage in major transportation infrastructure projects globally, KPNG remains dedicated to driving innovation and sustainability in the transportation sector, supporting the creation of transport networks that shape the cities of the future."
    },
    {
      id: 26,
      imgUrl: image26,
      sector: "Transportation",
      venue: "Hong Kong Zhuhai-Macau Bridge, China",
      headline: "Bridging Cities: Monumental Infrastructure Achievement",
      redirect: "/our-impact/zhuhai-macau-bridge",
      client: "HZMB Authority",
      status: "Completed",
      desc: "KPNG is proud to have been involved in the groundbreaking Hong Kong Zhuhai-Macau Bridge project, an iconic infrastructure development that stands as a symbol of innovation and connectivity. Commissioned by the HZMB Authority, this transportation project connects the regions of Hong Kong, Zhuhai, and Macau, facilitating the smooth flow of traffic between the two cities and reducing travel time significantly. The bridge, which includes tunnels, artificial islands, and marine construction, is a critical component in improving regional integration and economic development.",
      scope: "KPNG contributed to various aspects of the Hong Kong Zhuhai-Macau Bridge project, utilizing its expertise in heavy machinery, construction, and logistics to support the project’s success. For **Marine Construction and Infrastructure**, KPNG provided heavy equipment for marine construction, including dredgers, pile drivers, and cranes, which were crucial for building the bridge’s supporting structures in the sea. Our specialized machinery was deployed to support the construction of the artificial islands and tunnels, ensuring the project adhered to the highest standards of safety and structural integrity. In terms of **Bridge Foundations and Support Structures**, the Hong Kong Zhuhai-Macau Bridge’s foundation required substantial excavation and pile driving work, a process that KPNG assisted with through the provision of high-capacity equipment. Our team supported the installation of massive bridge piers and support structures, ensuring the bridge’s long-term stability. For the **Construction of Tunnels and Crossings**, KPNG was involved in the development of the bridge’s submarine tunnel segment. We provided tunneling machinery, such as tunnel boring machines (TBMs) and excavators, to help with digging and lining the tunnels beneath the sea. This was a crucial aspect of the project, as it enabled the bridge to maintain a smooth connection between Hong Kong and Macau without interrupting the natural marine ecosystem. Finally, in **Logistics and Material Handling**, KPNG provided logistical support to ensure timely transportation of materials and equipment to the construction sites. Our material handling equipment facilitated the movement of concrete segments, steel structures, and other heavy materials, crucial for the bridge’s assembly.",
      operations: "KPNG’s engineering team worked closely with the HZMB Authority and other stakeholders to provide innovative solutions for this challenging and technically demanding project. Our contributions ensured that construction proceeded efficiently and met the highest safety and quality standards. For **Customized Engineering Solutions**, the Hong Kong Zhuhai-Macau Bridge presented numerous engineering challenges due to its marine environment and the complex design involving both land and sea segments. KPNG’s team worked with the project consortium to implement effective strategies for overcoming these challenges, including the installation of bridge supports in deep waters and ensuring the safety and stability of the tunnel sections. Regarding **Equipment Support and Maintenance**, KPNG’s commitment to operational efficiency included providing ongoing maintenance and technical support for the machinery and equipment used in the project. We ensured that the equipment remained in optimal condition throughout the construction phases, helping to minimize downtime and maintain consistent progress. In terms of **Safety Compliance and Risk Management**, safety was paramount, given the nature of the project’s scale and its complex environmental considerations. KPNG adhered to stringent safety protocols, conducting regular risk assessments and providing safety training to all personnel involved in the project to ensure that the work environment remained safe and compliant with international safety standards.",
      impact: "The Hong Kong Zhuhai-Macau Bridge is a remarkable achievement that has transformed regional connectivity in China. As the world’s longest sea-crossing bridge, it reduces travel time between the three cities from about three hours to under 30 minutes, facilitating the flow of goods and passengers, and boosting trade and tourism in the region. The bridge’s construction is a milestone in engineering, and KPNG’s involvement in this project underscores our capacity to contribute to large-scale, high-impact infrastructure projects. By providing cutting-edge machinery, technical expertise, and logistical support, we were able to ensure that the Hong Kong Zhuhai-Macau Bridge was completed to the highest standards of quality, safety, and precision. KPNG remains committed to delivering world-class solutions for infrastructure projects that shape the future of transportation and contribute to the development of interconnected global economies.",
    },
    {
      id: 27,
      imgUrl: image27,
      sector: "Aviation",
      venue: "New Istanbul Airport, Turkey",
      headline: "Flying High: Powering New Istanbul Airport",
      redirect: "/our-impact/new-istanbul-airport",
      client: "IGA (Istanbul Grand Airport)",
      status: "Completed",
      desc: "KPNG is proud to have been involved in the monumental New Istanbul Airport project, one of the largest and most significant aviation infrastructure developments in the world. Commissioned by IGA (İstanbul Grand Airport), this state-of-the-art airport is designed to become a major hub connecting Europe, Asia, and beyond. The project’s scale and complexity required meticulous planning, innovation, and expertise, and KPNG contributed significantly to its success, providing heavy machinery, engineering support, and logistics solutions throughout the construction phases.",
      scope: "The New Istanbul Airport project encompasses the construction of an extensive airport terminal, runways, taxiways, aprons, and supporting infrastructure. The scope of the project was vast, involving thousands of construction workers, engineers, and contractors. KPNG played a pivotal role in several critical aspects: Earthworks and Site Preparation – KPNG was involved in the initial site preparation and earthworks, which included land grading, excavation, and leveling to create a solid foundation for the airport’s various components. Our excavators, bulldozers, and loaders were essential in handling the large volumes of material needed to prepare the site. Runway and Taxiway Construction – The construction of the airport’s runways and taxiways required precise engineering and a high level of coordination. KPNG provided heavy machinery for asphalt laying, compaction, and paving, ensuring that the surfaces met the stringent standards required for aviation operations. The project also required the installation of lighting systems and navigational aids, where KPNG contributed logistical support and equipment. Terminal and Passenger Facilities – KPNG’s support extended to the construction of the airport terminal and passenger facilities, which included the installation of massive glass facades, structural steel elements, and specialized systems for security, lighting, and ventilation. Our cranes, hoists, and lifting equipment played a key role in the safe and timely assembly of these large components. Airport Support Infrastructure – Beyond the terminal and runways, the project required the construction of parking facilities, access roads, and cargo terminals. KPNG was involved in the logistical support of these areas, supplying material handling equipment and ensuring that the construction process was efficient and on schedule.",
      operations: "KPNG’s engineering team collaborated closely with the IGA (İstanbul Grand Airport) and other stakeholders to address the challenges posed by this large-scale project. The airport’s design demanded high levels of precision, especially in structural integrity, safety, and sustainability: Customized Engineering Solutions – KPNG’s expertise in engineering and construction helped to provide innovative solutions for various design challenges, including the creation of vast concrete foundations for the terminals and runways, as well as integrating complex infrastructure systems. Operational Support and Equipment Maintenance – KPNG’s involvement extended beyond the construction phase. We provided equipment maintenance services to ensure that machinery remained operational throughout the project, minimizing downtime and maximizing efficiency. Our on-site support teams ensured smooth operations by addressing any equipment-related issues promptly. Safety and Compliance – Safety was a top priority on this high-profile project, and KPNG adhered to the highest safety standards throughout every phase. Our safety protocols ensured that all work was completed without incident, and our team worked closely with IGA to implement best practices in construction site safety.",
      impact: "The New Istanbul Airport is set to become a global aviation hub, increasing Turkey's capacity for international air traffic and significantly enhancing its position as a major player in the aviation industry. This modern airport is designed to accommodate tens of millions of passengers annually and will serve as a key gateway between Europe, Asia, and the Middle East. KPNG’s involvement in the New Istanbul Airport project exemplifies our ability to manage large-scale, complex infrastructure projects in the aviation sector. By providing advanced machinery, technical expertise, and operational support, we were able to contribute to the creation of a world-class airport that will serve as a model for future global aviation infrastructure projects. As we continue to support infrastructure projects worldwide, KPNG remains committed to advancing aviation systems that foster connectivity and economic growth across regions."
    },
    {
      id: 28,
      imgUrl: image28,
      sector: "Transportation",
      venue: "Lagos Light Rail, Nigeria",
      headline: "Urban Mobility: Advancing Lagos Light Rail",
      redirect: "/our-impact/lagos-light-rail",
      desc: "KPNG provided power infrastructure and network systems for the Lagos Light Rail project, enhancing the city's transportation capacity and reducing traffic congestion. "
    },
    {
      id: 29,
      imgUrl: image29,
      sector: "Logistics",
      venue: "Panama Canal Expansion, Panama",
      headline: "Gateway to the World: Panama Canal Expansion",
      redirect: "/our-impact/panama-canal-expansion",
      desc: "KPNG contributed to the power and network infrastructure for the Panama Canal expansion, enabling it to accommodate larger vessels and improving global shipping operations."
    },
    {
      id: 30,
      imgUrl: image30,
      sector: "Transportation",
      venue: "London Crossrail, UK",
      headline: "Revolutionizing Transit: London Crossrail Project",
      redirect: "/our-impact/london-crossrail",
      desc: "KPNG provided essential power and network infrastructure for the London Crossrail, Europe’s largest infrastructure project, which improved transportation across the city."
    },
  ];

  return (
    <div className="font-roboto-condensed min-h-screen">
      <div className="max-w-screen-xl mx-auto pt-20">
        <h2 className="text-3xl uppercase tracking-wide py-3 text-center">
          All Projects
        </h2>

        <div className="flex flex-wrap justify-center w-full gap-10">
          {projectsData.map((item) => (
            <Link to={item.redirect} state={item} key={item.id} className="flex flex-col gap-1">
              <img
                src={item.imgUrl}
                className="max-w-sm transition-all hover:scale-105 cursor-pointer"
              />
              <h5 className="text-red-600 font-semibold tracking-wider">
                {item.sector}
              </h5>
              <p className="">{item.headline}</p>
              <h5 className="text-gray-400 font-semibold tracking-wider">
                {item.venue}
              </h5>
            </Link>
          ))}
        </div>

        <div className="w-full flex justify-center pt-10">
          <button className="button-48 py-10">
            <span className="text">LOAD MORE</span>
          </button>
        </div>
      </div>

      <div className="flex items-center relative py-20">
        <div className="container mx-auto py-8 grid grid-cols-1 lg:grid-cols-2">
          {/* Image Section */}
          <div>
            <img
              src={imageDown}
              alt="Collaborative Partner"
              className="w-full h-full object-cover shadow"
            />
          </div>

          {/* Text Section */}
          <div className="md:absolute max-w-screen-md right-[20%] top-[25%]">
            <div className="bg-gray-900 text-white p-8 md:rounded-lg flex flex-col justify-center">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4">
                Let’s Talk
              </h2>
              <h2 className="text-3xl sm:text-4xl uppercase lg:text-5xl font-light mb-4">
                Let’s Build Together
              </h2>
              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Need to Reach Us?
              </h3>
              <div>
                <Link to={"/contact"} className="button-48 py-10">
                  <span className="text">CONTACT US</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
