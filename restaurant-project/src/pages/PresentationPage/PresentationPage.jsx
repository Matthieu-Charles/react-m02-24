import ConfettiGenerator from "confetti-js";
import { useEffect } from "react";

function PresentationPage() {
  useEffect(() => {
    const confettiSettings = {
      target: "confetti-holder",
      max: "127",
      size: "1",
      animate: true,
      props: [
        "circle",
        "square",
        "triangle",
        "line",
        { type: "svg", src: "site/hat.svg", size: 25, weight: 0.2 },
      ],
      colors: [
        [165, 104, 246],
        [230, 61, 135],
        [0, 199, 228],
        [253, 214, 126],
      ],
      clock: "25",
      rotate: true,
      width: "1536",
      height: "703",
      start_from_edge: false,
      respawn: true,
    };

    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();

    return () => confetti.clear();
  }, []);

  return (
    <>
      <canvas id="confetti-holder"></canvas>
      <div className="my-5 container d-flex fixed-top">
        <div className="col mt-5">
          <img
            className="w-100 logo"
            src="/src/assets/logo_restaurant.jpg"
            alt="logo du restaurant"
          />
        </div>
        <div className="col mt-5 p-4">
          <h1>Thynk Cafe</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ea atque
            exercitationem adipisci numquam corporis natus laborum incidunt
            odit. Beatae vel accusamus ipsum in distinctio molestiae esse quam
            rerum sint!Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Id ea atque exercitationem adipisci numquam corporis natus laborum
            incidunt odit. Beatae vel accusamus ipsum in distinctio molestiae
            esse quam rerum sint!Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Id ea atque exercitationem adipisci numquam
            corporis natus laborum incidunt odit. Beatae vel accusamus ipsum in
            distinctio molestiae esse quam rerum sint!
          </p>
        </div>
      </div>
    </>
  );
}

export default PresentationPage;
