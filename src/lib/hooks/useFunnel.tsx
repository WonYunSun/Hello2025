import { ReactElement, ReactNode, useState } from "react";

type StepProps = {
    name: string;
    children: ReactNode;
};

type FunnelProps = {
    children: Array<ReactElement<StepProps>>;
};

export const useFunnel = (initialStep: string) => {
    const [currentStep, setCurrentStep] = useState<string>(initialStep);

    const Step = ({ name, children }: StepProps): ReactNode => {
        return <>{children}</>;
    };

    const Funnel = ({ children }: FunnelProps) => {
        const steps = children.filter((child) => child.type === Step);
        const activeStep = steps.find((child) => child.props.name === currentStep);
        return activeStep || null;
    };

    const next = (nextStep: string): void => {
        setCurrentStep(nextStep);
    };

    const prev = (prevStep: string): void => {
        setCurrentStep(prevStep);
    };

    return { Funnel, Step, next, prev, currentStep };
};
