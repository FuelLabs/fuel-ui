import { createComponent } from "../../utils"

import type { OmitProps, PaginationNavProps } from "./PaginationNav"
import { PaginationNav } from "./PaginationNav"

export const PaginationNext = createComponent<
  Omit<PaginationNavProps, "direction">,
  unknown,
  OmitProps
>((props) => {
  return <PaginationNav {...props} direction="next" />
})
