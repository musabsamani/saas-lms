interface Props {
  color: string;
  text: string;
}
const TopToBottomCard = ({ color, text }: Props) => {
  return (
    <div className="flex justify-stretch items-stretch rotate-[-11deg] p-4 py-8 w-fit rounded-3xl bg-white bg-opacity-60 backdrop-blur-sm drop-shadow-sm">
      <span className={`writing-mode-tb flex justify-center items-center px-4 py-8 rounded-3xl roboto text-white text-2xl ${color}`}>{text}</span>
    </div>
  );
};

export default TopToBottomCard;
