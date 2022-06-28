import * as RDialog from "@radix-ui/react-dialog";
import { styled } from "@test-changesets/css";

export type DialogTriggerProps = RDialog.DialogTriggerProps;
export const DialogTrigger = styled(RDialog.DialogTrigger);

DialogTrigger.defaultProps = {
  asChild: true,
};
