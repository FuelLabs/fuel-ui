import { styled } from "@fuel/css";
import * as RAlertDialog from "@radix-ui/react-alert-dialog";

import { AlertDialogAction } from "./AlertDialogAction";
import { AlertDialogCancel } from "./AlertDialogCancel";
import { AlertDialogContent } from "./AlertDialogContent";
import { AlertDialogDescription } from "./AlertDialogDescription";
import { AlertDialogFooter } from "./AlertDialogFooter";
import { AlertDialogHeading } from "./AlertDialogHeading";
import { AlertDialogTrigger } from "./AlertDialogTrigger";

const AlertDialogRoot = styled(RAlertDialog.Root);

type AlertDialogComponent = typeof AlertDialogRoot & {
  Content: typeof AlertDialogContent;
  Trigger: typeof AlertDialogTrigger;
  Heading: typeof AlertDialogHeading;
  Description: typeof AlertDialogDescription;
  Footer: typeof AlertDialogFooter;
  Cancel: typeof AlertDialogCancel;
  Action: typeof AlertDialogAction;
};

export const AlertDialog = AlertDialogRoot as AlertDialogComponent;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Trigger = AlertDialogTrigger;
AlertDialog.Heading = AlertDialogHeading;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Footer = AlertDialogFooter;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Action = AlertDialogAction;
