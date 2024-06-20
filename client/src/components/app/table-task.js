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
import { useUser } from "@/context/userContext";

function TableTask({ data, forceUpdate }) {
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [checked, setChecked] = useState([]);
  const { user } = useUser();

  const now = new Date().getDate();

  const handleCheck = (task) => {
    if (checked.includes(task)) {
      const result = checked.filter((id) => id !== task);
      setChecked(result);
    } else {
      setChecked([...checked, task]);
    }
  };

  const handleEditClick = (task) => {
    setSelectedTask(task);
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:3001/api/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${user?.accessToken}`,
        },
      })
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
        {data?.map((task, index) => (
          <TableRow
            key={index}
            className={checked.includes(task.id) ? "line-through" : ""}
          >
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell
              className={
                checked.includes(task.id) ? `text-[#42a162] font-semibold` : ``
              }
            >
              {task.title}
            </TableCell>
            <TableCell>{format(new Date(task.created_at), "PP")}</TableCell>
            <TableCell
              className={
                now - new Date(task.deadline).getDate() >= -1
                  ? "text-red-700 font-bold"
                  : ""
              }
            >
              {format(new Date(task.deadline), "PP")}
            </TableCell>
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
            <TableCell onClick={() => handleCheck(task.id)}>
              <Check
                color={checked.includes(task.id) ? `#42a162` : `#778599`}
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default TableTask;
