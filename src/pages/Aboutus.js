import misa from '../img/misa.jpg';
import helena from '../img/helena.jpg';

const Aboutus = () => {
  return (
    <div className="aboutus">
      <section className="paragraphs paragraphs-aboutus">
        <p>
          Vítáme vás v salonu <b>MVisage</b>. Přijďte si odpočinout, dopřejte si
          péči o vlasy i pleť a nechte se hýčkat v našem malém, útulném salonu
          na pražských Vinohradech.
        </p>
        <p>
          Pracujeme s kosmetikou <b>REDKEN</b> a <b>PAYOT</b> a rádi vám
          poradíme, co je pro vás nejlepší. Stále se učíme nové trendy, abychom
          vám mohli nabídnout to nejlepší.
        </p>
      </section>
      <section className="figures">
        <div className="figure-aboutus">
          <figure className="figure">
            <div className="img-profile-wrapper">
              <img
                className="img-profile img-profile-michaela"
                src={misa}
                alt="Michaela"
              />
            </div>
            <span className="name name-aboutus">Michaela Kantorová</span>
          </figure>
        </div>

        <div className="figure-aboutus">
          <figure className="figure">
            <div className="img-profile-wrapper">
              <img
                className="img-profile img-profile-helena"
                src={helena}
                alt="Helena"
              />
            </div>
            <span className="name name-aboutus">Helena Šubrtová</span>
          </figure>
        </div>
      </section>
    </div>
  );
};

export default Aboutus;
