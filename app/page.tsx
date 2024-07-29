import Image from "next/image";

export default function Home() {
  return (
    <div className="p-6 flex gap-4 min-h-screen">
      <div className="w-[76%] bg-red-30">
        <div className="w-full h-full relative">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover rounded-2xl"
          >
            <source src="/qitchen.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="absolute bottom-0 h-52 w-full bg-gradient-to-t from-primary-dark/80 to-transparent"></div>

          <div className="absolute top-0 left-0 w-full h-full bg-black/15 z-0">
            <div className="w-full h-full flex flex-col justify-between z-10">
              <div className="pl-12 pt-12">
                <div className="bg-primary-dark inline-block rounded-xl p-2">
                  <div className="flex items-center">
                    <button className="group border-[0.5px] border-primary-white/25 bg-secondary-dark w-10 h-10 rounded-lg hover:bg-primary-white/10  transition-all duration-300 flex flex-col justify-center items-center">
                      <span className="w-5 h-px bg-white mb-1 transition-transform duration-300 group-hover:translate-y-[5px]"></span>
                      <span className="w-5 h-px bg-white"></span>
                      <span className="w-5 h-px bg-white mt-1 transition-transform duration-300 group-hover:-translate-y-[5px]"></span>
                    </button>
                    <Image
                      src="/svg/logo.svg"
                      alt="Logo"
                      width={105}
                      height={105}
                      className="ml-3 mr-5"
                    />
                    <div className="mr-5 text-xs font-light">MENU</div>
                    <div className="mr-5 text-xs font-light">ABOUT</div>
                    <button className="border-[0.5px] px-5 text-xs font-light border-primary-white/25 bg-secondary-dark h-9 rounded-lg flex items-center justify-center hover:bg-primary-white/10  transition-all duration-300">
                      BOOK A TABLE
                    </button>
                  </div>
                </div>
              </div>
              <div className="font-serif text-[100px] pl-12 pb-12">
                <div className="leading-none">SUSHI</div>
                <div className="leading-none">SENSATION</div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 bg-primary-dark">
              <div className="rounded-full">123</div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="flex-1 bg-blue-300 rounded-2xl"></div> */}
    </div>
  );
}
