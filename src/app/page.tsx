import Image from "next/image";

const LogoSegment = ({ children }: React.PropsWithChildren<{}>) => {
  return <div className="flex items-center">{children}</div>;
};

const NavEntry = ({ children }: React.PropsWithChildren<{}>) => {
  return <div className="flex">{children}</div>;
};

const NavSegment = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <div className="flex flex-row items-center justify-between space-x-6">
      {children}
    </div>
  );
};

const FluidSegment = () => {
  return <div className="flex flex-1" />;
};

const MenuBar = ({ children }: React.PropsWithChildren<{}>) => {
  return (
    <nav className="flex flex-row items-center justify-between p-6 w-full">
      {children}
    </nav>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-12 container mx-auto">
      <MenuBar>
        <LogoSegment>
          <div className="relative w-24 h-12">
            <Image
              src="/logo-with-text.svg"
              alt="Hash"
              fill={true}
              style={{ objectFit: "contain" }}
            />
          </div>
        </LogoSegment>
        <FluidSegment />
        <NavSegment>
          <NavEntry>About</NavEntry>
          <NavEntry>Docs</NavEntry>
          <NavEntry>Source</NavEntry>
        </NavSegment>
      </MenuBar>
    </main>
  );
}
