import EducationInfo from "../../interfaces/education";
import CardDate from "./CardDate";
import CardImg from "./CardImg";
import CardContent from "./CardContent";
import CardTitle from "./CardTitle";
import CardType from "../../interfaces/card";

const Card = ({
  image,
  altText,
  title,
  content,
  startDate,
  endDate,
}: CardType) => {
  return (
    <section className="flex items-center gap-x-2 rounded-md py-3">
      <div className="flex p-2">
        <CardImg image={image} altText={altText} />
      </div>
      <div className="flex w-full flex-col ">
        <div className="">
          <CardTitle title={title} />
          <CardContent content={content} />
          <CardDate startYear={startDate} endYear={endDate} />
        </div>
      </div>
    </section>
  );
};

export default Card;
