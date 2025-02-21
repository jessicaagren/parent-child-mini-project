import './BookCard.scss';

function BookCard() {
  return (
    <>
      <div className='BookCard'>
        <h2>Väninnorna på Nordiska Kompaniet</h2>
        <img
          src='https://s1.adlibris.com/images/69679158/vaninnorna-pa-nordiska-kompaniet.jpg'
          alt=''
        />
        <h3>Författare:</h3>
        <p>Ruth Kvarnström-Jones</p>
      </div>
    </>
  );
}

export default BookCard;
