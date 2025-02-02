import { FAQ as FAQType } from "@/types/extra";
import _ from "lodash";

interface FAQProps {
  faqArr: FAQType[];
  title?: string;
}

const FAQ: React.FC<FAQProps> = ({ faqArr, title }) => {
  const oddFAQs = _.filter(faqArr, (faq) => faq.index % 2 !== 0);
  const evenFAQs = _.filter(faqArr, (faq) => faq.index % 2 === 0);

  return (
    <div className="">
      <div className="text-3xl font-[family-name:var(--title)] font-bold tracking-wide pb-8 border-b-[1px] border-primary border-opacity-35 w-full">
        {title || ""}
      </div>
      <div className="grid grid-cols-2">
        <div
          className="accordion divide-neutral/20 divide-y"
          data-accordion-always-open=""
        >
          {oddFAQs.map((faq) => (
            <div key={faq.id}>
              <div className="accordion-item active" id="payment-always">
                <button
                  className="accordion-toggle inline-flex items-center gap-x-4 text-start"
                  aria-controls="payment-always-collapse"
                  aria-expanded="true"
                >
                  <span className="icon-[tabler--plus] accordion-item-active:hidden text-base-content size-4.5 block shrink-0"></span>
                  <span className="icon-[tabler--minus] accordion-item-active:block text-base-content size-4.5 hidden shrink-0"></span>
                  When is payment taken for my order?
                </button>
                <div
                  id="payment-always-collapse"
                  className="accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="payment-always"
                  role="region"
                >
                  <div className="px-5 pb-4">
                    <p className="text-base-content/80 font-normal">
                      Payment is taken during the checkout process when you pay
                      for your order. The order number that appears on the
                      confirmation screen indicates payment has been successfully
                      processed.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
