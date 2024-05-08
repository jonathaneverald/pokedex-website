import React from "react";

export const HeaderComponent = () => {
  return (
    <>
      <header>
        <div className="bg-pokemon-blue border-gray-200 px-4 lg:px-6 py-2.5 flex flex-wrap justify-between items-center">
          <h1 className="self-center text-3xl font-bold whitespace-nowrap ">
            Pokemon App
          </h1>
        </div>
        <div className="relative h-[250px] overflow-hidden bg-[url('https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/water-pokemon-chromebook-wallpaper.jpg')] bg-cover bg-[50%] bg-no-repeat">
          <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-black/60 bg-fixed">
            <div className="flex h-full items-center justify-center">
              <div className="px-6 text-center text-white md:px-12">
                <h1 className="mb-6 text-5xl font-bold">Pokedex</h1>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
