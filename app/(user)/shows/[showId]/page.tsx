import Button from "@/components/global/Button";
import FAQ from "@/components/global/Faq";
import shows from "@/samples/shows";
import dayjs from "dayjs";
import "dayjs/locale/vi";

import _ from "lodash";
import Image from "next/image";
import { FAQ as FAQType } from "@/types/extra";

interface ShowPageParams {
  showId: string;
}

const ShowPage = async ({ params }: { params: ShowPageParams }) => {
  dayjs.locale("vi");

  const showFAQs: FAQType[] = [
    {
      id: 0,
      header: "Tôi cần đến trước bao lâu trước khi bắt đầu? ",
      body: "Nên đến trước 30 phút chương trình bắt đầu",
    },
    {
      id: 1,
      header: "Tôi cần làm gì khi tôi không thể đến được sự kiện?",
      body: (
        <div>
          {`Phòng hoà nhạc luôn mở cửa trong suốt buổi trình diễn, nên quý vị có
          thể đến muộn. Với trường hợp không đến được, mong quý khách tham khảo
          thông tin về việc hoàn tiền `}
          <span className="underline italic hover:text-white transition-all duration-200 cursor-pointer">
            tại đây
          </span>
        </div>
      ),
    },
    {
      id: 2,
      header: "Sẽ có kiêm tra túi xách khi vào khán phòng? ",
      body: "Để đảm bảo không quay lén, nên các quý vị khán giả vui lòng xuất trình túi xách trước khi vào phòng hoà nhạc",
    },
    { id: 3, header: "Sẽ có đồ ăn và đồ uống phục vụ tại rạp hát?", body: "Vui lòng mua trước dồ uống tại quầy, không mang đồ ăn, đồ uống bên ngoài vào phòng hoà nhạc" },
    { id: 4, header: "Em bé của tôi có thồi ngồi lên đùi tôi không?", body: "Với trẻ em dưới 4 tuổi sẽ được miễn vé, và ngồi chung 1 ghế" },
    { id: 5, header: "Tôi có thể hút thuốc tại nhà hát không?", body: "Vui lòng hút thuốc lá bên ngoài phòng hoà nhạc tại khu hút thuốc đã được chỉ định sẵn" },
  ];

  const { showId } = await params;
  const show = _.find(shows, { link: showId });

  return (
    <div className="bg-bg1">
      <div className="container font-[family-name:var(--body)] pb-12">
        <div className="absolute h-[70vh] w-screen inset-0">
          <div className="z-0">
            <Image
              alt={show?.title || ""}
              fill
              src={show?.cover || ""}
              className="object-center object-cover"
            />
            <span className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(43,41,40,1)_14%,_rgba(96,90,83,0.46)_35%,_rgba(96,90,83,0.58)_58%,_rgba(45,41,39,1)_96%)] pointer-events-none z-10"></span>
          </div>
        </div>
        <div className="h-[70vh]"></div>
        <div className="px-8 pt-12 z-40">
          <div className="flex flex-col space-y-8 w-full">
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
            <div className="py-8">Main content here</div>
            <Button
              type="arrow"
              className="font-[family-name:var(--cta)] italic font-bold text-5xl transition-all duration-300 px-0 hover:text-white border-0"
            >
              Đặt Vé Ngay
            </Button>
          </div>
        </div>
        {/* FAQ Accordion */}
      </div>
      <div className="bg-cardBg">
        <div className="container">
          <div className="px-8 py-12">
            <FAQ faqArr={showFAQs} title="Các câu hỏi thường gặp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPage;
