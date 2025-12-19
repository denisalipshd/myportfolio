import { EnvelopeIcon, WhatsappLogoIcon, ArrowRightIcon, PaperPlaneTiltIcon } from "@phosphor-icons/react";

const TalkCard = ({ Icon, title, contact, link }) => (
  <div className="bg-white border border-gray-200 shadow-sm rounded-2xl p-6 flex flex-col items-center text-center transition-all hover:shadow-md hover:-translate-y-1">
    <Icon size={32} className="text-gray-900" />
    <h4 className="font-bold text-gray-900 mt-2">{title}</h4>
    <p className="text-gray-500 text-sm mb-4">{contact}</p>

    <a href={link} target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors text-sm font-semibold">
      Write me
      <ArrowRightIcon size={14} weight="bold" className="group-hover:translate-x-1 transition-transform" />
    </a>
  </div>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16 space-y-1">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Contact Me</h3>
          <p className="text-gray-600">Get in touch</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h2 className="text-center font-bold text-2xl text-gray-800 mb-2">Talk to me</h2>

            <TalkCard Icon={EnvelopeIcon} title="Email" contact="denisalip478@gmail.com" link="mailto:denisalip478@gmail.com" />
            <TalkCard Icon={WhatsappLogoIcon} title="WhatsApp" contact="+62 838-7910-5918" link="https://wa.me/6283879105918" />
          </div>

          {/* RIGHT SIDE: Contact Form */}
          <div className="lg:col-span-8">
            <h2 className="text-center font-bold text-2xl text-gray-800 mb-8">Write me your project</h2>

            <form className="grid grid-cols-1 gap-6 bg-white p-4 md:p-8 rounded-3xl border border-gray-100 shadow-sm">
              {/* Name Input */}
              <div className="relative">
                <label className="absolute -top-2 left-4 bg-white px-2 text-xs font-medium text-gray-600 z-10">Name</label>
                <input
                  type="text"
                  placeholder="Insert your name"
                  className="w-full bg-transparent border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-gray-900/85 focus:border-gray-900 transition-all text-gray-900 placeholder:text-sm placeholder:text-gray-400"
                />
              </div>

              {/* Email Input */}
              <div className="relative">
                <label className="absolute -top-2 left-4 bg-white px-2 text-xs font-medium text-gray-600 z-10">Mail</label>
                <input
                  type="email"
                  placeholder="Insert your email"
                  className="w-full bg-transparent border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-gray-900/85 focus:border-gray-900 transition-all text-gray-900 placeholder:text-sm placeholder:text-gray-400"
                />
              </div>

              {/* Project Input */}
              <div className="relative">
                <label className="absolute -top-2 left-4 bg-white px-2 text-xs font-medium text-gray-600 z-10">Project</label>
                <textarea
                  rows="6"
                  placeholder="Write your project description"
                  className="w-full bg-transparent border border-gray-300 rounded-2xl px-5 py-4 focus:outline-none focus:ring-1 focus:ring-gray-900/85 focus:border-gray-900 transition-all text-gray-900 resize-none placeholder:text-sm placeholder:text-gray-400"
                ></textarea>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-gray-800 hover:cursor-pointer transition-all active:scale-95 shadow-lg shadow-gray-200"
              >
                Send Message
                <PaperPlaneTiltIcon size={20} weight="bold" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
