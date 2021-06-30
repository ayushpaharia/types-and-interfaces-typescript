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

type InputString = string;
type InputValue = "text" | "email";

export type InputProps = {
  type: InputValue;
  value: InputString;
  onChange: InputOnChange;
};
