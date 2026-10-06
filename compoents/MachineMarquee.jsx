"use client";

const machines = [
  "Industrial Mixers",
  "Pipe Extrusion Machine",
  "Granules Making Machine",
  "High Speed Mixer",
  "Plastic Scrap Grinder Machine",
  "Handheld Inkjet Printer",
];

export default function MachineMarquee() {
  return (
    <div className="clarity machine-marquee z-[9999]">
      <div className="machine-marquee__track">

        {/* SET 1 */}
        <div className="machine-marquee__group">
          {machines.map((machine) => (
            <MarqueeItem
              key={`first-${machine}`}
              machine={machine}
            />
          ))}
        </div>

        {/* EXACT DUPLICATE */}
        <div
          className="machine-marquee__group"
          aria-hidden="true"
        >
          {machines.map((machine) => (
            <MarqueeItem
              key={`second-${machine}`}
              machine={machine}
            />
          ))}
        </div>

      </div>
    </div>
  );
}


function MarqueeItem({ machine }) {
  return (
    <div className="machine-marquee__item">

      <span className="machine-marquee__separator">
        |
      </span>

      <span className="machine-marquee__gear">
        ⚙
      </span>

      <span className="machine-marquee__text">
        {machine}
      </span>

    </div>
  );
}