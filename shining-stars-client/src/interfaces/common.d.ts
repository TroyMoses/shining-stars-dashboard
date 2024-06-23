export interface CustomButtonProps {
  type?: string;
  title: string;
  backgroundColor: string;
  color: string;
  fullWidth?: boolean;
  icon?: ReactNode;
  disabled?: boolean;
  handleClick?: () => void;
}

export interface ProfileProps {
  type: string;
  name: string;
  avatar: string;
  email: string;
  children: Array | undefined;
}

export interface StudentProps {
  _id: string;
  name: string;
  grade: string;
  paymentCode: string;
  photo: string;
  creator: string;
}

export interface PrefectProps {
  _id: string;
  name: string;
  title: string;
  grade: string;
  photo: string;
  creator: string;
}

export interface StaffProps {
  _id: string;
  name: string;
  staffType: string;
  photo: string;
  creator: string;
}

export interface StudentFormProps {
  type: string;
  register: any;
  onFinish: (
    values: FieldValues,
  ) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>;
  formLoading: boolean;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  handleImageChange: (file) => void;
  onFinishHandler: (data: FieldValues) => Promise<void> | void;
  studentImage: { name: string; url: string };
}

export interface PrefectFormProps {
  type: string;
  register: any;
  onFinish: (
    values: FieldValues,
  ) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>;
  formLoading: boolean;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  handleImageChange: (file) => void;
  onFinishHandler: (data: FieldValues) => Promise<void> | void;
  prefectImage: { name: string; url: string };
}

export interface AdminFormProps {
  type: string;
  register: any;
  onFinish: (
    values: FieldValues,
  ) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>;
  formLoading: boolean;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  handleImageChange: (file) => void;
  onFinishHandler: (data: FieldValues) => Promise<void> | void;
  adminImage: { name: string; url: string };
}

export interface StaffFormProps {
  type: string;
  register: any;
  onFinish: (
    values: FieldValues,
  ) => Promise<void | CreateResponse<BaseRecord> | UpdateResponse<BaseRecord>>;
  formLoading: boolean;
  handleSubmit: FormEventHandler<HTMLFormElement> | undefined;
  handleImageChange: (file) => void;
  onFinishHandler: (data: FieldValues) => Promise<void> | void;
  staffImage: { name: string; url: string };
}