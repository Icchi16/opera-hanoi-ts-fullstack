const ForYou = () => {
  return (
    <div className="flex justify-between">
        {/* menu */}
      <ul className="[&_li>*]:transition-all hover:[&_li>*]:font-black no-flash w-[300px]" id="forYouMenu">
        <li>
          <button className="menu-item active">Home</button>
        </li>
        <li>
          <button className="menu-item">Account</button>
        </li>
        <li>
          <button className="menu-item">Notifications</button>
        </li>
      </ul>

      {/* card */}
      <div className="grid grid-cols-2 grid-rows-2 w-full">
        <div className="shadow-black shadow-lg">sd</div>
        <div className="shadow-black shadow-lg">sd</div>
        <div className="shadow-black shadow-lg">sd</div>
        <div className="shadow-black shadow-lg">sd</div>
      </div>
    </div>
  );
};

export default ForYou;
