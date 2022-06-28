import * as RDialog from "@radix-ui/react-dialog";
import { styled } from "@test-changesets/css";

export type DialogCloseProps = RDialog.DialogCloseProps;
export const DialogClose = styled(RDialog.Close);

DialogClose.defaultProps = {
  asChild: true,
};
