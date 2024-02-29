import { useEffect, useState } from "react";

export default function Home({ Link }) {
  return (
    <div className="flex-div">
      {/* <Navigation Link={Link} activeLink={activeLink} /> */}
      <Side Link={Link} />
    </div>
  );
}
function Navigation({ Link, activeLink }) {
  console.log(activeLink);
  return (
    <div className="home-left-section ">
      <div className="sidebar">
        <ol>
          <li
            key={"introduction"}
            className={activeLink === "introduction" ? "active" : ""}
          >
            <a href={`#introduction`} smooth={true} offset={-70} duration={500}>
              Introduction
            </a>
          </li>
          <li
            key={"What is Air Pollution?"}
            className={activeLink === "sources" ? "active" : ""}
          >
            <a href={`#whatis`} smooth={true} offset={-70} duration={500}>
              What is Air Pollution?
            </a>
          </li>
          <li
            key={"Sources of Air Pollution"}
            className={activeLink === "whatis" ? "active" : ""}
          >
            <a href={`#sources`} smooth={true} offset={-70} duration={500}>
              Sources of Air Pollution
            </a>
          </li>
          <li
            key={"Impact on Health"}
            className={activeLink === "impact" ? "active" : ""}
          >
            <a href={`#impact`} smooth={true} offset={-70} duration={500}>
              Impact on Health
            </a>
          </li>
          <li
            key={"Environmental Consequences"}
            className={activeLink === "enc-con" ? "active" : ""}
          >
            <a href={`#enc-con`} smooth={true} offset={-70} duration={500}>
              Environmental Consequences
            </a>
          </li>
          <li
            key={"Combating Air Pollution"}
            className={activeLink === "combating" ? "active" : ""}
          >
            <a href={`#combating`} smooth={true} offset={-70} duration={500}>
              Combating Air Pollution
            </a>
          </li>
          <li
            key={"Conclusion"}
            className={activeLink === "conclusion" ? "active" : ""}
          >
            <a href={`#conclusion`} smooth={true} offset={-70} duration={500}>
              Conclusion
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

function Side({ Link }) {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentActiveLink = "";
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 50 && rect.bottom >= 50) {
          currentActiveLink = section.id;
        }
      });

      console.log(currentActiveLink);
      setActiveLink(currentActiveLink);
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="home-content">
      <section>
        <img src="/ind-smoke.png" alt="polution" className="home-img" />
        <h1 id="title">Air Pollution: Understanding the Invisible Threat</h1>

        <h3>Table of content:</h3>
        <Navigation Link={Link} activeLink={activeLink} />
        <section id="introduction">
          <h1>Introduction</h1>
          <p>
            Air pollution is a pervasive environmental challenge that affects
            the air we breathe and poses serious risks to both human health and
            the planet. Often invisible to the naked eye, pollutants released
            into the atmosphere contribute to a range of environmental and
            health issues, making it a critical area of concern worldwide.
          </p>
        </section>
        <section id="whatis">
          <h1>What is Air Pollution?</h1>
          <p>
            Air pollution is a significant global concern that affects the
            quality of the air we breathe, leading to detrimental impacts on
            human health, the environment, and the climate. It results from the
            release of harmful substances, such as chemicals, particulate
            matter, and greenhouse gases, into the Earth's atmosphere. These
            pollutants can originate from various sources, including industrial
            processes, transportation, agriculture, and residential emissions.
            Exposure to air pollution can cause respiratory and cardiovascular
            diseases, affecting both short- and long-term health. By
            understanding the causes, effects, and potential solutions to air
            pollution, we can work towards creating a cleaner, healthier
            environment for all.
          </p>
        </section>
        <section id="sources">
          <h1>Sources of Air Pollution</h1>
          <h2>1. Industrial Activities:</h2>
          <img src="factory-polution.jpg" alt="polution" className="home-img" />
          <p>
            Industrial air pollution is a significant contributor to the overall
            air pollution problem. This type of pollution is primarily caused by
            the release of harmful substances and particulates from various
            industrial processes, such as manufacturing, energy production, and
            construction. Industrial facilities often emit pollutants like
            sulfur dioxide, nitrogen oxides, and particulate matter, which can
            have detrimental effects on both human health and the environment.
            These pollutants can react in the atmosphere to form secondary
            pollutants, such as ground-level ozone, which can further exacerbate
            health issues.
          </p>

          <h2>2. Vehicle Emissions:</h2>
          <img src="8452391.jpg" alt="polution" className="home-img" />
          <p>
            Vehicle emission pollution is a significant contributor to air
            pollution, primarily due to the combustion of fossil fuels in
            vehicles such as cars, buses, and trucks. These emissions include
            pollutants like nitrogen oxides, particulate matter, and volatile
            organic compounds, which can have detrimental effects on both human
            health and the environment. Vehicle emissions also contribute to the
            formation of ground-level ozone, a component of smog that can
            irritate the respiratory system and exacerbate health issues.
          </p>

          <h2>3. Burning of Fossil Fuels:</h2>
          <img src="fossil.jpg" alt="polution" className="home-img" />
          <p>
            Fossil fuel pollution refers to the air pollution generated by the
            combustion of fossil fuels, such as coal, oil, and natural gas.
            These fuels are primarily used for electricity generation,
            transportation, and industrial processes, making them a significant
            contributor to global air pollution. Fossil fuel pollution releases
            harmful substances like sulfur dioxide, nitrogen oxides, particulate
            matter, and mercury, which can have detrimental effects on human
            health, the environment, and the climate.
          </p>
          <p>
            Exposure to fossil fuel pollution can lead to respiratory and
            cardiovascular diseases, affecting both short- and long-term health.
            Moreover, the greenhouse gases emitted during fossil fuel
            combustion, such as carbon dioxide, contribute to global warming and
            climate change. To address fossil fuel pollution, transitioning to
            cleaner, renewable energy sources, improving energy efficiency, and
            implementing stricter emission regulations are essential steps
            towards a healthier, more sustainable environment. This will not
            only reduce air pollution but also mitigate the impacts of climate
            change.
          </p>
          <h2>4. Deforestation:</h2>
          <img src="deforestation.jpg" alt="polution" className="home-img" />
          <p>
            Air pollution caused by deforestation is an often-overlooked aspect
            of environmental degradation. Deforestation results in the removal
            of trees and vegetation, which play a crucial role in absorbing
            carbon dioxide and releasing oxygen. When forests are cut down, not
            only does the carbon sequestration capacity of the area diminish,
            but the soil and biomass are also decomposed, releasing stored
            carbon dioxide into the atmosphere.
          </p>
          <p>
            Additionally, deforestation can lead to the release of particulate
            matter, which can have detrimental effects on air quality. The
            burning of vegetation during deforestation processes, such as
            slash-and-burn agriculture, can release significant amounts of
            particulate matter, smoke, and other pollutants, which can impact
            local and regional air quality.{" "}
          </p>
          <p>
            {" "}
            To combat air pollution caused by deforestation, promoting
            sustainable land-use practices, reforestation, and afforestation
            efforts are essential. By preserving existing forests, restoring
            degraded areas, and implementing responsible agricultural practices,
            we can help maintain a healthy environment and reduce the negative
            impacts of air pollution.
          </p>
        </section>
        <section id="impact">
          <h1>Impact on Health</h1>
          <img src="2560462.jpg" alt="polution" className="home-img" />
          <p>
            ir pollution has significant impacts on human health, affecting both
            short- and long-term well-being. Exposure to air pollutants can lead
            to respiratory and cardiovascular diseases, such as asthma,
            bronchitis, and heart disease. Fine particulate matter (PM2.5) and
            ground-level ozone, both common air pollutants, can penetrate deep
            into the lungs, causing inflammation and irritation.{" "}
          </p>
          <p>
            Short-term exposure to high levels of air pollution can result in
            symptoms like coughing, wheezing, and shortness of breath, while
            long-term exposure can lead to more severe health issues, such as
            reduced lung function, lung cancer, and even premature death.
            Children, the elderly, and those with pre-existing conditions are
            particularly vulnerable to the adverse effects of air pollution.{" "}
          </p>
          <p>
            To protect public health, reducing air pollution levels through
            stricter regulations, promoting cleaner energy sources, and
            encouraging sustainable practices is crucial. By doing so, we can
            help create a healthier environment and reduce the burden of air
            pollution-related health issues.
          </p>
        </section>
        <section id="enc-con">
          <h1>Environmental Consequences</h1>
          <img src="8867923.jpg" alt="polution" className="home-img" />
          <p>
            Air pollution has detrimental effects on the environment, impacting
            various ecosystems and contributing to global issues like climate
            change. Pollutants such as sulfur dioxide, nitrogen oxides, and
            particulate matter can cause acid rain, which damages forests,
            lakes, and soils, affecting the biodiversity and health of these
            ecosystems. Acid rain can also contribute to the deterioration of
            buildings and infrastructure.{" "}
          </p>
          <p>
            Another environmental consequence of air pollution is the formation
            of ground-level ozone, which can harm vegetation and crops, reducing
            agricultural productivity and impacting food security. Furthermore,
            air pollution can lead to the formation of secondary pollutants,
            such as peroxyacetyl nitrates (PAN), which can damage plant tissues
            and reduce photosynthesis rates.
          </p>
          <p>
            {" "}
            Air pollution also contributes to climate change by releasing
            greenhouse gases, such as carbon dioxide and methane, which trap
            heat in the atmosphere and lead to global warming. To mitigate the
            environmental impacts of air pollution, implementing stricter
            regulations, promoting cleaner energy sources, and encouraging
            sustainable practices are essential steps towards a healthier, more
            sustainable environment.
          </p>
        </section>
        <section id="combating">
          <h1>Combating Air Pollution</h1>
          <img src="fight.jpg" alt="polution" className="home-img" />
          <p>
            <p>
              Combating air pollution requires a multi-faceted approach that
              involves various stakeholders, including governments, industries,
              communities, and individuals. Here are some strategies to address
              air pollution:
            </p>
            <ol>
              <li>
                Cleaner energy sources: Transitioning to renewable energy
                sources, such as wind, solar, and hydroelectric power, reduces
                the reliance on fossil fuels and decreases air pollution
                emissions.
              </li>
              <li>
                Stricter regulations: Implementing and enforcing stricter
                emission standards for industries, transportation, and energy
                production can significantly reduce air pollution levels.{" "}
              </li>
              <li>
                Energy efficiency: Encouraging energy efficiency in industries,
                buildings, and households reduces overall energy consumption and
                the demand for fossil fuels.{" "}
              </li>
              <li>
                {" "}
                Public transportation and alternative modes of transportation:
                Promoting public transportation, cycling, and walking reduces
                the number of vehicles on the road, leading to lower emissions
                and cleaner air.
              </li>
              <li>
                Reforestation and afforestation: Planting trees and restoring
                degraded areas help absorb carbon dioxide and mitigate the
                impacts of air pollution.{" "}
              </li>
              <li>
                {" "}
                Education and awareness: Educating the public about air
                pollution and its effects empowers individuals to make informed
                decisions and adopt more sustainable practices.{" "}
              </li>
              <li>
                International cooperation: Addressing air pollution requires
                global cooperation, as pollutants can travel across borders.
                International agreements and collaborations can help create a
                unified approach to combat air pollution.
              </li>
            </ol>
            <p>
              By implementing these strategies, we can work towards a cleaner,
              healthier environment and reduce the negative impacts of air
              pollution on both human health and the environment.
            </p>
          </p>
        </section>
        <section id="conclusion">
          <h1>Conclusion</h1>
          <p>
            Addressing the issue of air pollution requires a collective and
            sustained effort. By understanding its sources, effects, and
            adopting environmentally conscious practices, we can work towards a
            future with cleaner air, healthier communities, and a more
            sustainable planet.
          </p>
        </section>
      </section>
    </div>
  );
}
