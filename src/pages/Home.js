import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/Kadernictvi'); // Cesta k tvojej stránke
  };

  return (
    <section className="hero-section">
      <div class="buttons-hero">
        <button className="button button-hero" onClick={handleClick}>
          Kadeřnictví
        </button>
        <button className="button button-hero">Kosmetika</button>
      </div>
    </section>
  );
};

export default Home;
