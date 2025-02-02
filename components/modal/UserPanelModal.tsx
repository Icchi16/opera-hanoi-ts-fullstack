"use client";

interface UserPanelProps {
  currentDisplay: boolean;
}

const UserPanelModal: React.FC<UserPanelProps> = ({ currentDisplay }) => {
  if (!currentDisplay) return null;

  return <div>sdasd</div>;
};

export default UserPanelModal;
