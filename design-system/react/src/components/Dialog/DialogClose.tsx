import { styled } from "@fuel-ui/css";
import * as RDialog from "@radix-ui/react-dialog";

export type DialogCloseProps = RDialog.DialogCloseProps;
export const DialogClose = styled(RDialog.Close);

DialogClose.defaultProps = {
  asChild: true,
};
