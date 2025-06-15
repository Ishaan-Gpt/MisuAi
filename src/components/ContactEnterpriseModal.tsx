
import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ContactEnterpriseModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}
const ContactEnterpriseModal: React.FC<ContactEnterpriseModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Contact Enterprise Team</DialogTitle>
          <DialogDescription>
            Submit your info for a custom AI agent solution.
          </DialogDescription>
        </DialogHeader>
        <form
          className="space-y-4 py-2"
          onSubmit={e => {
            e.preventDefault();
            onOpenChange(false);
          }}
        >
          <Input placeholder="Your Name" required />
          <Input placeholder="Your Work Email" type="email" required />
          <Input placeholder="Company" />
          <textarea placeholder="Describe your AI needs..." className="w-full rounded-md border border-gray-700 bg-gray-900 text-white p-2 min-h-[60px]" />
          <Button type="submit" className="w-full">Submit</Button>
        </form>
        <DialogClose asChild>
          <Button variant="secondary" className="w-full mt-2">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
export default ContactEnterpriseModal;
