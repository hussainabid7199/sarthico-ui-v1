// import UserDto from "./UserDto";

// export default interface LoginDto {
//   token: string | null;
//   tokenExpiryDate: Date;
//   refreshToken: string | null;
//   user: UserDto;
// }

export default interface LoginDto {
  message?: string;
  userId: string;
}
