const Contact = () => {
  return (
    <section className="contact">
      <p className="address">
        <span>
          <b>MVisage</b>
        </span>

        <span>Michaela Kantorová</span>

        <span>Budečská 12</span>

        <span>Praha 2 - Vinohrady</span>
      </p>

      <p>
        <span>Kadeřnictví tel.: +420 777 089 094</span>
      </p>

      <p className="email">
        <a href="mailto:misaka@email.cz">misaka@email.cz</a>
      </p>

      <p>
        <span>Kosmetika tel.: +420 724 931 504</span>
      </p>

      {/* <div>
        <span>Tel.: 777 089 094</span>
        <span>misaka@email.cz</span>
      </div> */}

      <div className="google-map">
        {/* Vloženie Google Mapy pomocou iframe */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.6531872069586!2d14.439693476573245!3d50.0740563715227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b948436c71a8b%3A0x18ced34e183f072!2sBude%C4%8Dsk%C3%A1%2012%2C%20120%2000%20Vinohrady!5e0!3m2!1sen!2scz!4v1725800113792!5m2!1sen!2scz"
          width="350"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Map"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
