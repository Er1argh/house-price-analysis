export interface PredictionInputs {
  totsp: number;
  livesp: number;
  kitsp: number;
  dist: number;
  metrdist: number;
  walk: boolean;
  brick: boolean;
  floor: boolean;
  code: number;
}

export const predictPrice = (inputs: PredictionInputs): number => {
  const coefficients = {
    intercept: -28.166388,
    totsp: 1.59382,
    livesp: 1.426083,
    kitsp: 1.700464,
    dist: -3.044425,
    metrdist: -1.259431,
    walk: 10.115134,
    brick: 6.180242,
    floor: 6.539393,
    code: -2.788006,
  };

  return (
    coefficients.intercept +
    coefficients.totsp * inputs.totsp +
    coefficients.livesp * inputs.livesp +
    coefficients.kitsp * inputs.kitsp +
    coefficients.dist * inputs.dist +
    coefficients.metrdist * inputs.metrdist +
    (inputs.walk ? coefficients.walk : 0) +
    (inputs.brick ? coefficients.brick : 0) +
    (inputs.floor ? coefficients.floor : 0) +
    coefficients.code * inputs.code
  );
};
