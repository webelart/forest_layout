import './index.scss';

interface CoverCardProps {
  image: string;
  title: string;
  subTitle: string;
  text: string;
  link: string;
}

const CoverCard = ({
  image,
  title,
  subTitle,
  text,
  link
}: CoverCardProps) => {
  return (
    <div className="coverCard" style={{
      backgroundImage: `url(${image})`,
    }}>
      <h2 className="coverCard__title">
        <span
          className="coverCard__title_transparent"
          style={{
            backgroundImage: `url(${image})`,
          }}
          dangerouslySetInnerHTML={{__html: title}}
        />
      </h2>
      <div className="coverCard__title-shadow">
        <span
          className="coverCard__title-shadow_white"
          dangerouslySetInnerHTML={{__html: title}}
        />
      </div>
      <div className="coverCard__content">
        <div className="container">
          <h3 className="coverCard__subTitle">{subTitle}</h3>
          <p className="coverCard__text">{text}</p>
          <a href={link} className="coverCard__link">More details</a>
        </div>
      </div>
    </div>
  )
};

export default CoverCard;