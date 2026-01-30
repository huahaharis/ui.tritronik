"use client";

import {
  AccordionDemo,
  AccordionMultiple,
  AccordionDisabled,
  AccordionBorders,
} from "./accordion-demo";
import { AlertDemo } from "./alert-demo";
import {
  AlertDialogDemo,
  AlertDialogSmall,
  AlertDialogSmallWithMedia,
  AlertDialogWithMedia,
  AlertDialogDestructive,
} from "./alert-dialog-demo";
import { BadgeDemo } from "./badge-demo";
import { CardDemo } from "./card-demo";
import { ButtonDemo } from "./button-demo";
import { DialogDemo } from "./dialog-demo";
import { InputDemo } from "./input-demo";
import { InputGroupDemo } from "./input-group-demo";
import { TabsDemo } from "./tabs-demo";
import { CalendarDemo } from "./calendar-demo";
import { ColorPickerDemo } from "./color-picker-demo";
import { DropdownMenuDemo } from "./dropdown-menu-demo";
import { ProgressDemo } from "./progress-demo";
import { SelectDemo } from "./select-demo";
import { SheetDemo } from "./sheet-demo";
import { SliderDemo } from "./slider-demo";
import { PopoverDemo } from "./popover-demo";
import { LabelDemo } from "./label-demo";
import {
  KanbanDemo,
  DragAndDropList,
  DragAndDropGrid,
  KanbanSortable,
} from "./kanban-demo";
import { StepperDemo } from "./stepper-demo";
import { ChartDemo } from "./chart-demo";
import { TableDemo } from "./table-demo";
import { NotificationDemo } from "./notification-demo";
import { RadioGroupDemo, RadioGroupDisabledDemo } from "./radio-group-demo";
import { CarouselDemo } from "./carousel-demo";
import { MasonryDemo } from "./masonry-demo";

export const demoRegistry: Record<string, React.ComponentType> = {
  masonry: MasonryDemo,
  carousel: CarouselDemo,
  accordion: AccordionDemo,
  "accordion-multiple": AccordionMultiple,
  "accordion-disabled": AccordionDisabled,
  "accordion-borders": AccordionBorders,
  alert: AlertDemo,
  "alert-dialog": AlertDialogDemo,
  "alert-dialog-small": AlertDialogSmall,
  "alert-dialog-small-with-media": AlertDialogSmallWithMedia,
  "alert-dialog-with-media": AlertDialogWithMedia,
  "alert-dialog-destructive": AlertDialogDestructive,
  button: ButtonDemo,
  badge: BadgeDemo,
  card: CardDemo,
  dialog: DialogDemo,
  input: InputDemo,
  "input-group": InputGroupDemo,
  tabs: TabsDemo,
  calendar: CalendarDemo,
  "color-picker": ColorPickerDemo,
  "dropdown-menu": DropdownMenuDemo,
  progress: ProgressDemo,
  select: SelectDemo,
  sheet: SheetDemo,
  slider: SliderDemo,
  popover: PopoverDemo,
  label: LabelDemo,
  kanban: KanbanDemo,
  kanbanSortable: KanbanSortable,
  dragAndDropList: DragAndDropList,
  dragAndDropGrid: DragAndDropGrid,
  stepper: StepperDemo,
  chart: ChartDemo,
  table: TableDemo,
  notification: NotificationDemo,
  "radio-group": RadioGroupDemo,
  "radio-group-disabled": RadioGroupDisabledDemo,
};
