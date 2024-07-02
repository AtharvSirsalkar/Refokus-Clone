import React from "react";

function Footer() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto flex gap-32">
        <div className="basis-1/2">
          <h1 className="text-[11.5rem] font-semibold leading-none tracking-tight">
            refokus.
          </h1>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3">
            <h4 className="mb-10 capitalized text-zinc-500">Socials</h4>
            {["Instagram", "Twitter (X?)", "LinkedIn"].map((elem, index) => (
              <a key={index} className="block mt-2 text-zinc-300 capitalized">
                {elem}
              </a>
            ))}
          </div>
          <div className="basis-1/3">
            <h4 className="mb-10 capitalized text-zinc-500">Socials</h4>
            {["Instagram", "Twitter (X?)", "LinkedIn"].map((elem, index) => (
              <a key={index} className="block mt-2 text-zinc-300 capitalized">
                {elem}
              </a>
            ))}
          </div>
          <div className="basis-1/2 flex items-center">
            <p className="text-right">
              Refoukus is pioneering digital agency driven by design and
              empowered by technology
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
