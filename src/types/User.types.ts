export type AdminUserType = {
    id: string,
    firstName: string,
    lastName?: string | null,
    email: string,
    isAdmin: boolean,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  };