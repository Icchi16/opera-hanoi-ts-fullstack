interface UserModalProps {
  base?: string;
}

const UserModal: React.FC<UserModalProps> = () => {
  return (
    <div className="fixed inset-y-0 right-0 w-[414px] bg-main text-secondary p-8 flex flex-col">
      <div className="flex">
        <div className="flex-auto">
          <div className="flex">
            <svg></svg>
            <div>quay lại</div>
          </div>
        </div>
        <svg className="size-6 stroke-secondary stroke-2">
          <line x1="4" y1="4" x2="20" y2="20" stroke-linecap="round" />
          <line x1="4" y1="20" x2="20" y2="4" stroke-linecap="round" />
        </svg>
      </div>
      <div>This is user modal</div>
      <div>This is user modal</div>
      <div>This is user modal</div>
    </div>
  );
};

export default UserModal;
