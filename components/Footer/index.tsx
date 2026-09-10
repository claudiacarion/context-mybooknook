import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faSquareGithub } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="relative flex flex-col justify-end bg-sage-light text-center text-sage-dark overflow-hidden h-20">
      <div className="relative z-10  pb-4">
        <h5 className="font-heading text-lg">&#169; CPC 2026</h5>
        <a href="https://www.linkedin.com/in/claudia-pereira-carion/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} className="text-2xl mx-2 cursor-pointer hover:scale-95" />
        </a>
        <a href="https://github.com/claudiacarion" target="_blank">
          <FontAwesomeIcon icon={faSquareGithub} className="text-2xl mx-2 cursor-pointer hover:scale-95" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
