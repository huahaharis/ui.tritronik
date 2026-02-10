import { createContext, useContext, useMemo } from "react";
export interface AuthProvider {
  login: (params: any) => Promise<any>;
  logout: (params: any) => Promise<any>;
  check: (params?: any) => Promise<any>;
  onError: (error: any) => Promise<any>;
  getPermissions?: (params?: any) => Promise<any>;
  getIdentity?: (params?: any) => Promise<any>;
  register?: (params: any) => Promise<any>;
  forgotPassword?: (params: any) => Promise<any>;
  updatePassword?: (params: any) => Promise<any>;
  [key: string]: any;
}

const AuthContext = createContext<AuthProvider | undefined>(undefined);

export const AuthProviderProvider = AuthContext.Provider;

export const useAuthProvider = () => {
  return useContext(AuthContext);
};

export const useLogin = () => {
  const provider = useAuthProvider();

  const mutate = async (params: any) => {
    if (!provider) throw new Error("No AuthProvider found.");
    return await provider.login(params);
  };

  return { mutate };
};

export const useLogout = () => {
  const provider = useAuthProvider();

  const mutate = async (params: any) => {
    if (!provider) throw new Error("No AuthProvider found.");
    return await provider.logout(params);
  };

  return { mutate };
};

export const useRegister = () => {
  const provider = useAuthProvider();

  const mutate = async (params: any) => {
    if (!provider?.register)
      throw new Error("Register method not implemented in AuthProvider.");
    return await provider.register(params);
  };

  return { mutate };
};

export const useIsAuthenticated = () => {
  const provider = useAuthProvider();

  const check = async (params?: any) => {
    if (!provider) return false;
    try {
      await provider.check(params);
      return true;
    } catch (error) {
      return false;
    }
  };

  return { check };
};

export const useGetIdentity = () => {
  const provider = useAuthProvider();

  const getIdentity = async (params?: any) => {
    if (!provider?.getIdentity) return undefined;
    return await provider.getIdentity(params);
  };

  return { getIdentity };
};

export const usePermissions = () => {
  const provider = useAuthProvider();

  const getPermissions = async (params?: any) => {
    if (!provider?.getPermissions) return undefined;
    return await provider.getPermissions(params);
  };

  return { getPermissions };
};

// --- Default / Mock Implementation ---

export const createAuthProvider = (authUrl: string): AuthProvider => ({
  login: async ({ email }) => {
    // Example: POST to your auth endpoint
    // const response = await fetch(`${authUrl}/login`, { method: "POST", body: ... });

    if (email) {
      localStorage.setItem("my_access_token", email);
      return { success: true };
    }
    return { success: false, error: "Invalid credentials" };
  },
  logout: async () => {
    localStorage.removeItem("my_access_token");
    return { success: true };
  },
  check: async () => {
    const token = localStorage.getItem("my_access_token");
    if (token) return { authenticated: true };
    throw new Error("Not authenticated");
  },
  getPermissions: async () => ["admin"],
  getIdentity: async () => {
    const token = localStorage.getItem("my_access_token");
    // Example: Fetch identity from authUrl
    // const response = await fetch(`${authUrl}/me`, ...);

    return {
      id: 1,
      name: "Jane Doe",
      avatar: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
      email: token,
    };
  },
  onError: async (error) => {
    console.error(error);
    return { error };
  },
});

export const defaultAuthProvider = createAuthProvider("");
