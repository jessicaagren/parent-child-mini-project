import { useState } from 'react';
import './LastFMArtistCard.scss';
import useFetch from '../../hooks/useFetch';
import { LastFMArtistType } from '../../types/LastFMArtistType/LastFMArtistType';
import { LastFMAlbumsType } from '../../types/LastFMAlbumsType/LastFMAlbumsType';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import GenericDiv from '../../components/GenericDiv/GenericDiv';

export function LastFMArtistCard() {
  const [inputValue, setInputValue] = useState('');
  const [artistName, setArtistName] = useState('');

  const {
    data: artistData,
    loading: artistLoading,
    error: artistError,
  } = useFetch<LastFMArtistType>(
    `https://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=00c2b31207641f28dc1bdb27e09092b1&format=json`
  );

  const {
    data: albumsData,
    loading: albumsLoading,
    error: albumsError,
  } = useFetch<LastFMAlbumsType>(
    `https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=${artistName}&api_key=00c2b31207641f28dc1bdb27e09092b1&format=json`
  );

  console.log('Artist API Response:', artistData);
  console.log('Albums API Response:', albumsData);

  const albumImage =
    albumsData?.topalbums?.album?.[0]?.image?.find(
      (img) => img.size === 'extralarge'
    )?.['#text'] || '';

  const handleSearch = () => {
    setArtistName(inputValue);
  };

  return (
    <GenericDiv className='LastFMArtistCard'>
      <h2>LastFM API with useFetch</h2>

      <div className='search-container'>
        <InputField
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onEnterPress={handleSearch}
          placeholder='Enter artist name'
        />
        <Button title='Search' clickFunction={handleSearch} />
      </div>

      {artistLoading || albumsLoading ? (
        <p>Loading...</p>
      ) : artistError || albumsError ? (
        <p>Error: {artistError || albumsError}</p>
      ) : (
        <>
          <h3>{artistData?.artist?.name}</h3>
          {albumImage && (
            <img src={albumImage} alt={artistData?.artist?.name} />
          )}

          {inputValue && (
            <>
              <p>Listeners: {artistData?.artist?.stats.listeners}</p>
              <p>Playcount: {artistData?.artist?.stats.playcount}</p>
            </>
          )}
        </>
      )}
    </GenericDiv>
  );
}
