import './BookCard.scss';

function BookCard() {
  return (
    <>
      <div className='BookCard'>
        <img
          src='https://s1.adlibris.com/images/69679158/vaninnorna-pa-nordiska-kompaniet.jpg'
          alt=''
        />
        <h2>Titel:</h2>
        <p>Väninnorna på Nordiska Kompaniet</p>
        <h2>Författare:</h2>
        <p>Ruth Kvarnström-Jones</p>
      </div>
    </>
  );
}

export default BookCard;
