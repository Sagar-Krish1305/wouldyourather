import React from 'react';
import styles from './progress.module.css';

function useAnimateValue(value, duration) {
    const [current, setCurrent] = React.useState(value);

    React.useLayoutEffect(() => {
        const stepDuration = 1 / 50;
        const totalSteps = duration / stepDuration;
        const stepSize = (value - current) / totalSteps;
        let currentStep = 0;

        const interval = setInterval(() => setCurrent(current => {
            currentStep++;
            if (currentStep >= totalSteps) {
                clearInterval(interval);
                return value;
            }

            return current + stepSize;
        }), stepDuration * 1000);

        return () => clearInterval(interval);
    }, [value, duration]);

    return current;
}

const AnimatePercentage = React.memo(({ value, duration }) => {
    const v = useAnimateValue(value, duration);
    return Math.round(v * 100) / 100;
});

function _Progress({
    progress = 0,
    strokeWidth = 27, // Increased outer radius thickness
    ballStrokeWidth = 12, // Increased ball stroke width
    transitionDuration = 0.5,
    transitionTimingFunction = 'ease',
    background = '',
    hideBall = false,
    hideValue = false,
    color = '#598ef0', // Default color for the progress bar
    subtitle = "",
    style,
    className,
    suffix = '%',
}) {
    progress = Math.round(progress * 100) / 100;
    const width = 200;
    const center = width / 2;
    const height = 200;
    const rotate = -90; // Adjust rotation for full circle
    const r = center - strokeWidth / 2 - ballStrokeWidth / 2;
    const circumference = Math.PI * r * 2;
    const offset = circumference * (1 - progress / 100); // Adjust offset calculation

    return (
        <div className={`${className} ${styles.progress}`} style={style}>
            <svg viewBox={`0 0 ${width} ${height}`} className={styles.svg}>
                {!hideValue && (
                    <text x={center} y={center} textAnchor="middle" fontSize="50" fill={"#ffffff"}>
                        {progress}{suffix}
                    </text>
                )}
                <text x={center} y={center + 30 * 3 / 4} textAnchor="middle" fill="#9c9c9c">
                    {subtitle}
                </text>
                <circle
                    transform={`rotate(${rotate} ${center} ${center})`}
                    cx={center}
                    cy={center}
                    r={r}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={0}
                    fill="none"
                    stroke={background}
                    strokeLinecap="round"
                />
                <circle
                    style={{ transition: `stroke-dashoffset ${transitionDuration}s ${transitionTimingFunction}` }}
                    transform={`rotate(${rotate} ${center} ${center})`}
                    cx={center}
                    cy={center}
                    r={r}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    fill="none"
                    stroke={color}
                    strokeLinecap="round"
                />
                {!hideBall && (
                    <circle
                        style={{ transition: `stroke-dashoffset ${transitionDuration}s ${transitionTimingFunction}` }}
                        transform={`rotate(${rotate} ${center} ${center})`}
                        cx={center}
                        cy={center}
                        r={r}
                        strokeWidth={ballStrokeWidth}
                        strokeDasharray={`1 ${circumference}`}
                        strokeDashoffset={offset}
                        fill="none"
                        stroke={color}
                        strokeLinecap="round"
                    />
                )}
            </svg>
        </div>
    );
}

export const Progress = React.memo(_Progress);
Progress.displayName = "Progress";
export default Progress;
