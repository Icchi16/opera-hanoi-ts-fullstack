"use client";

import SeatMapF1 from "@/resource/seatmaps/SeatMapF1";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const SeatMap = () => {
  return (
    <TransformWrapper initialScale={0.6} centerOnInit={true} minScale={0.6}>
      <div className="grid grid-cols-3 h-[700px] mx-[-32px] ">
        <div className="col-span-1 border flex items-center border-r-0">
          <div className="w-full">
            <SeatMapF1 mode="minimap" />
          </div>
        </div>
        <div className="col-span-2 border flex items-center overflow-hidden">
          <TransformComponent
            wrapperClass="!w-full !h-full overflow-hidden"
            contentClass="!w-full"
          >
            <div className="!w-full !h-full">
              <SeatMapF1 mode="interactive" />
            </div>
          </TransformComponent>
        </div>
      </div>
    </TransformWrapper>
  );
};

export default SeatMap;
