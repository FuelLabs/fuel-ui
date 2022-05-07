import { styled } from "@fuel/css";
import * as RDialog from "@radix-ui/react-dialog";

import { DialogClose } from "./DialogClose";
import { DialogContent } from "./DialogContent";
import { DialogDescription } from "./DialogDescription";
import { DialogFooter } from "./DialogFooter";
import { DialogHeading } from "./DialogHeading";
import { DialogTrigger } from "./DialogTrigger";

const DialogRoot = styled(RDialog.Root);

type DialogComponent = typeof DialogRoot & {
  Content: typeof DialogContent;
  Trigger: typeof DialogTrigger;
  Heading: typeof DialogHeading;
  Description: typeof DialogDescription;
  Footer: typeof DialogFooter;
  Close: typeof DialogClose;
};

export const Dialog = DialogRoot as DialogComponent;
Dialog.Content = DialogContent;
Dialog.Trigger = DialogTrigger;
Dialog.Heading = DialogHeading;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;
Dialog.Close = DialogClose;
