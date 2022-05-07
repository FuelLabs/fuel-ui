import * as RAlertDialog from "@radix-ui/react-alert-dialog";
import { styled } from "@fuel/css";

import { AlertDialogContent } from "./AlertDialogContent";
import { AlertDialogDescription } from "./AlertDialogDescription";
import { AlertDialogHeading } from "./AlertDialogHeading";
import { AlertDialogTrigger } from "./AlertDialogTrigger";
import { AlertDialogFooter } from "./AlertDialogFooter";
import { AlertDialogCancel } from "./AlertDialogCancel";
import { AlertDialogAction } from "./AlertDialogAction";

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
