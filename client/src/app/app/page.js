import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

function App() {
  return (
    <main className="bg-slate-50 min-h-screen flex justify-center py-6">
      <div className="w-10/12 flex flex-col gap-3">
        <div className="flex justify-between">
          <Image src={logo} alt="Logo Onday image" width={114} height={38} />
          <Avatar>
            <AvatarFallback className="bg-slate-800 text-white">
              JP
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="border-gray-300 border-[1px] drop-shadow-md rounded-md bg-white p-4">
          <div className="border-b-[1px] flex justify-between pb-4">
            <h1 className="text-4xl font-medium">Keep focus</h1>
            <Button className="uppercase font-medium bg-slate-700">
              Add task
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
