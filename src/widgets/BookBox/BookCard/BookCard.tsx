import './BookCard.scss';

function BookCard() {
  return (
    <>
      <div className='BookCard'>
        <img
          src='https://s1.adlibris.com/images/69679158/vaninnorna-pa-nordiska-kompaniet.jpg'
          alt=''
        />
        <p>
          <span>Titel:</span> Väninnorna på Nordiska Kompaniet
        </p>
        <p>
          <span>Författare:</span> Ruth Kvarnström-Jones
        </p>
      </div>
    </>
  );
}

export default BookCard;
