import { Section } from "../Section";

import { Button } from "../../components/button/Button";
import { Input } from "../../components/input";

const GetInTouch = () => {
  const handleSubmit = (e: any) => {
    console.log('Form was submitted');
    e.preventDefault();
  }

  return (
    <Section className="bg-dark-blue py-16 md:py-24">
      <div className="max-w-150 mx-auto">
        <div className="text-white text-center">
          <span className="text-26/16 md:text-3xl font-roboto-medium">
            Get in touch
          </span>
          <p className="text-14/16 md:text-base mt-8 mb-16 mx-5 md:mx-16 font-lato leading-snug">
            If you have any questions please reach out to us directly through
            the website or mobile app. Ask about our vetting process, how to
            sign up as an agent, become a client and more.
          </p>
        </div>

        <div className="md:px-0 px-5">
          <form onSubmit={handleSubmit}>
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
              <Button className="btn-danger">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </Section>
  );
};
export { GetInTouch };
