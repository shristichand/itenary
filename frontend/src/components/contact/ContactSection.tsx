import { MaxWidthWrapper } from "../common/MaxWidthWrapper";
import { SubHeadingContainer } from "../common/SubHeadingContainer";
import { ContactInfo } from "./ContactInfo";
import { FormSection } from "./FormSection";

export const ContactSection = () => {
  return (
    <MaxWidthWrapper>
      <div id="contact" className="space-y-15">
        <SubHeadingContainer
          headingtext="Get in Touch"
          paragraphtext="Ready to start your next adventure? Contact us today and let's plan your perfect trip."
        />
        <div className="flex gap-10 pb-10">
          <FormSection />
          <ContactInfo />
        </div>
      </div>
    </MaxWidthWrapper>
  );
};
