import Title from "@/components/global/Title";
import UserModal from "@/components/modal/UserModal";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-plus-jakarta-sans)] text-main">
      <UserModal />
      <main>
        This is main
        <Title>hello</Title>
      </main>
    </div>
  );
}
