import type { BaseKey } from "@refinedev/core";

export interface FormFieldProp {
  name: string;
  labelName: string;
}

export interface FormValues {
  name: string;
  paymentCode: string;
  grade: string;
}

export interface ChildCardProps {
  id?: BaseKey | undefined;
  name: string;
  grade: string;
  paymentCode: string;
  photo: string;
}
