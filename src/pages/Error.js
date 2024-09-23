import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="error-section">
      <h2>404</h2>
      <p>I věci, které milujeme, se někdy rozbijí...</p>
      <p>
        <Link className="error-link" to="/">
          Opravme to společně – vraťme se na začátek
        </Link>
      </p>
    </section>
  );
};

export default Error;
