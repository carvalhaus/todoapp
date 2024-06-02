import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { format } from "date-fns";
import { Check, Delete, FilePenLine } from "lucide-react";
import { Dialog, DialogContent, DialogTrigger } from "../ui/dialog";
import EditTask from "./edit-task";
import axios from "axios";
import { useState } from "react";

function TableTask({ data, forceUpdate }) {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const handleEditClick = (task) => {
    setSelectedTask(task);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/api/tasks/${id}`)
      .then(() => {
        forceUpdate();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Table>
      <TableCaption>A list of your tasks.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-20">Nr.</TableHead>
          <TableHead>Task</TableHead>
          <TableHead className="w-44">Created at</TableHead>
          <TableHead className="w-44">Deadline</TableHead>
          <TableHead className="text-right w-5"></TableHead>
          <TableHead className="text-right w-5"></TableHead>
          <TableHead className="text-right w-5"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((task, index) => (
          <TableRow key={index}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{task.title}</TableCell>
            <TableCell>{format(new Date(task.created_at), "PP")}</TableCell>
            <TableCell>{format(new Date(task.deadline), "PP")}</TableCell>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <TableCell onClick={() => handleEditClick(task)}>
                  <FilePenLine color="#778599" />
                </TableCell>
              </DialogTrigger>
              <DialogContent>
                <EditTask
                  task={selectedTask}
                  setOpen={setOpen}
                  forceUpdate={forceUpdate}
                />
              </DialogContent>
            </Dialog>
            <TableCell
              className="cursor-pointer"
              onClick={() => handleDelete(task.id)}
            >
              <Delete color="#778599" />
            </TableCell>
            <TableCell>
              <Check color="#778599" />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableTask;
