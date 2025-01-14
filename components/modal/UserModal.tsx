interface UserModalProps {
  base?: string;
}

const UserModal: React.FC<UserModalProps> = () => {
  return (
    <div className="fixed inset-y-0 right-0 w-[414px] bg-main text-secondary p-8 flex flex-col">
      <div className="flex ">This is user modal</div>
      <div>This is user modal</div>
      <div>This is user modal</div>
      <div>This is user modal</div>
      <svg />
    </div>
  );
};

export default UserModal;
