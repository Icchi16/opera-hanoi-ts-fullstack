"use client";

import { FAQ as FAQType } from "@/types/extra";
import clsx from "clsx";
import _ from "lodash";
import { useState } from "react";

interface FAQProps {
  faqArr: FAQType[];
  title?: string;
}

const FAQ: React.FC<FAQProps> = ({ faqArr, title }) => {
  const oddFAQs = _.filter(faqArr, (faq) => faq.id % 2 !== 0);
  const evenFAQs = _.filter(faqArr, (faq) => faq.id % 2 === 0);

  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleAccordion = (index: number) => {
    if (_.includes(openIndexes, index)) {
      setOpenIndexes(_.without(openIndexes, index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <>
      <div className="text-3xl font-[family-name:var(--title)] font-bold tracking-wide pb-8 border-b-[1px] border-primary border-opacity-35 w-full">
        {title || ""}
      </div>
      <div className="grid grid-cols-2 grid-flow-row-dense gap-x-12 font-[family-name:var(--body)]">
        {/* left Accordion */}
        <div>
          {evenFAQs.map((faq) => {
            const isOpen = openIndexes.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="flex flex-col py-6 px-3 border-primary border-b-[1px] border-opacity-35"
              >
                <div id="left-accordion w-ful">
                  <button
                    type="button"
                    className={clsx(
                      "flex items-center cursor-pointer transition-colors duration-200 space-x-3 ",
                      isOpen ? "" : ""
                    )}
                    onClick={() => toggleAccordion(faq.id)}
                  >
                    <span>
                      <svg
                        className="fill-primary shrink-0"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="7"
                          width="16"
                          height="3"
                          rx="1"
                          className={`transform origin-center transition duration-200 ease-out ${
                            isOpen && "!rotate-180"
                          }`}
                        />
                        <rect
                          y="7"
                          width="16"
                          height="3"
                          rx="1"
                          className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                            isOpen && "!rotate-180"
                          }`}
                        />
                      </svg>
                    </span>
                    <div className="text-xl font-light">{faq.header}</div>
                  </button>
                </div>
                <div
                  className={clsx(
                    "grid overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-5"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  )}
                >
                  <div className="overflow-hidden text-base tracking-wide leading-relaxed">
                    {faq.body}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Accordion */}
        <div>
          {oddFAQs.map((faq) => {
            const isOpen = openIndexes.includes(faq.id);
            return (
              <div
                key={faq.id}
                className="flex flex-col py-6 px-3 border-primary border-b-[1px] border-opacity-35"
              >
                <div id="left-accordion w-ful">
                  <button
                    type="button"
                    className={clsx(
                      "flex items-center cursor-pointer transition-colors duration-200 space-x-3 ",
                      isOpen ? "" : ""
                    )}
                    onClick={() => toggleAccordion(faq.id)}
                  >
                    <span>
                      <svg
                        className="fill-primary shrink-0"
                        width="16"
                        height="16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          y="7"
                          width="16"
                          height="3"
                          rx="1"
                          className={`transform origin-center transition duration-200 ease-out ${
                            isOpen && "!rotate-180"
                          }`}
                        />
                        <rect
                          y="7"
                          width="16"
                          height="3"
                          rx="1"
                          className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                            isOpen && "!rotate-180"
                          }`}
                        />
                      </svg>
                    </span>
                    <div className="text-xl font-light">{faq.header}</div>
                  </button>
                </div>
                <div
                  className={clsx(
                    "grid overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen
                      ? "grid-rows-[1fr] opacity-100 mt-5"
                      : "grid-rows-[0fr] opacity-0 mt-0"
                  )}
                >
                  <div className="overflow-hidden text-base tracking-wide leading-relaxed">
                    {faq.body}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FAQ;
