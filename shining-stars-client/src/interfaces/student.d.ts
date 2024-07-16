import type { BaseKey } from "@refinedev/core";

export interface FormFieldProp {
  name: string;
  labelName: string;
}

export interface FormValues {
  name: string;
  stid: string;
  paymentCode: string;
  grade: string;
}

export interface StudentCardProps {
  id?: BaseKey | undefined;
  name: string;
  stid: string;
  grade: string;
  gender: string;
  residence: string;
  paymentCode: string;
  photo: string;
}
