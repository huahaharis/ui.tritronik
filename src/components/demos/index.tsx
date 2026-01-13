"use client"

import { AccordionDemo } from "./accordion-demo"
import { AlertDemo } from "./alert-demo"
import { AlertDialogDemo } from "./alert-dialog"

export const demoRegistry: Record<string, React.ComponentType> = {
  accordion: AccordionDemo,
  alert: AlertDemo,
  alertDialog: AlertDialogDemo
}
