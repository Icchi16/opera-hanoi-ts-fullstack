import Image from "next/image";
import Button from "../global/Button";

interface UserModalProps {
  base?: string;
}

const UserModal: React.FC<UserModalProps> = () => {
  const iconSize = 32;

  return (
    <div className="fixed inset-y-0 right-0 w-[414px] bg-main text-secondary p-8 flex flex-col">
      <div className="flex">
        <div className="flex-auto">
          <Button type="icon" className="flex space-between">
            <Image
              src="icons/arrow-left.svg"
              height={iconSize}
              width={iconSize}
              alt="close"
            />
            <div>quay lại</div>
          </Button>
        </div>
        <Button type="icon">
          <Image
            src="icons/cross.svg"
            height={iconSize}
            width={iconSize}
            alt="close"
          />
        </Button>
      </div>
      <div>This is user modal</div>
      <div>This is user modal</div>
      <div>This is user modal</div>
    </div>
  );
};

export default UserModal;
