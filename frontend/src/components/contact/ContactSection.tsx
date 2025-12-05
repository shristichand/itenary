import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { SubHeadingContainer } from "../common/SubHeadingContainer";
import { ContactInfo } from "./ContactInfo";
import { FormSection } from "./FormSection";

export const ContactSection = () => {
  return (
    <MaxWidthWrapper className="max-md:bg-white">
      <div id="contact" className="md:space-y-15 pt-10">
        <SubHeadingContainer
          headingtext="Get in Touch"
          paragraphtext="Ready to start your next adventure? Contact us today and let's plan your perfect trip."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 md:pb-10 gap-4">
          <FormSection />
          <ContactInfo />

        </div>
      </div>
      
    </MaxWidthWrapper>
  );
};
