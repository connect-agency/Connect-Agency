 
import email from  "../assets/services/email_marketing.png"
import graphics from  "../assets/services/graphics.png"
import seo from  "../assets/services/seo.png"
import web from  "../assets/services/web_pic.png"
import app from  "../assets/services/app_pic.png"
import ads from  "../assets/services/ads_run.png"
import ScrollToTop from "../Hooks/scrollToUp"
import { Helmet } from "react-helmet"
const Services = () => {
  const currentPage = 'services'; 
  return (
  <ScrollToTop>
    {currentPage == 'services' && (
      <Helmet>
      <title>Our Services - Connect Agency</title>
      <meta
          name="description"
          content="Discover our exceptional digital services, including web development, graphic design, and SEO, tailored to elevate your brand."
      />
      <meta
          name="keywords"
          content="digital services, web development, graphic design, SEO, Connect Agency"
      />
      <meta property="og:title" content="Our Services - Connect Agency" />
      <meta
          property="og:description"
          content="Explore our range of services designed to enhance your online presence and help your business grow."
      />
      <meta property="og:image" content="https://connectagency.vercel.app/path/to/your/image.jpg" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://connectagency.vercel.app/services" />
      <meta property="og:site_name" content="Connect Agency" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Our Services - Connect Agency" />
      <meta
          name="twitter:description"
          content="Join us at Connect Agency for outstanding digital services that elevate your brand."
      />
      <meta name="twitter:image" content="https://connectagency.vercel.app/path/to/your/image.jpg" />
      <link rel="canonical" href="https://connectagency.vercel.app/services" />
  </Helmet>
    )}
    <section className="py-12 md:py-24 bg-neutral-100 ">
    <div className="container mx-auto px-4">
      <div className="mb-12 md:mb-24 text-center max-w-6xl mx-auto">
        
              <h2 className="mb-16 font-semibold text-4xl sm:text-4xl xl:text-7xl font-heading">
                <span>
                  Join <span className="text-violet-400">Connect Agency</span>, and
                </span>
                <span className="bg-orange-200 rounded-lg px-4 mt-1 inline-block">
                  change
                </span>
                <span>
                  the future.
                </span>
              </h2>
        <p className="font-semibold text-4xl text-neutral-600 tracking-tight">
          Your journey to digital excellence starts here.
        </p>
      </div>
      <div className="mb-20">
        <div className="flex flex-wrap -m-2.5">
          <div className="w-full md:w-1/2 xl:w-8/12 p-2.5 ">
            <div className="h-full p-10 bg-white rounded-5xl">
              <div className="mb-24">
                <h4 className="mb-2 text-5xl font-medium tracking-tight font-heading">
                  Web Development
                </h4>
                <p className="font-medium text-lg text-neutral-600 tracking-tight max-w-xl">
                  Can create, connect, verify, and search across all you knowledge
                  platforms is one centralized, secure place - accelarating
                  productivity.
                </p>
              </div>
              <div className="flex flex-wrap justify-between items-end -m-8">
                <div className="w-auto p-8">
                  <img
                    className="h- object-cover"
                    src= {web}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-4/12 p-2.5">
            <div className="h-full p-10 bg-white rounded-5xl">
              <div className="flex flex-col justify-between h-full">
                <div className="w-full">
                  <h4 className="mb-2 text-4xl font-medium tracking-tight font-heading">
                    SEO marketing
                  </h4>
                  <p className="mb-4 font-medium text-lg text-neutral-600 tracking-tight max-w-xs">
                    Our company provides content strategies and creates
                    valuable...
                  </p>
                  <img
                    className="mx-auto mb-8 h-64 object-cover"
                    src= {seo}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-8/12 p-2.5 ">
            <div className="h-full p-10 bg-white rounded-5xl">
              <div className="mb-24">
                <h4 className="mb-2 text-5xl font-medium tracking-tight font-heading">
                  App Development
                </h4>
                <p className="font-medium text-lg text-neutral-600 tracking-tight max-w-xl">
                  Can create, connect, verify, and search across all you knowledge
                  platforms is one centralized, secure place - accelarating
                  productivity.
                </p>
              </div>
              <div className="flex flex-wrap justify-between items-end -m-8">
                <div className="w-auto p-8">
                  <img
                    className="h- object-cover"
                    src= {app}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-2.5">
            <div className="h-full p-10 bg-white rounded-5xl">
              <div className="flex flex-col justify-between h-full">
                <div className="w-full">
                  <h4 className="mb-2 text-4xl font-medium tracking-tight font-heading">
                    Graphics Design
                  </h4>
                  <p className="mb-12 font-medium text-lg text-neutral-600 tracking-tight max-w-xs">
                    We bring your brand to life with stunning visual designs that
                    resonate with your target audience. From logos and brochures
                    to complete branding packages, our creative team delivers
                    high-quality graphics that enhance your brand identity and
                    make a lasting impression
                  </p>
                  <img
                    className="mb-8 h-44 mx-auto object-cover"
                    src= {graphics}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 xl:w-1/3 p-2.5">
            <div className="h-full p-10 bg-white rounded-5xl">
              <div className="flex flex-col justify-between h-full">
                <div className="w-full">
                  <h4 className="mb-2 text-4xl font-medium tracking-tight font-heading">
                    Ads Run
                  </h4>
                  <p className="mb-12 font-medium text-lg text-neutral-600 tracking-tight max-w-xs">
                    We craft seamless user journeys by designing intuitive and
                    efficient pathways that guide users through your website or
                    app, ensuring an engaging and user-friendly experience from
                    start to finish
                  </p>
                  <img
                    className="mb-8 w-12 object-cover mx-auto"
                    src= {ads}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-full xl:w-1/3 p-2.5">
            <div className="h-full p-10 bg-white rounded-5xl">
              <div className="flex flex-col justify-between h-full">
                <div className="w-full">
                  <h4 className="mb-2 text-4xl font-medium tracking-tight font-heading">
                   Email Marketing
                  </h4>
                  <p className="mb-12 font-medium text-lg text-neutral-600 tracking-tight max-w-xs">
                    We design personalized email marketing campaigns that help
                    build lasting customer...
                  </p>
                  <img
                    className="mb-8 h-36 object-cover mx-auto"
                    src= {email}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  </ScrollToTop>
  
  )
}

export default Services
