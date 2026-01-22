"use client"

import { AccordionDemo } from "./accordion-demo"
import { AlertDemo } from "./alert-demo"
import { AlertDialogDemo } from "./alert-dialog-demo"
import { BadgeDemo } from "./badge-demo"
import { CardDemo } from "./card-demo"
import { ButtonDemo } from "./button-demo"
import { DialogDemo } from "./dialog-demo"
import { InputDemo } from "./input-demo"
import { TabsDemo } from "./tabs-demo"
import { CalendarDemo } from "./calendar-demo"
import { DropdownMenuDemo } from "./dropdown-menu-demo"
import { ProgressDemo } from "./progress-demo"
import { SelectDemo } from "./select-demo"
import { SheetDemo } from "./sheet-demo"
import { SliderDemo } from "./slider-demo"
import { PopoverDemo } from "./popover-demo"
import { LabelDemo } from "./label-demo"

export const demoRegistry: Record<string, React.ComponentType> = {
  accordion: AccordionDemo,
  alert: AlertDemo,
  alertDialog: AlertDialogDemo,
  button: ButtonDemo,
  badge: BadgeDemo,
  card: CardDemo,
  dialog: DialogDemo,
  input: InputDemo,
  tabs: TabsDemo,
  calendar: CalendarDemo,
  dropdownMenu: DropdownMenuDemo,
  progress: ProgressDemo,
  select: SelectDemo,
  sheet: SheetDemo,
  slider: SliderDemo,
  popover: PopoverDemo,
  label: LabelDemo,
}
