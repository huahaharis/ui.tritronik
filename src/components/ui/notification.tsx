import { toast } from "sonner";
import { CheckCircle2, Info, AlertTriangle, XCircle } from "lucide-react";

export type NotificationPosition =
  | "top-left"
  | "top-center"
  | "top-right"
  | "bottom-left"
  | "bottom-center"
  | "bottom-right";

export interface NotificationProps {
  message: string;
  description?: string;
  duration?: number;
  position?: NotificationPosition;
  action?: {
    label: string;
    onClick: () => void;
  };
}

export const notification = {
  success: ({
    message,
    description,
    duration,
    action,
    position,
  }: NotificationProps) => {
    toast.success(message, {
      description,
      duration,
      position,
      action,
      icon: <CheckCircle2 className="h-4 w-4 text-green-500" />,
    });
  },
  info: ({
    message,
    description,
    duration,
    action,
    position,
  }: NotificationProps) => {
    toast.info(message, {
      description,
      duration,
      position,
      action,
      icon: <Info className="h-4 w-4 text-blue-500" />,
    });
  },
  warning: ({
    message,
    description,
    duration,
    action,
    position,
  }: NotificationProps) => {
    toast.warning(message, {
      description,
      duration,
      position,
      action,
      icon: <AlertTriangle className="h-4 w-4 text-yellow-500" />,
    });
  },
  error: ({
    message,
    description,
    duration,
    action,
    position,
  }: NotificationProps) => {
    toast.error(message, {
      description,
      duration,
      position,
      action,
      icon: <XCircle className="h-4 w-4 text-red-500" />,
    });
  },
  open: ({
    message,
    description,
    duration,
    action,
    position,
  }: NotificationProps) => {
    toast(message, {
      description,
      duration,
      position,
      action,
    });
  },
};
