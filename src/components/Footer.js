import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-links">
        <div>
          <a
            className="social-media-icon"
            href="https://www.facebook.com/MVisagemichaelakantorova"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook size={30} />
          </a>
        </div>
        <div>
          <a
            className="social-media-icon"
            href="https://www.instagram.com/mvisage_michaelakantorova/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={30} />
          </a>
        </div>
      </section>
      <p className="web-design">
        Designed with <i className="fa-solid fa-heart"></i> by{' '}
        {/* <a
          className="web-design-mari"
          href="https://github.com/Maree13/"
          target="_blank"
          rel="noopener noreferrer"
        > */}
        mari
        {/* </a> */}!{' '}
        {/* <a
          href="https://github.com/Maree13/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>{' '}
        </a> */}
      </p>
      <p class="copyright">© 2024 mariana sarovic</p>
    </footer>
  );
};

export default Footer;
