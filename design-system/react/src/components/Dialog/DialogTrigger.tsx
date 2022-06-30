import { styled } from "@fuel-ui/css";
import * as RDialog from "@radix-ui/react-dialog";

export type DialogTriggerProps = RDialog.DialogTriggerProps;
export const DialogTrigger = styled(RDialog.DialogTrigger);

DialogTrigger.defaultProps = {
  asChild: true,
};
