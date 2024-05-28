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
import { useEffect } from "react";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import UserInfo from "@/components/app/user-info";
import AddTask from "@/components/app/add-task";
import TableTask from "@/components/app/table-task";

function App() {
  const { user } = useUser();
  const router = useRouter();

  const data = true;

  useEffect(() => {
    const keySession = Object.keys(sessionStorage);
    const session = sessionStorage.getItem(keySession);
    if (!session) {
      router.push("/"); // Redirect to login or home page
    }
  }, [router]);

  return (
    <main className="bg-slate-50 min-h-screen flex justify-center py-6">
      <div className="w-10/12 flex flex-col gap-3">
        <div className="flex justify-between">
          <Link href="/">
            <Image src={logo} alt="Logo Onday image" width={114} height={38} />
          </Link>

          <Dialog>
            <DialogTrigger>
              <Avatar className="border-2 border-slate-500">
                {user?.photoURL ? (
                  <AvatarImage src={user?.photoURL} />
                ) : (
                  <AvatarFallback className="bg-slate-800 text-white">
                    {user?.displayName[0]}
                  </AvatarFallback>
                )}
              </Avatar>
            </DialogTrigger>

            <DialogContent className="sm:max-w-[425px]">
              <UserInfo />
            </DialogContent>
          </Dialog>
        </div>

        <div className="border-gray-300 border-[1px] drop-shadow-md rounded-md bg-white p-4 w-full flex flex-col items-center gap-12">
          <div className="border-b-[1px] w-full flex justify-between pb-4">
            <h1 className="text-4xl font-medium">Keep focus</h1>
            <Dialog>
              <DialogTrigger>
                <Button className="uppercase font-medium bg-slate-700">
                  Add task
                </Button>
              </DialogTrigger>
              <DialogContent>
                <AddTask />
              </DialogContent>
            </Dialog>
          </div>

          {data ? (
            <TableTask />
          ) : (
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
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
