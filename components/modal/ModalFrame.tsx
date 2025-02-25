"use client";

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import Button from "../global/Button";
import { Icon } from "@iconify-icon/react/dist/iconify.mjs";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

// import UserPanelModal from "./UserPanelModal";

interface ModalFrameProps {
  isOpen: boolean;
  onClose: () => void;
}

const ModalFrame: React.FC<ModalFrameProps> = ({ isOpen, onClose }) => {
  const modalFrame = useRef<HTMLDivElement>(null);

  const [selectedModal, setSelectedModal] = useState("signUp");
  const [isExiting, setIsExiting] = useState(false);
  const [isEntering, setIsEntering] = useState(false);

  useEffect(() => {
    if (isOpen) {
      modalFrame.current?.classList.remove("hidden");
      modalFrame.current?.classList.add("slide-in");
    } else {
      modalFrame.current?.classList.remove("slide-in");
      modalFrame.current?.classList.add("slide-out");
      setTimeout(() => {
        modalFrame.current?.classList.add("hidden");
      }, 300); // Align with the animation duration
    }
  }, [isOpen]);

  const handleSwitchModal = (modal: string) => {
    setIsExiting(true);
    setTimeout(() => {
      setSelectedModal(modal);
      setIsExiting(false);
    }, 150); // Animation duration
    setTimeout(() => {
      setIsEntering(true);
    }, 150);
    setIsEntering(false);
  };

  return (
    <>
      <div
        id="modal-frame"
        ref={modalFrame}
        className={clsx(
          "fixed w-[414px] inset-y-0 right-0 bg-primary z-50 transform transition-transform text-secondary overflow-hidden",
          isOpen ? "slide-in" : "slide-out"
        )}
        tabIndex={-1}
      >
        {/* close button */}
        <div className="absolute flex right-12 top-8">
          <Button type="icon" onClick={onClose} className="relative -top-2">
            <Icon
              icon="material-symbols:close-rounded"
              height={32}
              className="text-secondary"
            />
          </Button>
        </div>

        <div className="flex flex-col py-8 px-4 h-full text-secondary space-y-[30px]">
          {/*back and close*/}
          <div
            className={clsx(
              "min-h-8 px-2",
              selectedModal !== "signUp" && "opacity-0 pointer-events-none"
            )}
          >
            <Button
              onClick={() => {
                handleSwitchModal("signIn");
              }}
            >
              <div className="flex float-start items-center">
                <Icon
                  icon="lucide:move-left"
                  height={24}
                  className="text-secondary h-fit w-fit"
                />
                <span className="leading-none relative bottom-[2px] pl-2">
                  quay lại
                </span>
              </div>
            </Button>
          </div>
          {/* main content */}
          <div
            className={clsx(
              "translate-x-0 transition-all duration-150 overflow-y-auto px-2",
              isExiting && "modal-exit",
              isEntering && "modal-enter"
            )}
          >
            <SignInModal
              currentDisplay={selectedModal === "signIn"}
              onSwitchModal={handleSwitchModal}
            />
            <SignUpModal
              currentDisplay={selectedModal === "signUp"}
              onSwitchModal={handleSwitchModal}
            />
            {/* <UserPanelModal
                currentDisplay={selectedModal === "userPanel"}
                onSwitchModal={handleSwitchModal}
              /> */}
          </div>
        </div>
      </div>

      {/* Modal backdrop */}
      <div
        id="backdrop"
        className={clsx(
          "fixed inset-0 z-30 bg-bg1 opacity-50",
          isOpen ? "block" : "hidden"
        )}
        onClick={onClose}
      ></div>
    </>
  );
};

export default ModalFrame;
