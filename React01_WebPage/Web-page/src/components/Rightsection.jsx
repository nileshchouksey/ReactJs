import React from "react";
import { MoveRight, ArrowUpRight } from "lucide-react";

const Rightsection = (props) => {
    
    
  return (
    <section className="w-full min-h-screen px-6 md:px-12 lg:px-16 py-16">

   
      {/* Main Content */}
      <div className=" ">

        

        {/* RIGHT SECTION */}
        <div className="w-full lg:w-[100%] ">

          {/* Digital Banking Tag */}
          <div className="flex  mb-20 ">
            <button className="bg-gray-200  rounded-full px-6 p-4 flex   text-black">
              DIGITAL BANKING PLATFORM
            </button>
          </div>


          {/* CARDS */}
          <div className="flex gap-6 overflow-x-auto pb-4">

            {/* CARD 1 */}
            <div className="relative min-w-[350px] h-[550px] overflow-hidden rounded-2xl">

              <img
                className="w-full h-full object-cover brightness-110"
                src={props.img}
                alt=""
              />

              {/* Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Number */}
              <div className="absolute top-6 left-6 w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center font-bold">
                01
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-6 left-6 right-6">

                <p className="text-white text-xl font-semibold mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Hic quod cum quisquam est dolore debitis.
                </p>

                <div className="flex items-center justify-between">

                  <button className="bg-blue-600 text-white rounded-full px-6 py-3">
                    Satisfied{props.tag}
                  </button>

                  <div className="bg-blue-600 rounded-full p-3">
                    <MoveRight className="w-6 h-6 text-white" />
                  </div>

                </div>

              </div>
            </div>


            {/* CARD 2 */}
            <div className="relative min-w-[350px] h-[550px] overflow-hidden rounded-2xl">

              <img
                className="w-full h-full object-cover brightness-110"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=60&w=3000&auto=format&fit=crop"
                alt=""
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute top-6 left-6 w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center font-bold">
                02
              </div>

              <div className="absolute bottom-6 left-6 right-6">

                <p className="text-white text-xl font-semibold mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Hic quod cum quisquam est dolore debitis.
                </p>

                <div className="flex items-center justify-between">

                  <button className="bg-blue-600 text-white rounded-full px-6 py-3">
                    Satisfied
                  </button>

                  <div className="bg-blue-600 rounded-full p-3">
                    <MoveRight className="w-6 h-6 text-white" />
                  </div>

                </div>

              </div>
            </div>



            <div className="relative min-w-[350px] h-[550px] overflow-hidden rounded-2xl">

              <img
                className="w-full h-full object-cover brightness-110"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=60&w=3000&auto=format&fit=crop"
                alt=""
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute top-6 left-6 w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center font-bold">
                02
              </div>

              <div className="absolute bottom-6 left-6 right-6">

                <p className="text-white text-xl font-semibold mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Hic quod cum quisquam est dolore debitis.
                </p>

                <div className="flex items-center justify-between">

                  <button className="bg-blue-600 text-white rounded-full px-6 py-3">
                    Satisfied
                  </button>

                  <div className="bg-blue-600 rounded-full p-3">
                    <MoveRight className="w-6 h-6 text-white" />
                  </div>

                </div>

              </div>
            </div>




            <div className="relative min-w-[350px] h-[550px] overflow-hidden rounded-2xl">

              <img
                className="w-full h-full object-cover brightness-110"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=60&w=3000&auto=format&fit=crop"
                alt=""
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute top-6 left-6 w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center font-bold">
                02
              </div>

              <div className="absolute bottom-6 left-6 right-6">

                <p className="text-white text-xl font-semibold mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Hic quod cum quisquam est dolore debitis.
                </p>

                <div className="flex items-center justify-between">

                  <button className="bg-blue-600 text-white rounded-full px-6 py-3">
                    Satisfied
                  </button>

                  <div className="bg-blue-600 rounded-full p-3">
                    <MoveRight className="w-6 h-6 text-white" />
                  </div>

                </div>

              </div>
            </div>

            <div className="relative min-w-[350px] h-[550px] overflow-hidden rounded-2xl">

              <img
                className="w-full h-full object-cover brightness-110"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=60&w=3000&auto=format&fit=crop"
                alt=""
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute top-6 left-6 w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center font-bold">
                02
              </div>

              <div className="absolute bottom-6 left-6 right-6">

                <p className="text-white text-xl font-semibold mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Hic quod cum quisquam est dolore debitis.
                </p>

                <div className="flex items-center justify-between">

                  <button className="bg-blue-600 text-white rounded-full px-6 py-3">
                    Satisfied
                  </button>

                  <div className="bg-blue-600 rounded-full p-3">
                    <MoveRight className="w-6 h-6 text-white" />
                  </div>

                </div>

              </div>
            </div>






            {/* CARD 3 */}
            <div className="relative min-w-[350px] h-[550px] overflow-hidden rounded-2xl">

              <img
                className="w-full h-full object-cover brightness-110"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?fm=jpg&q=60&w=3000&auto=format&fit=crop"
                alt=""
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute top-6 left-6 w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center font-bold">
                03
              </div>

              <div className="absolute bottom-6 left-6 right-6">

                <p className="text-white text-xl font-semibold mb-8">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Hic quod cum quisquam est dolore debitis.
                </p>

                <div className="flex items-center justify-between">

                  <button className="bg-blue-600 text-white rounded-full px-6 py-3">
                    Satisfied
                  </button>

                  <div className="bg-blue-600 rounded-full p-3">
                    <MoveRight className="w-6 h-6 text-white" />
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Rightsection;