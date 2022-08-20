interface CardContent {
  content: string;
}

const CardContent = ({ content }: CardContent) => {
  return (
    <p className="text-base font-normal text-white lg:text-lg">{content}</p>
  );
};

export default CardContent;
