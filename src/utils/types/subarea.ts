export interface SubareaType {
  id: string;
  label: string;
  desc: string;
  children: SubareaChildren[];
}
export type SubareaChildren = Omit<SubareaType, 'children'>;
