import '@/app/globals.css'
import { Inter } from "next/font/google";



const inter = Inter({ subsets: ["latin"] });


export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
   <div className="flex items-center w-full justify-center min-h-screen bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
    {children}
   </div>
  );
}
