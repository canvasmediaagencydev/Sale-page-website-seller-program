import Button from "@/components/Button";
import BlurText from "@/components/BlurText";
import Image from "next/image";
import CountUp from "@/components/CountUp";
import CircularText from "@/components/CircularText";
import AutoPlayVideo from "@/components/AutoPlayVideo";
import TripCard from "@/components/TripsCard";
import { trips } from "@/data/trips";



export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen relative bg-cover bg-center bg-no-repeat rounded-b-3xl lg:rounded-b-4xl overflow-hidden" style={{ backgroundImage: 'url(/img/bg.jpg)' }}>
        <div className="container mx-auto text-white min-h-screen flex flex-col lg:flex-row px-4 lg:px-0">
          <div className="flex-1 pt-25 mt-20 md:mt-30 md:pt-24 lg:pt-30 relative z-10">
            <div className="flex flex-col gap-2 lg:gap-4 items-center md:items-start  lg:text-left">
              <BlurText
                text="Name"
                delay={150}
                animateBy="words"
                direction="top"
                className="text-5xl md:text-7xl flex lg:text-9xl font-bold"
                style={{ fontFamily: 'Playfair Display, serif' }}
              />
              <BlurText
                text="ทัวร์ต่างประเทศโดยไกด์ช่างภาพมืออาชีพ"
                delay={150}
                animateBy="words"
                direction="bottom"
                className="text-lg font-semibold md:text-2xl flex lg:text-4xl"
              />
            </div>

            <div
              className="bg-black/60 backdrop-blur-xs w-full max-w-2xl mx-auto lg:mx-0 items-center flex justify-center flex-col rounded-2xl lg:rounded-3xl py-8 md:py-12 lg:py-15 px-6 md:px-8 lg:px-10 mt-8 lg:mt-6 gap-6 lg:gap-8 animate-fade-in-up"
              style={{
                animationDelay: '1s',
                animationFillMode: 'both'
              }}
            >
              <p
                className="text-lg md:text-2xl lg:text-3xl leading-7 md:leading-9 lg:leading-10 text-center lg:text-start animate-fade-in"
                style={{
                  animationDelay: '1.3s',
                  animationFillMode: 'both'
                }}
              >
                มาร่วมทีมเป็นตัวแทนขายทัวร์กับ Gography <br className="hidden md:block" />
                เปลี่ยนประสบการณ์ของคุณให้เป็นรายได้เพิ่ม
              </p>
              <div
                className="animate-fade-in-scale w-full flex justify-center"
                style={{
                  animationDelay: '1.6s',
                  animationFillMode: 'both'
                }}
              >
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 md:px-30 py-3 md:py-4 rounded-full text-lg md:text-xl font-semibold w-full md:w-auto transition-all transform hover:scale-105">
                  สมัครสมาชิกได้เลย
                </Button>
              </div>
            </div>
          </div>
          <div className="flex-1 hidden lg:block relative z-10"></div>
        </div>
      </section>

      {/* Section 2 */}
      <section className="md:min-h-screen text-gray-900">
        <div className="container mx-auto py-5  md:py-15">
          <div className="hidden md:block">
            <div className="flex justify-center items-center gap-5">
              <p className="md:text-4xl text-lg">ทัวร์ต่างประเทศมากมาย สร้างรายได้ได้ตลอดทั้งปี</p>
              <Image src="/img/image 5.png" alt="Tour" width={200} height={300} className="hidden md:block" />
            </div>
            <div className="flex justify-center items-center gap-5 md:mt-4 mt-2">
              <Image src="/img/image 6.png" alt="Tour" width={200} height={300} className="hidden md:block" />
              <p className="md:text-4xl text-lg text-gray-700">ไม่มีขั้นต่ำกดดัน ไม่ต้องเข้าออฟฟิศ ไม่ต้องดูแลลูกค้าเอง</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row mt-8 md:mt-30 px-4 md:px-0">
            <p className="text-2xl md:text-5xl md:leading-14 md:hidden font-semibold mb-4 text-center md:text-left">
              ร่วมเป็นส่วนหนึ่งของทีมเรา <br />
              เพื่อรับค่าคอมมิชชั่นที่สูงกว่า!
            </p>
            <div className="w-full md:w-1/3 flex items-center justify-center mb-8 md:mb-0 relative">
              <Image src="/img/7411 1.svg" alt="Tour" width={300} height={225} className="w-full max-w-[250px] h-auto md:max-w-[400px] z-10 shadow-lg rounded-4xl" />
              <div className="bg-gray-800 hidden md:block w-100 h-130 absolute top-5 left-7 rounded-4xl"></div>
            </div>
            <div className="flex-1 md:mx-20 mx-0">
              <p className="text-2xl md:text-5xl md:leading-14 hidden md:block font-semibold mb-4 text-center md:text-left">
                ร่วมเป็นส่วนหนึ่งของทีมเรา <br />
                เพื่อรับค่าคอมมิชชั่นที่สูงกว่า!
              </p>
              <p className="text-md md:text-lg lg:text-xl text-center md:text-left leading-6 md:leading-normal">
                ด้วยประสบการณ์เดินทางทั่วโลกกว่า 8 ปี มีลูกค้าไว้วางใจมากมาย <br className="md:block hidden" />
                วันนี้เราพร้อมเปิดรับตัวแทนขาย มอบค่าคอมมิชชั่นที่สูง มีทีมงานคอยเคียงข้าง เพื่อให้คุณปิดการขายได้ง่ายขึ้น
              </p>
              <div className="mt-6 md:mt-10 flex flex-col gap-4 md:gap-6 bg-gray-100 md:bg-white p-5 rounded-3xl ">
                <div className="text-2xl md:text-6xl font-semibold">
                  <div className="flex items-center md:justify-between justify-around">
                    <div>
                      <CountUp
                        from={0}
                        to={3000}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text"
                      />+
                    </div>
                    <p className="text-lg md:text-4xl font-normal text-gray-700">
                      ค่าคอมมิชชั่นสูง
                    </p>
                  </div>
                </div>
                <div className="text-2xl md:text-6xl font-semibold">
                  <div className="flex items-center  md:justify-between justify-around">
                    <div className="">
                      <CountUp
                        from={0}
                        to={8}
                        separator=","
                        direction="up"
                        duration={1}
                        className="count-up-text "
                      /> +
                    </div>
                    <p className="text-lg md:text-4xl font-normal text-gray-700">
                      ประสบการณ์
                    </p>
                  </div>
                </div>
                <div className="text-2xl md:text-6xl font-semibold">
                  <div className="flex items-center  md:justify-between justify-around">
                    <div>
                      <CountUp
                        from={0}
                        to={2400}
                        separator=","
                        direction="up"
                        duration={2}
                        className="count-up-text"
                      />+
                    </div>
                    <p className="text-lg md:text-4xl font-normal text-gray-700">
                      ลูกค้าที่ไว้วางใจ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program section */}
      <section className="min-h-screen text-gray-900 container md:pt-10 mx-auto">
        <div>
          <div className="relative flex justify-center items-center mt-5 px-5">
            <Image src="/img/labtop.svg" alt="Seller Program" width={300} height={300} className="md:hidden z-20" />
            <CircularText
              text="SELLER*PROGRAM*BEST*"
              onHover="speedUp"
              spinDuration={20}
              className="absolute -top-15 right-40 z-10 md:hidden"
            />
          </div>

          <div className="bg-black flex flex-col text-white mx-5 p-8 rounded-3xl md:p-10 md:px-30 relative">
            <div className="md:w-4/7">
              <p className="md:text-6xl text-xl items-center font-semibold"
                style={{ fontFamily: 'Playfair Display, serif' }}>Seller Program</p>
              <p className="md:text-2xl mt-4">เพิ่มประสิทธิภาพการขาย ด้วยระบบหลังบ้านที่ทันสมัย
                ติดตามยอด และสถานะทุกขั้นตอน โปร่งใส ชัดเจน
                ตรวจสอบเรียลไทม์ได้ตลอด 24 ชั่วโมง
              </p>
              <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 md:px-30 py-3 md:py-4 rounded-full text-md md:text-xl font-semibold w-full md:w-auto transition-all transform hover:scale-105 mt-8">
                ร่วมทีมกับเราตอนนี้
              </Button>
            </div>
            <Image src="/img/labtop.svg" alt="Seller Program" width={400} height={300} className="w-2/5 absolute right-10 -top-25 hidden md:block" />
          </div>
        </div>
        <div className="flex justify-center items-center md:mt-10 p-4 md:p-8">
          <AutoPlayVideo
            src="https://player.mux.com/PJD5WuOZZgVlr1vMylE1101Fow5nicWNqxLUOt2nKPTw?"
            style={{ width: "95%", border: "none", aspectRatio: "16/9" }}
            className="rounded-xl md:rounded-2xl w-full md:w-4/6"
          />
        </div>
      </section>

      {/* partner */}
      <section className="flex flex-col md:flex-row container mx-auto my-10 md:mt-15 py-15 justify-center items-center border-t-2 border-b-2 border-gray-200">
        <div className="w-full p-5 order-2 md:order-1">
          <p className="text-2xl md:text-5xl font-semibold text-center md:text-end" style={{ fontFamily: 'Playfair Display, serif' }}>
            We Work With The <br />Best Partners
          </p>
          <p className="text-center md:text-end text-base md:text-lg mt-3 md:mt-5" style={{ fontFamily: 'Playfair Display, serif' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ut harum, quisquam vitae tenetur, autem maxime maiores doloremque eaque consectetur veritatis commodi.
          </p>
        </div>
        <div className="w-full order-1 md:order-2 mb-6 md:mb-0">
          <Image src="/img/gogo.png" alt="Partner Logo" width={200} height={100} className="mx-auto w-32 h-auto md:w-55 md:h-auto" />
        </div>
      </section>

      {/* trips */}
      <section className="container mx-auto mb-10  md:py-4 md:px-10">
        <div className="text-center mb-8 md:mb-12">
          <div className="p-8">
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-4 md:px-30 md:py-4 rounded-full text-md md:text-xl font-semibold w-full md:w-auto transition-all transform hover:scale-105 ">
              ร่วมทีมกับเราตอนนี้
            </Button>
          </div>
          <p className="text-2xl md:text-4xl font-semibold mb-4">
            ทริปขายดีประจำเดือน
          </p>
          <p className="text-gray-600 text-xl mb-6">
            เลือกทริปที่คุณชอบและเริ่มสร้างรายได้กันเลย
          </p>

        </div>

        {/* Trip Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 px-4 md:px-0">
          {trips.map((trip) => (
            <TripCard key={trip.id} trip={trip} />
          ))}
        </div>
      </section>

    </>
  );
}
