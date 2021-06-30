export type Point2D = {
  x: number;
  y: number;
};

export type Point3D = Point2D & {
  z: number;
};

export const point: Point3D = {
  x: 0,
  y: 0,
  z: 0,
};

export class Example implements Point3D {
  x = 0;
  y = 0;
  z = 0;
}

/** ------ Type aliases ------ */
type InputOnChange = (newValue: InputValue) => void;

type InputValue = string;

export type InputProps = {
  type: "text" | "email";
  value: string;
  onChange: (newValue: string) => void;
};
