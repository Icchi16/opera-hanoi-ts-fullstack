"use client";

import Button from "../global/Button";

interface UserPanelProps {
  currentDisplay: boolean;
}

const UserPanel: React.FC<UserPanelProps> = ({ currentDisplay }) => {
  if (!currentDisplay) return null;

  return <div>sdasd</div>;
};

export default UserPanel;
