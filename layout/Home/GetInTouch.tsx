import { Section } from "../Section";
import Image from "next/image";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input";
import { useState } from "react";
import Loader from "../../assets/icons/loader.svg";
import { useInput } from "../../hooks/useInput";

const GetInTouch = () => {
  const { value: name, bind: bindName, reset: resetName, error: nameRequired, setError: setNameRequired } = useInput('', true)
  const { value: phone, bind: bindPhone, reset: resetPhone, error: phoneRequired, setError: setPhoneRequired } = useInput('', true)
  const { value: email, bind: bindEmail, reset: resetEmail, error: emailRequired, setError: setEmailRequired } = useInput('', true)
  const { value: subject, bind: bindSubject, reset: resetSubject } = useInput('', true)
  const { value: message, bind: bindMessage, reset: resetMessage } = useInput('', true)

  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    if (loading || name == '' || phone == '' || email == '' || nameRequired || phoneRequired || emailRequired) {
      if (name.trim() == '') {
        setNameRequired(true)
      }
      if (phone.trim() == '') {
        setPhoneRequired(true)
      }
      if (email.trim() == '') {
        setEmailRequired(true)
      }
      return
    }

    const form = {
      name,
      phone,
      email,
      subject,
      message
    }
    setLoading(true)

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }).then((res) => {
      if (res.status === 200) {
        setError(false)
        setSubmitted(true)
        resetForm()
      } else {
        setError(true)
        setSubmitted(false)
      }
      setLoading(false)
    })
  }

  const resetForm = () => {
    resetName()
    resetPhone()
    resetEmail()
    resetSubject()
    resetMessage()
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
              <Input placeholder="*FULL NAME" className={`md:mb-0 mb-6`} {...bindName} required={nameRequired} />

              <Input placeholder="*PHONE NUMBER" {...bindPhone} required={phoneRequired} />
            </div>

            <Input placeholder="*EMAIL" className={`my-6`} {...bindEmail} required={emailRequired} />

            <Input placeholder="SUBJECT TITLE" {...bindSubject} />

            <Input
              placeholder="WRITE YOUR MESSAGE HERE"
              variant="textarea"
              className="mt-6"
              rows={4}
              {...bindMessage}
            />

            <div className="flex flex-col items-center justify-center mt-12 md:mt-24">
              {error && <div className={`text-red-400 mb-4`}>Error, please try again.</div>}
              {submitted && <div className={`text-white mb-4`}>Sent! we’ll be in touch…</div>}

              <Button className="btn-danger relative flex items-center" disabled={loading}>
                <div className={`absolute left-2 ${loading ? 'block' : 'hidden'}`}>
                  <Image src={Loader} width="30" height="30" />
                </div>
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
