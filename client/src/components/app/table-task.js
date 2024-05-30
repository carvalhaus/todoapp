"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { FilePenLine } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import EditTask from "./edit-task";

function TableTask({ data }) {
  return (
    <Table>
      <TableCaption>A list of your tasks.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-20">Nr.</TableHead>
          <TableHead>Task</TableHead>
          <TableHead className="w-44">Created at</TableHead>
          <TableHead className="w-44">Deadline</TableHead>
          <TableHead className="text-right w-20"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((task, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{task.title}</TableCell>
            <TableCell>{format(new Date(task.created_at), "PP")}</TableCell>
            <TableCell>{format(new Date(task.deadline), "PP")}</TableCell>
            <TableCell className="text-right">
              <Dialog>
                <DialogTrigger>
                  <FilePenLine color="#778599" />
                </DialogTrigger>
                <DialogContent>
                  <EditTask task={task} />
                </DialogContent>
              </Dialog>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableTask;
