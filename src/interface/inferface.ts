export interface IUserSlice {
  userData?: IAuthGoogleData;
//   accessToken: string;
  success: boolean;
  error: string;
  loading:boolean;
  message:string
}

export interface IAuthGoogleData {
  name?: string | null;
  email: string | null;
  isVerified?: boolean;
  phoneNumber?: string | null;
  profileImg?: string | null;
  uid: string;
}

export interface ITaskForm {
    title:string,
    description:string | undefined,
    category:string
    dueDate:Date,
    taskStatus:string,
    uid?:string

}
export interface ITaskSlice{
  loading:boolean
  success:boolean
  error:string
  message:string
  tasks:unknown[]
  // Todos:unknown[] 
  // InProgess:unknown[]
  // completedTasks:unknown[]
}


