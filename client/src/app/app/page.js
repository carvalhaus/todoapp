"use client";

import Image from "next/image";
import logo from "../../../public/images/logo.svg";
import noData from "../../../public/no_data.svg";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useUser } from "@/context/userContext";
import { AvatarImage } from "@radix-ui/react-avatar";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import UserInfo from "@/components/app/user-info";
import AddTask from "@/components/app/add-task";
import TableTask from "@/components/app/table-task";
import { LogOut, Settings } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

function App() {
  const { user, handleLogout } = useUser();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [state, updateState] = useState();

  const forceUpdate = useCallback(() => updateState({}), []);

  useEffect(() => {
    fetch(`http://localhost:3001/api/tasks/${user?.uid}`, {
      headers: {
        Authorization: `Bearer ${user?.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data.rows);
      })
      .catch((error) => {
        console.error("Error fetching tasks:", error);
        setData([]);
      });
  }, [user?.uid, open, state]);

  return (
    <main className="bg-slate-50 min-h-screen flex justify-center py-6">
      <div className="w-10/12 flex flex-col gap-3">
        <div className="flex justify-between">
          <Link href="/">
            <Image src={logo} alt="Logo Onday image" width={114} height={38} />
          </Link>

          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="border-2 border-slate-500">
                {!user?.photoURL ? (
                  <AvatarFallback className="bg-slate-800 text-white">
                    {user?.displayName[0]}
                  </AvatarFallback>
                ) : (
                  <AvatarImage src={user?.photoURL} />
                )}
              </Avatar>
            </PopoverTrigger>

            <PopoverContent className="flex flex-col justify-between items-center w-28 p-2">
              <Dialog>
                <DialogTrigger
                  asChild
                  className="w-full items-center focus-visible:ring-transparent"
                >
                  <Button variant="ghost" className="p-0 w-full justify-evenly">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </Button>
                </DialogTrigger>

                <DialogContent className="sm:max-w-[425px]">
                  <UserInfo />
                </DialogContent>
              </Dialog>

              <Button
                variant="ghost"
                className="p-0 w-full justify-evenly"
                onClick={handleLogout}
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </Button>
            </PopoverContent>
          </Popover>
        </div>

        <div className="border-gray-300 border-[1px] drop-shadow-md rounded-md bg-white p-4 w-full flex flex-col items-center gap-12">
          <div className="border-b-[1px] w-full flex justify-between pb-4">
            <h1 className="text-4xl font-medium">Keep focus</h1>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button className="uppercase font-medium">Add task</Button>
              </DialogTrigger>
              <DialogContent>
                <AddTask userId={user?.uid} setOpen={setOpen} />
              </DialogContent>
            </Dialog>
          </div>

          {data?.length === 0 ? (
            <div>
              <Image
                src={noData}
                alt="No data to show"
                width={400}
                height={400}
              />
              <p className="pt-4 text-center uppercase font-semibold text-xl text-slate-800">
                No data to be shown!
              </p>
            </div>
          ) : (
            <TableTask data={data} forceUpdate={forceUpdate} />
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
