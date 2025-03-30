import Navbar from './components/Navbar';
import SideBar from './components/SideBar';
import './globals.css';
export const metadata = {
  title: 'Buddy',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className=" bg-[#F5F3EF] overflow-x-hidden">  
      <div className="w-screen overflow-hidden h-auto flex flex-col">
      <Navbar />

      <div className="flex flex-1">
        <SideBar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
      </body>
    </html>
  );
}
