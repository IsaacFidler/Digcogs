
import * as React from 'react';

interface Props {
  uri: string;
}

export const Video: React.FC<Props> = (props: Props) => {
  return (
    <div className="video-responsive">
      <iframe
        width="853"
        height="480"
        src={`props.uri`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
};

export default Video;

