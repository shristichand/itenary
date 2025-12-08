import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { SubHeadingContainer } from "../common/SubHeadingContainer";
import { ContactInfo } from "./ContactInfo";
import { FormSection } from "./FormSection";

export const ContactSection = () => {
  return (
    <div >
      <div id="contact" className="md:space-y-15 pt-10 ">
        <div className="max-w-300 mx-auto px-4 md:px-8 xl:px-0">

          <SubHeadingContainer
            headingtext="Get in Touch"
            paragraphtext="Ready to start your next adventure? Contact us today and let's plan your perfect trip."
          />
        </div>
        <div className="md:max-w-300 md:mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-10 md:pb-10 gap-4">
          <FormSection />
          <ContactInfo />

        </div>
      </div>

    </div>
  );
};
