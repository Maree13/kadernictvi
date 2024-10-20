const Kadernictvi = () => {
  const services = [
    { name: 'Foukaná', price: 'od 500 Kč' },
    { name: 'Dámský střih', price: 'od 1000 Kč' },
    { name: 'Barvení + střih', price: 'od 1700 Kč' },
    {
      name: 'Melírování + střih',
      price: 'od 1000 Kč / hodina',
      duration: '2,5 hod.',
    },
    {
      name: 'Balayage + střih',
      price: 'od 1000 Kč / hodina',
      duration: 'od 3 hodin',
    },
    { name: 'Hloubková kůra', price: 'od 700 Kč' },
    { name: 'Večerní, slavnostní účes', price: 'od 1000 Kč' },
    { name: 'Pánský střih', price: 'od 500 Kč' },
    { name: 'Dětský střih do 12 let', price: 'od 300 Kč' },
    { name: 'Střih el. strojkem', price: 'od 400 Kč' },
  ];

  return (
    <div className="kadernictvi">
      <h2 className="kadernictvi-h2">Ceník kadeřnických služeb</h2>
      <table class="table-cennik-kadernictvi">
        <tbody>
          {services.map(({ name, price, duration }, index) => (
            <tr key={index}>
              <td className="service-name">{name}</td>
              <td className="service-price">{price}</td>
              {/* <td className="service-duration">{duration || '—'}</td> */}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="kadernictvi-paragraph">
        Ceny služeb jsou pouze orientační, dle spotřeby materiálu.
      </p>
    </div>
  );
};

export default Kadernictvi;
