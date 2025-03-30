interface HandleBasicOperation {
    handle: (input: string | number) => void
}

interface HandleNormalFunction {
    handle: () => void;
}

export interface ExpressionProps {
    expression: string;
}

export interface OutputProps {
    output: string;
}

export interface NumberKeyProps extends HandleBasicOperation {
    number: number;
}

export interface AddKeyProps extends HandleBasicOperation { }
export interface SubtractKeyProps extends HandleBasicOperation { }
export interface MutiplyKeyProps extends HandleBasicOperation { }
export interface DivideKeyProps extends HandleBasicOperation { }
export interface PercentKeyProps extends HandleBasicOperation { }
export interface DecimalKeyProps extends HandleBasicOperation { }

export interface EqaulsKeyProps extends HandleNormalFunction { }
export interface AllClearKeyProps extends HandleNormalFunction { }
export interface DeleteKeyProps extends HandleNormalFunction { }