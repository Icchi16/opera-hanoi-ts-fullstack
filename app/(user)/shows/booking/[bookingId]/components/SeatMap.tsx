"use client";

import SeatMapF1 from "@/resource/seatmaps/SeatMapF1";
import SeatMapF2 from "@/resource/seatmaps/SeatMapF2";
import SeatMapF3 from "@/resource/seatmaps/SeatMapF3";
import { getBookedSeats } from "@/store/slices/bookedSeatsSlice";
import { RootState } from "@/store/store";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const SeatMap = () => {
  const [activeFloor, setActiveFloor] = useState(1);
  const bookedSeats = useSelector((state: RootState) => state.bookedSeats);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBookedSeats());
  }, [dispatch]);

  return (
    <TransformWrapper initialScale={0.6} centerOnInit={true} minScale={0.6}>
      {({ zoomToElement }) => {
        const zoomToZone = (zoneId: string) => {
          const element = document.getElementById(`${zoneId}-i`);
          if (element) {
            zoomToElement(element);
          }
        };

        const floorArr = [
          {
            id: 0,
            floor: 1,
            comp: SeatMapF1,
          },
          { id: 1, floor: 2, comp: SeatMapF2 },
          { id: 2, floor: 3, comp: SeatMapF3 },
        ];

        const Floor = floorArr[activeFloor - 1].comp;
        return (
          <React.Fragment>
            <div className="grid grid-cols-3 h-[700px] mx-[-32px] ">
              <div className="col-span-1 border flex items-center border-r-0 relative">
                {/* Floor Selector */}
                <div className="flex w-full justify-center gap-x-5 absolute top-3 px-8">
                  {floorArr.map((floor) => {
                    const active = floor.floor === activeFloor; // ✅ Define inside map

                    return (
                      <div
                        key={floor.id}
                        onClick={() => setActiveFloor(floor.floor)}
                        className={clsx(
                          "cursor-pointer text-xl w-[80px] flex justify-center transition-all duration-300 relative",
                          active && "font-extrabold"
                        )} // Add active styling
                      >
                        {`Tầng ${floor.floor}`}

                        <span
                          className={clsx(
                            "h-[3px] bg-white bg-opacity-75 absolute align-middle transition-all duration-300 bottom-[-8px] left-[50%] translate-x-[-50%]",
                            active ? "opacity-100 w-full" : "opacity-100 w-0"
                          )}
                        />
                      </div>
                    );
                  })}
                </div>

                {/* Minimap */}
                <div className="w-full px-4 justify-center">
                  <Floor
                    mode="minimap"
                    zoomToZone={zoomToZone}
                    bookedSeats={bookedSeats}
                  />
                </div>
              </div>

              {/* Interactive map */}
              <div className="col-span-2 border flex items-center overflow-hidden">
                <TransformComponent
                  wrapperClass="!w-full !h-full overflow-hidden"
                  contentClass="!w-full"
                >
                  <div className="w-full cursor-grab">
                    <Floor mode="interactive" bookedSeats={bookedSeats} />
                  </div>
                </TransformComponent>
              </div>
            </div>
            <div />
          </React.Fragment>
        );
      }}
    </TransformWrapper>
  );
};

export default SeatMap;
