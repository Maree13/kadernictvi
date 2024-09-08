import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleKadernictviClick = () => {
    navigate('/Kadernictvi'); // Cesta k tvojej stránke
  };

  const handleKozmetikaClick = () => {
    navigate('/Kozmetika');
  };

  return (
    <section className="hero-section">
      <div class="buttons-hero">
        <button className="button button-hero" onClick={handleKadernictviClick}>
          Kadeřnictví
        </button>
        <button className="button button-hero" onClick={handleKozmetikaClick}>
          Kosmetika
        </button>
      </div>
    </section>
  );
};

export default Home;
