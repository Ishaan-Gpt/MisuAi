
import * as React from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface SignInModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SignInModal: React.FC<SignInModalProps> = ({ open, onOpenChange }) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-sm">
        <DialogHeader>
          <DialogTitle>Sign In</DialogTitle>
          <DialogDescription>Demo login functionality (no real auth).</DialogDescription>
        </DialogHeader>
        <form
          className="space-y-4 py-2"
          onSubmit={e => {
            e.preventDefault();
            onOpenChange(false);
          }}
        >
          <Input placeholder="Email" type="email" required />
          <Input placeholder="Password" type="password" required />
          <Button type="submit" className="w-full">Sign In</Button>
        </form>
        <DialogClose asChild>
          <Button variant="secondary" className="w-full mt-2">Close</Button>
        </DialogClose>
      </DialogContent>
    </Dialog>
  );
};
export default SignInModal;
