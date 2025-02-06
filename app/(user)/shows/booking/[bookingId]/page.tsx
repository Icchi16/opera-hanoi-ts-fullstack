import shows from "@/samples/shows";
import _ from "lodash";
import Image from "next/image";
import SeatMap from "./components/SeatMap";

interface ShowBookingParams {
  bookingId: string;
}

const ShowBooking = async ({
  params,
}: {
  params: Promise<ShowBookingParams>;
}) => {
  const { bookingId } = await params;
  const show = _.find(shows, { link: bookingId });

  console.log(bookingId);
  return (
    <div className="bg-bg1">
      <div className="container font-[family-name:var(--body)] pb-12">
        <div className="absolute h-[70vh] w-screen inset-0">
          <div className="z-0">
            <Image
              alt={show?.title || ""}
              fill
              src={show?.cover || "/show1.jpg"}
              className="object-center object-cover"
            />
            <span className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(43,41,40,1)_20%,_rgba(96,90,83,0.46)_35%,_rgba(96,90,83,0.58)_58%,_rgba(45,41,39,1)_96%)] pointer-events-none z-10"></span>
          </div>
        </div>
        <div className="h-[70vh]"></div>
        <div className="px-8 pt-12 z-40">
          <div className="flex flex-col space-y-8 w-full">
            <div className="text-8xl text-white font-[family-name:var(--title)] uppercase flex items-center">
              {show?.title}
            </div>
            <div className="font-[family-name:var(--title)] italic text-white text-3xl leading-none">
              Đặt vé: thời gian & chỗ ngồi
            </div>
            <span className="h-2 max-w-[400px] bg-primary"></span>
          </div>

          {/* Timeline select */}
          <div className="mt-8 mb-12">
            <div className="font-[family-name:var(--title)] text-3xl font-semibold">
              Tôi sẽ đi vào lúc ...
            </div>
          </div>

          {/* Seat select */}
          <div className="mt-8 mb-12">
            <div className="font-[family-name:var(--title)] text-3xl font-semibold">
              Tôi muốn chọn ghế ...
            </div>
            <SeatMap />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowBooking;
