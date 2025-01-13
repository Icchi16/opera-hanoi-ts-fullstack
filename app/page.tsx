import Button from "@/component/global/Button";
import UserModal from "@/component/modal/UserModal";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-plus-jakarta-sans)] text-main">
      <UserModal />
      <main>
        This is main
        <Button type="arrow" />
      </main>
    </div>
  );
}
