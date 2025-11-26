import Image from "next/image";
import { FaLongArrowAltRight, FaRunning, FaWater } from "react-icons/fa";
import { PiBatteryChargingVerticalBold, PiHeartbeatThin } from "react-icons/pi";
import { LiaRunningSolid } from "react-icons/lia";
import { GiNightSleep, GiPayMoney, GiRunningShoe } from "react-icons/gi";
import { PiBatteryChargingBold } from "react-icons/pi";
import { LiaSwimmerSolid } from "react-icons/lia";
import { IoMan } from "react-icons/io5";
import { TbGps } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";

import Products from "@/Components/Products";
export default function Home() {
  return (
      <div className="">
          <main>
              {/* Hero Section */}
              <section className="bg-cover bg-center " style={{ backgroundImage: "url('/Hero.jpg')" }}>
                  <div className="max-w-7xl mx-auto p-4">
                      <div className="flex flex-col md:flex-row justify-center items-center mt-10 md:mt-20 gap-10">
                          {/* Image Section */}
                          <div className="w-full md:w-6/12 flex justify-center">
                              <Image src="/hero2.png" alt="NextBazar Logo" width={400} height={200} className="transition-transform duration-1000 float-x hover:scale-110" />
                          </div>

                          {/* Text Section */}
                          <div className="w-full md:w-6/12 text-white text-center md:text-left">
                              <div className="space-y-4">
                                  <p className="text-sm">HYBRID SMARTWATCHES</p>
                                  <h3 className="text-3xl md:text-5xl font-bold">
                                      Wearable health youll <br /> want to wear
                                  </h3>
                                  <p className="text-sm md:text-base font-semibold text-gray-300">
                                      Explore a range of hybrid smartwatches crafted to track, monitor and improve <br className="hidden md:block" />
                                      overall health and wellness. Powered by state-of-the-art technology, Sapa trackers <br className="hidden md:block" />
                                      are renowned for their award-winning design and unsurpassed battery life.
                                  </p>
                              </div>

                              <div className="mt-5 space-y-2">
                                  <h2 className="text-2xl md:text-3xl">#1</h2>
                                  <h3 className="text-orange-400 text-sm md:text-base font-bold">WORLDWIDE</h3>
                                  <p className="font-semibold text-gray-400 text-sm md:text-base">Sapa Invented The First Hybrid Smart Watch</p>

                                  <button className="mt-3 bg-orange-400 px-4 py-2 flex justify-center items-center gap-1 hover:bg-orange-500 transition">
                                      Buy Now
                                      <FaLongArrowAltRight />
                                  </button>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              {/* Feature section */}

              <section className="py-16 bg-base-100">
                  <div className="max-w-7xl mx-auto px-4 text-center">
                      {/* Heading */}
                      <h2 className="text-sm text-orange-400 mb-4 ">CLINICALLY TESTED</h2>
                      <p className="md:text-5xl text-xl mb-10 font-bold">
                          Track activity, sleep <br /> heart health
                      </p>

                      {/* Grid of Feature Cards */}
                      <div className="grid md:grid-cols-3 gap-8">
                          {/* Card 1 */}
                          <div className="card bg-base-200 shadow hover:shadow-lg transition">
                              <div className="card-body flex flex-col justify-center items-center space-y-2">
                                  <PiHeartbeatThin className="w-15 h-15 p-3 bg-[#f25c8e] rounded-full text-white hover:text-black transition-colors duration-300" />
                                  <h3 className="text-sm font-bold text-gray-600">
                                      HEART RATE <br />
                                      MONITORING
                                  </h3>
                                  <p className="text-sm text-gray-400">Heart rate monitors are devices that can detect and track your heart or pulse rate continuously. Most of these devices are wearable, and many are highly accurate.</p>
                              </div>
                          </div>
                          {/* Card 2 */}
                          <div className="card bg-base-200 shadow hover:shadow-lg transition">
                              <div className="card-body flex flex-col justify-center items-center space-y-2">
                                  <LiaRunningSolid className="w-15 h-15 p-3 bg-[#ed4134] rounded-full text-white hover:text-black transition-colors duration-300" />
                                  <h3 className="text-sm font-bold text-gray-600">
                                      Activity <br /> Tracking
                                  </h3>
                                  <p className="text-sm text-gray-400">No matter what your needs are, there’s never been a better time to find a powerful, sophisticated tool that can help you optimize your workouts or jump-start</p>
                              </div>
                          </div>
                          {/* Card 3 */}
                          <div className="card bg-base-200 shadow hover:shadow-lg transition">
                              <div className="card-body flex flex-col justify-center items-center space-y-2">
                                  <GiNightSleep className="w-15 h-15 p-3 bg-[#0a276b] rounded-full text-white  " />
                                  <h3 className="text-sm font-bold text-gray-600">
                                      Sleep <br /> Monitoring
                                  </h3>
                                  <p className="text-sm text-gray-400">Some days, you wake up refreshed. Others, it feels like you barely slept at all. What separates the good nights from the bad isn’t always clear, but a sleep tracker</p>
                              </div>
                          </div>
                          {/* Card 4 */}
                          <div className="card bg-base-200 shadow hover:shadow-lg transition">
                              <div className="card-body flex flex-col justify-center items-center space-y-2">
                                  <PiBatteryChargingBold className="w-15 h-15 p-3 bg-[#58a83d] rounded-full text-white  hover:text-black transition-colors duration-300" />
                                  <h3 className="text-sm font-bold text-gray-600">
                                      25 Day Battery
                                      <br />
                                      Life
                                  </h3>
                                  <p className="text-sm text-gray-400">As such, feature-packed smartwatches from Apple and Samsung must be placed on their charging docks daily, while hybrid watches like those from Withings can last 25 days</p>
                              </div>
                          </div>
                          {/* card 5 */}
                          <div className="card bg-base-200 shadow hover:shadow-lg transition">
                              <div className="card-body flex flex-col justify-center items-center space-y-2">
                                  <LiaSwimmerSolid className="w-15 h-15 p-3 bg-[#42ffff] rounded-full text-white  hover:text-black transition-colors duration-300" />
                                  <h3 className="text-sm font-bold text-gray-600">
                                      Waterproof
                                      <br />
                                      To 5 Atm
                                  </h3>
                                  <p className="text-sm text-gray-400">ATM or atmospheres is the amount of pressure a watch can withstand. 5ATM will withstand pressures equivalent to about 50 meters, or 164 ft under water.</p>
                              </div>
                          </div>
                          {/* card6 */}
                          <div className="card bg-base-200 shadow hover:shadow-lg transition">
                              <div className="card-body flex flex-col justify-center items-center space-y-2">
                                  <TbGps className="w-15 h-15 p-3 bg-[#ed4134] rounded-full text-white  hover:text-black transition-colors duration-300" />
                                  <h3 className="text-sm font-bold text-gray-600">
                                      Gps <br />
                                      And Tracking
                                  </h3>
                                  <p className="text-sm text-gray-400">GPS and Track is the market leader for tracking GPS systems and services. We specialize in tracking technology for vehicles, fleet GPS tracking systems</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
              {/* Fuctionality */}
              <section className="py-16">
                  <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-10">
                      {/* Left Content */}
                      <div className="w-full md:w-6/12">
                          <div className="space-y-3 text-center md:text-left">
                              <h1 className="text-2xl md:text-5xl font-bold">High-tech Functionality</h1>
                              <p className="text-sm md:text-base font-normal text-gray-400">
                                  If you’re looking to buy the best activity tracker or hybrid smartwatch, you want to make sure you <br className="hidden md:block" />
                                  find one that works with your life. All our fitness trackers and hybrid smartwatches help you meet <br className="hidden md:block" />
                                  your goals by tracking steps, runs, swim and sleep automatically, and feature classic styles <br className="hidden md:block" />
                                  that work for your workouts and for your everyday life.
                              </p>
                          </div>

                          {/* Features Grid */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-7 text-center md:text-left">
                              <div className="space-y-1">
                                  <PiBatteryChargingBold className="text-4xl text-orange-400 mx-auto md:mx-0" />
                                  <h2 className="text-lg md:text-xl font-bold">BATTERY FOR DAYS</h2>
                                  <p className="text-sm text-gray-400 font-bold">Up to 10, to be exact</p>
                              </div>
                              <div className="space-y-1">
                                  <FaWater className="text-4xl text-orange-400 mx-auto md:mx-0" />
                                  <h2 className="text-lg md:text-xl font-bold">Water Rating</h2>
                                  <p className="text-sm text-gray-400 font-bold">Shower or spa day</p>
                              </div>
                              <div className="space-y-1">
                                  <FaRunning className="text-4xl text-orange-400 mx-auto md:mx-0" />
                                  <h2 className="text-lg md:text-xl font-bold">Hydration Tracking</h2>
                                  <p className="text-sm text-gray-400 font-bold">You sweat during activities</p>
                              </div>
                              <div className="space-y-1">
                                  <IoMan className="text-4xl text-orange-400 mx-auto md:mx-0" />
                                  <h2 className="text-lg md:text-xl font-bold">Garmin Coach</h2>
                                  <p className="text-sm text-gray-400 font-bold">Coach on your wrist</p>
                              </div>
                              <div className="space-y-1">
                                  <IoMdNotificationsOutline className="text-4xl text-orange-400 mx-auto md:mx-0" />
                                  <h2 className="text-lg md:text-xl font-bold">SMART NOTIFICATION</h2>
                                  <p className="text-sm text-gray-400 font-bold">With Apple® or Android™</p>
                              </div>
                              <div className="space-y-1">
                                  <GiPayMoney className="text-4xl text-orange-400 mx-auto md:mx-0" />
                                  <h2 className="text-lg md:text-xl font-bold">Garmin Pay ™</h2>
                                  <p className="text-sm text-gray-400 font-bold">Breeze through checkout</p>
                              </div>
                          </div>
                      </div>

                      {/* Right Image */}
                      <div className="w-full md:w-5/12 flex justify-center md:justify-end">
                          <Image src="/functionality.png" alt="NextBazar Logo" width={600} height={300} className="w-full h-auto max-w-md md:max-w-full transition duration-500 ease-in-out hover:scale-105" />
                      </div>
                  </div>
              </section>

              {/* Activity Traking */}
              <section className="py-16 bg-[#f0f0f0]">
                  <div className="max-w-7xl mx-auto px-4">
                      {/* Heading */}
                      <div className="text-center">
                          <p className="text-sm font-semibold text-orange-400">Activity Tracking</p>
                          <h1 className="text-2xl md:text-5xl font-bold">
                              Meet your fitness goals. <br className="hidden md:block" /> Then surpass them.
                          </h1>
                      </div>

                      {/* Feature Icons */}
                      <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 text-center">
                          <div className="flex flex-col items-center gap-2">
                              <FaWater className="text-4xl text-orange-400" />
                              <h2 className="text-base md:text-lg font-bold text-gray-500">Water-resistant 5 Atm</h2>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                              <GiRunningShoe className="text-4xl text-orange-400" />
                              <h2 className="text-base md:text-lg font-bold text-gray-500">Step Tracker</h2>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                              <FaRunning className="text-4xl text-orange-400" />
                              <h2 className="text-base md:text-lg font-bold text-gray-500">Workout Mode</h2>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                              <TbGps className="text-4xl text-orange-400" />
                              <h2 className="text-base md:text-lg font-bold text-gray-500">Connected GPS</h2>
                          </div>
                      </div>

                      {/* Image + Description */}
                      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 mt-10">
                          {/* Left Image */}
                          <div className="bg-white p-6 rounded-xl w-full lg:w-1/2">
                              <Image src="/banner-02.jpg" alt="NextBazar Logo" width={2000} height={1000} className="w-full h-auto rounded-md" />
                          </div>

                          {/* Right Text + Image */}
                          <div className="bg-white p-6 rounded-xl text-center lg:text-left">
                              <p className="text-sm md:text-base mb-4">
                                  <strong>Workout Mode</strong> harnesses the GPS in your <br className="hidden md:block" />
                                  phone to complement motion and heart rate <br className="hidden md:block" />
                                  data with route tracking.
                              </p>
                              <Image src="/banner-03.png" alt="NextBazar Logo" width={2000} height={1000} className="w-70 h-100 rounded-md" />
                          </div>
                      </div>
                  </div>
              </section>
              {/* Product */}
              <section className="py-">
                  <div className="max-w-7xl mx-auto px-4">
                    <Products />
                  </div>
                  
              </section>
          </main>
      </div>
  );
}
