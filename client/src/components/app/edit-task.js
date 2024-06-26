"use client";

import { Button } from "@/components/ui/button";
import { DialogDescription, DialogHeader, DialogTitle } from "../ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useTransition } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { format, formatISO9075, parseISO } from "date-fns";
import axios from "axios";
import { useUser } from "@/context/userContext";

const EditTaskSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  created_at: z.date({ message: "Please select a date" }),
  duration_days: z.string().min(1, { message: "Duration is required" }),
});

function EditTask({ task, setOpen, forceUpdate }) {
  const [isPending, startTransition] = useTransition();
  const { user } = useUser();

  const form = useForm({
    resolver: zodResolver(EditTaskSchema),
    defaultValues: {
      title: task.title,
      created_at: task.created_at ? parseISO(task.created_at) : new Date(),
      duration_days: `${task.duration_days}`,
    },
  });

  const onSubmit = (values) => {
    const formatedValues = {
      ...values,
      created_at: formatISO9075(new Date(values.created_at), {
        representation: "date",
      }),
    };
    startTransition(async () => {
      try {
        axios
          .put(`http://localhost:3001/api/tasks/${task.id}`, formatedValues, {
            headers: {
              Authorization: `Bearer ${user?.accessToken}`,
            },
          })
          .then(() => {
            setOpen(false);
          })
          .then(() => {
            forceUpdate();
          })
          .catch((error) => {
            console.error(error);
          });
      } catch (error) {
        console.error(error);
      }
    });
  };

  return (
    <>
      <DialogHeader>
        <DialogTitle>Edit your task</DialogTitle>
        <DialogDescription>
          Edit your tasks here. Click save when you&apos;re done.
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="Example task"
                      type="text"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="created_at"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Created at</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-full pl-3 text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          {field.value ? (
                            format(field.value, "PP")
                          ) : (
                            <span>Pick a date</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="center">
                      <Calendar
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date > new Date() || date < new Date("1900-01-01")
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="duration_days"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>End in</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder="7 days"
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button type="submit" disabled={isPending}>
            Save changes
          </Button>
        </form>
      </Form>
    </>
  );
}

export default EditTask;
