function Header() {
  return (
    <>
      <div className="px-5 py-5 border-b border-ink/30">
        <div className="max-[390px]:flex-col flex justify-between h-20">
          <h1 className="text-ink text-[24px] font-semibold">
            AM<span className="text-orange">.</span>
          </h1>

          <ul className="flex items-center justify-between gap-2 uppercase text-xs">
            <li>Skills</li>
            <li>projects</li>
            <li>about</li>
            <li>experience</li>
            <li>contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Header;
