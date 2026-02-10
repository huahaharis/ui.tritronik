import * as React from "react";
import { cn } from "@/lib/utils";

interface HeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const Header = React.forwardRef<HTMLDivElement, HeaderProps>(
  ({ className, ...props }, ref) => {
    return (
      <header
        ref={ref}
        className={cn(
          "h-16 flex items-center px-12 bg-background w-full",
          className,
        )}
        {...props}
      />
    );
  },
);
Header.displayName = "Header";

interface FooterProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const Footer = React.forwardRef<HTMLDivElement, FooterProps>(
  ({ className, ...props }, ref) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "py-6 px-12 bg-background text-muted-foreground",
          className,
        )}
        {...props}
      />
    );
  },
);
Footer.displayName = "Footer";

interface ContentProps extends React.HTMLAttributes<HTMLDivElement> {
  asChild?: boolean;
}

const Content = React.forwardRef<HTMLDivElement, ContentProps>(
  ({ className, ...props }, ref) => {
    return (
      <main
        ref={ref}
        className={cn("flex-1 px-12 py-6 min-h-0 overflow-auto", className)}
        {...props}
      />
    );
  },
);
Content.displayName = "Content";

interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  hasSider?: boolean;
}

const LayoutContext = React.createContext<{
  siderHook: {
    addSider: (id: string) => void;
    removeSider: (id: string) => void;
  };
}>({
  siderHook: {
    addSider: () => {},
    removeSider: () => {},
  },
});

const Layout = React.forwardRef<HTMLDivElement, LayoutProps>(
  ({ className, children, hasSider, ...props }, ref) => {
    const [siders, setSiders] = React.useState<string[]>([]);

    const addSider = React.useCallback((id: string) => {
      setSiders((prev) => [...prev, id]);
    }, []);

    const removeSider = React.useCallback((id: string) => {
      setSiders((prev) => prev.filter((s) => s !== id));
    }, []);

    return (
      <LayoutContext.Provider value={{ siderHook: { addSider, removeSider } }}>
        <div
          ref={ref}
          className={cn(
            "flex h-full w-full bg-background/95",
            hasSider || siders.length > 0 ? "flex-row" : "flex-col",
            className,
          )}
          {...props}
        >
          {children}
        </div>
      </LayoutContext.Provider>
    );
  },
);
Layout.displayName = "Layout";

interface SiderProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number | string;
  collapsedWidth?: number | string;
  collapsed?: boolean;
  onCollapse?: (collapsed: boolean) => void;
  collapsible?: boolean;
  trigger?: React.ReactNode;
  defaultCollapsed?: boolean;
  zeroWidthTriggerStyle?: React.CSSProperties;
}

const Sider = React.forwardRef<HTMLDivElement, SiderProps>(
  (
    {
      className,
      children,
      width = 200,
      collapsedWidth = 80,
      collapsible,
      collapsed: customCollapsed,
      defaultCollapsed = false,
      onCollapse,
      trigger,
      style,
      ...props
    },
    ref,
  ) => {
    const { siderHook } = React.useContext(LayoutContext);
    const [collapsed, setCollapsed] = React.useState(defaultCollapsed);
    const id = React.useId();

    React.useEffect(() => {
      siderHook.addSider(id);
      return () => siderHook.removeSider(id);
    }, [id, siderHook]);

    const isCollapsed = customCollapsed ?? collapsed;

    const handleCollapse = () => {
      const next = !isCollapsed;
      setCollapsed(next);
      onCollapse?.(next);
    };

    const currentWidth = isCollapsed ? collapsedWidth : width;

    return (
      <aside
        ref={ref}
        className={cn(
          "relative transition-all duration-200 ease-in-out border-r bg-muted/40",
          className,
        )}
        style={{
          width: currentWidth,
          minWidth: currentWidth,
          maxWidth: currentWidth,
          flex: `0 0 ${currentWidth}px`,
          ...style,
        }}
        {...props}
      >
        <div className="h-full w-full overflow-hidden flex flex-col">
          {children}
        </div>
        {collapsible && trigger !== null && (
          <div
            className="absolute bottom-0 w-full border-t p-2 cursor-pointer hover:bg-muted text-center"
            onClick={handleCollapse}
          >
            {trigger || (isCollapsed ? ">" : "<")}
          </div>
        )}
      </aside>
    );
  },
);
Sider.displayName = "Sider";

export { Layout, Header, Footer, Content, Sider };
