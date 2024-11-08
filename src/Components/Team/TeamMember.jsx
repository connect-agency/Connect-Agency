import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import ScrollToTop from '../../Hooks/scrollToUp';
import TeamData from '../../assets/team_pic/team'; // Adjust the path as necessary
import { FaLinkedin, FaFacebook, FaGithub, FaGlobe } from 'react-icons/fa'; 
import NotFound from '../NotFound';


const TeamMember = () => {
  const { name } = useParams();

  if (!name) {
    return (
      <div>
        <h1>Invalid team member URL</h1>
      </div>
    );
  }

  const memberName = name.replace(/-/g, ' ');

  const member = TeamData.find(
    (member) => member.name.toLowerCase() === memberName.toLowerCase()
  );

  if (!member) {
    return (
      <NotFound/>
    );
  }

  return (
    <ScrollToTop>
     <Helmet>
    <title>{member.name} - {member.role} of Connect Agency</title>
    <meta
        name="description"
        content={member.description || `${member.name} is ${member.role} at Connect Agency.`}
    />
    <meta
        name="keywords"
        content={`${member.name}, Connect Agency, ${member.role}, web development, graphic design, SEO services`}
    />
    <meta property="og:title" content={`${member.name} - ${member.role}`} />
    <meta
        property="og:description"
        content={member.description || `${member.name} is the ${member.role} at Connect Agency.`}
    />
    <meta property="og:image" content={member.src} />
    <meta property="og:type" content="website" />
    <meta property="og:url" content={`https://yourwebsite.com/team/${member.name}`} />
    <meta property="og:site_name" content="Connect Agency" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={`${member.name} - ${member.role}`} />
    <meta
        name="twitter:description"
        content={member.description || `${member.name} is the ${member.role} at Connect Agency.`}
    />
    <meta name="twitter:image" content={member.src} />
    
    {/* Canonical Link */}
    <link rel="canonical" href={`https://connectagency.vercel.app/team/${member.name}`} />
    
    <script type="application/ld+json">
        {`
            {
                "@context": "https://schema.org",
                "@type": "Person",
                "name": "${member.name}",
                "jobTitle": "${member.role}",
                "image": "${member.src}",
                "url": "https://yourwebsite.com/team/${member.name}",
                "sameAs": [
                    "${member.link || ''}",
                    "${member.fb || ''}",
                    "${member.github || ''}",
                    "${member.portfolio || ''}"
                ],
                "worksFor": {
                    "@type": "Organization",
                    "name": "Connect Agency",
                    "url": "https://connect-agency.com"
                }
            }
        `}
    </script>
    </Helmet>


      <section className="py-36 bg-blueGray-50 overflow-hidden p-10">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap lg:items-center -m-8 lg:-m-14">
            <div className="w-full md:w-1/2 p-8 lg:p-14">
              <div className="relative max-w-max mx-auto lg:ml-auto lg:mr-0 overflow-hidden rounded-4xl">
                <img
                  className="rounded-3xl transform hover:scale-105 transition ease-in-out duration-1000"
                  src={member.src}
                  alt={member.name}
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 p-8 lg:p-14">
              <h1 className="text-4xl font-bold mb-4">{member.name}</h1>
              <p className="text-lg font-medium text-gray-600">{member.role}</p>
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-2">Social Links</h3>
                <div className="flex space-x-4">
                  {member.link && (
                    <a href={member.link} target="_blank" rel="noopener noreferrer">
                      <FaLinkedin size={30} />
                    </a>
                  )}
                  {member.github && (
                    <a href={member.github} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={30} />
                    </a>
                  )}
                  {member.fb && (
                    <a href={member.fb} target="_blank" rel="noopener noreferrer">
                      <FaFacebook size={30} />
                    </a>
                  )}
                  {member.portfolio && (
                    <a href={member.portfolio} target="_blank" rel="noopener noreferrer">
                      <FaGlobe size={30} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollToTop>
  );
};

export default TeamMember;
