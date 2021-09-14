import { Section } from "../Section";

import { Button } from "../../components/button/Button";
import { Input } from "../../components/input";

const GetInTouch = () => {
  return (
    <Section className="bg-dark-blue py-16 md:py-24">
      <div className="max-w-150 mx-auto">
        <div className="text-white text-center">
          <span className="text-3xl">Get in touch</span>
          <p className="text-base mt-8 mb-16 mx-16">
            If you have any questions please reach out to us directly through
            the website or mobile app. Ask about our vetting process, how to
            sign up as an agent, become a client and more.
          </p>
        </div>

        <div className="md:px-0 px-5">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-5">
              <Input placeholder="FULL NAME" className="md:mb-0 mb-6" />

              <Input placeholder="PHONE NUMBER" />
            </div>

            <Input placeholder="EMAIL" className="my-6" />

            <Input placeholder="SUBJECT TITLE" />

            <Input
              placeholder="WRITE YOUR MESSAGE HERE"
              variant="textarea"
              className="mt-6"
              rows={4}
            />

            <div className="flex justify-center mt-12 md:mt-24">
              <Button className="text-white bg-salmon hover:opacity-75 text-center">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};
export { GetInTouch };
