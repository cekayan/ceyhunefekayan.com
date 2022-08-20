interface CardTitle {
  title: string;
}

const CardTitle = ({ title }: CardTitle) => {
  return <h2 className="text-lg font-bold text-white lg:text-2xl">{title}</h2>;
};

export default CardTitle;
