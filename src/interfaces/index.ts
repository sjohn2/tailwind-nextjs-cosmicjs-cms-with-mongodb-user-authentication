export type Imgix = {
  url: string;
  imgix_url: string;
}

export type Author = {
  title: string;
  metadata: {
    picture: Imgix;
  }
}

