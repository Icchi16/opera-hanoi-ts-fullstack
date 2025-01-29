import Link from "next/link";

export default function NotFound() {
  return (
    <div className="container h-screen text-primary">
      <div className="px-8 flex items-center h-full justify-center space-x-8">
        <h2 className="font-[family-name:var(--cta)] text-[16rem] italic leading-none relative bottom-14">
          404
        </h2>
        <div className="min-w-1 h-[12rem] bg-white"></div>
        <div className="flex flex-col text-2xl max-w-64 space-y-6 text-white">
            <p>Không thể tìm thấy trang bạn đang yêu cầu</p>
            <Link href="/" className=" underline underline-offset-4 hover:text-primary">Quay trở về trang chủ</Link>
        </div>
      </div>
    </div>
  );
}
