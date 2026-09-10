import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="relative flex flex-col justify-end  text-center text-sage-dark overflow-hidden h-40">
      <div className="relative z-10 bg-sage-light md:bg-transparent">
        <h5 className="font-heading text-lg">&#169; CPC 2026</h5>
        <div className='w-full bg-sage-light lg:bg-transparent pb-2'>
          <a href="https://www.linkedin.com/in/claudia-pereira-carion/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="text-2xl mx-2 cursor-pointer hover:scale-95" />
          </a>
          <a href="https://github.com/claudiacarion" target="_blank">
            <FontAwesomeIcon icon={faSquareGithub} className="text-2xl mx-2 cursor-pointer hover:scale-95" />
          </a>
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        className="absolute bottom-13 md:bottom-3 lg:bottom-[-20] xl:bottom-[-50] 2xl:bottom-[-75] left-0 w-full z-0">
        <path
          fill="#DDE1CF"
          fillOpacity="1"
          d="M0,256L60,250.7C120,245,240,235,360,213.3C480,192,600,160,720,170.7C840,181,960,235,1080,250.7C1200,267,1320,245,1380,234.7L1440,224L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
      </svg>
    </footer>
  );
};

export default Footer;
