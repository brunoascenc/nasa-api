import React from 'react';
import { IState as IProps } from './App';

const PictureCard: React.FC<IProps> = ({ picture }) => {
  console.log(picture.length ? 'xd' : picture);
  const renderPicture = (): JSX.Element[] => {
    return picture.map((data) => {
      return (
        <>
          <h1>{data.title}</h1>
          <h1>{data.copy}</h1>
          <h1>{data.explanation}</h1>
          <h1>{data.date}</h1>
          <img src={data.url} alt={data.title} />
        </>
      );
    });
  };
  return <div>{renderPicture()}</div>;
};

export default PictureCard;
