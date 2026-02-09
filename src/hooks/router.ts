import { useNavigate, useSearch, useLocation } from "@tanstack/react-router";

export const useGo = () => {
  const navigate = useNavigate();

  return ({
    to,
    query,
    type = "push",
  }: {
    to?: string;
    query?: any;
    type?: "push" | "replace";
  }) => {
    navigate({
      to,
      search: query,
      replace: type === "replace",
    });
  };
};

export const useParsed = () => {
    const search = useSearch({ strict: false });
    const location = useLocation();

    return {
        id: (search as any).id,
        resource: location.pathname.split("/")[1], // Simple heuristic
        action: location.pathname.split("/").pop(), // Simple heuristic
        pathname: location.pathname,
        params: search,
    }
}

export const useBack = () => {
    const navigate = useNavigate();
    return () => navigate({ to: ".." });
}
