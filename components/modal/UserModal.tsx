import Button from "../global/Button";
import ArrowLeft from "../icons/ArrowLeft";

interface UserModalProps {
  base?: string;
}

const UserModal: React.FC<UserModalProps> = () => {
  const iconSize = 32;

  return (
    <div className="fixed inset-y-0 right-0 w-[414px] bg-main text-secondary p-8 flex flex-col">
      <div className="flex">
        <div className="flex-auto">
          <Button className="flex">
            <ArrowLeft width={iconSize} height={iconSize} />
            <span>quay laij</span>
          </Button>
        </div>
        <Button type="icon"></Button>
      </div>
      <div>This is user modal</div>
      <div>This is user modal</div>
      <div>This is user modal</div>
    </div>
  );
};

export default UserModal;
