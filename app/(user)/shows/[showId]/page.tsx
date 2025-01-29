import Button from "@/components/global/Button";
import shows from "@/samples/shows";
import dayjs from "dayjs";
import "dayjs/locale/vi";

import _ from "lodash";
import Image from "next/image";

interface ShowPageParams {
  showId: string;
}

const ShowPage = async ({ params }: { params: ShowPageParams }) => {
  dayjs.locale("vi");

  const { showId } = await params;
  const show = _.find(shows, { link: showId });

  return (
    <div className="bg-bg1">
      <div className="container font-[family-name:var(--body)] pb-12">
        <div className="h-screen w-screen">
          <div className="z-0">
            <Image
              alt={show?.title || ""}
              layout="fill"
              src={show?.cover || ""}
              className="object-center object-cover"
            />
            <span className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(43,41,40,1)_14%,_rgba(96,90,83,0.46)_35%,_rgba(96,90,83,0.58)_58%,_rgba(45,41,39,1)_96%)] pointer-events-none z-10"></span>
          </div>
        </div>
        <div className="px-8 relative z-40">
          <div className="absolute -top-32 flex flex-col space-y-8 w-full">
            <div className="text-8xl text-white font-[family-name:var(--title)] uppercase flex items-center">
              {show?.title}
            </div>
            <span className="h-2 max-w-[400px] bg-primary"></span>
            {/* Info below title */}
            <div className="max-w-[700px] flex space-x-36">
              <div className="flex flex-col">
                <div>{`${dayjs(show?.date.startDate).format(
                  "DD MMMM"
                )} - ${dayjs(show?.date.endDate).format("DD MMMM")}`}</div>
                <div>{`Thời lượng: ${
                  typeof show?.time === "number"
                    ? show.time > 60
                      ? `${Math.floor(show.time / 60)} tiếng ${
                          show.time % 60 === 0 ? "" : `${show.time % 60} phút`
                        }`
                      : `${show.time} phút`
                    : "Không xác định"
                }`}</div>
              </div>
              <div className="flex flex-col">
                {show?.staff.map((staff) => (
                  <div
                    key={staff.id}
                    className="flex"
                  >{`${staff.pos} : ${staff.name}`}</div>
                ))}
              </div>
            </div>
            <span className="min-h-[0.5px] w-full bg-white !bg-opacity-35"></span>
          </div>
          <div>
            <div className="pt-40">Main content here</div>
            <Button
              type="arrow"
              className="font-[family-name:var(--cta)] uppercase text-5xl transition-all duration-300 px-0 hover:text-white"
            >
              Đặt vé ngay
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
