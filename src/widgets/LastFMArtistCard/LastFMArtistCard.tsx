import './LastFMArtistCard.scss';
import useFetch from '../../hooks/useFetch';
import { LastFMArtistType } from '../../types/LastFMArtistType/LastFMArtistType';

export function LastFMArtistCard() {
  const { data, loading, error } = useFetch<LastFMArtistType>(
    `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=Cher&api_key=00c2b31207641f28dc1bdb27e09092b1&format=json`
  );

  console.log('API Response:', data, loading, error); // Debug-logga

  return (
    <div className='LastFMArtistCard'>
      <h2>LastFM API with useFetch</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {data?.artist && (
        <>
          <h3>{data.artist.name}</h3>
          {data.artist.image.length > 0 && (
            <img
              src={data.artist.image[data.artist.image.length - 1]['#text']}
              alt={data.artist.name}
            />
          )}
          <p>Listeners: {data.artist.stats.listeners}</p>
          <p>Playcount: {data.artist.stats.playcount}</p>
        </>
      )}
    </div>
  );
}
