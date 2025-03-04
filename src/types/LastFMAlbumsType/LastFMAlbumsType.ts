export type LastFMAlbumsType = {
  topalbums: {
    album: {
      name: string;
      image: { size: string; '#text': string }[];
    }[];
  };
};
