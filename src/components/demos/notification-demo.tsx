"use client";

import { Button } from "@/components/ui/button";
import { notification } from "@/components/ui/notification";

export function NotificationDemo() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button
        variant="outline"
        onClick={() =>
          notification.open({
            message: "Notification Title",
            description:
              "This is the content of the notification. This is the content of the notification. This is the content of the notification.",
          })
        }
      >
        Default
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          notification.success({
            message: "Success Notification",
            position: "top-left",
            description: "The action was completed successfully.",
          })
        }
      >
        Success on top-left
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          notification.info({
            message: "Info Notification",
            description: "Here is some useful information for you.",
          })
        }
      >
        Info
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          notification.warning({
            message: "Warning Notification",
            description: "Please be careful with this action.",
          })
        }
      >
        Warning
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          notification.error({
            message: "Error Notification",
            position: "bottom-left",
            description: "Something went wrong. Please try again.",
          })
        }
      >
        Error on bottom-left
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          notification.success({
            message: "Quick Notification",
            description: "This will disappear in 1s.",
            duration: 1000,
          })
        }
      >
        Duration (1s)
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          notification.open({
            message: "Action Required",
            description: "Please confirm your email address.",
            action: {
              label: "Confirm",
              onClick: () => console.log("Confirmed"),
            },
          })
        }
      >
        With Action
      </Button>
    </div>
  );
}
