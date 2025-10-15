import { useAuthStore } from '@/storage/Admin/authStore';

export function useAuth() {
  const user = useAuthStore((state) => state.user);
  const session = useAuthStore((state) => state.session);
  const profile = useAuthStore((state) => state.profile);
  const isLoading = useAuthStore((state) => state.isLoading);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated());
  const fullName = useAuthStore((state) => state.getFullName());

  return {
    user,
    session,
    profile,
    isLoading,
    isAuthenticated,
    fullName,
  };
}