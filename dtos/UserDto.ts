export default interface UserDto {
    id: number;
    employeeCode: string | null;
    companyId: number;
    userId: string;
    userName: string;
    email: string;
    fullName: string;
    roleName: string;
    profilePicture: string | null;
    phoneNumber: string | null;
    token: string | null;
    isActive: boolean;
    isDelete: boolean;
  }