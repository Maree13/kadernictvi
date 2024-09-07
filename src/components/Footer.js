import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-links">
        <a
          className="social-media-icon"
          href="https://www.facebook.com/tvojProfil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} />
        </a>
        <a
          className="social-media-icon"
          href="https://www.instagram.com/tvojProfil"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
      </section>
      <p class="copyright">© 2024 mariana sarovic</p>
    </footer>
  );
};

export default Footer;
