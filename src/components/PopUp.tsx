import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ArrowRight, BookOpen, Users, Award } from "lucide-react";
const PopUp = () => {
  return (
    <>
      <Dialog>
        <form>
          <DialogTrigger asChild>
            {/* <Button variant="outline">Open Dialog</Button> */}
            <Button size="lg" className="bg-primary hover:bg-primary/90 group">
              Apply for Admission
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Admission Enquiry</DialogTitle>
              <DialogDescription>
                Please fill out the enquiry form below, and our admissions team
                will get back to you with further details. We look forward to
                helping your child begin their learning journey with us!.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4">
              <div className="grid gap-3">
                <Label htmlFor="name-1">Name</Label>
                <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input
                  id="username-1"
                  name="username"
                  defaultValue="@peduarte"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </DialogContent>
        </form>
      </Dialog>
    </>
  );
};

export default PopUp;
