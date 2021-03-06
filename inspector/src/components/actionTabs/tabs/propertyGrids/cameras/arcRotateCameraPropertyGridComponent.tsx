import * as React from "react";
import { Observable, ArcRotateCamera } from "babylonjs";
import { PropertyChangedEvent } from "../../../../propertyChangedEvent";
import { CommonCameraPropertyGridComponent } from "./commonCameraPropertyGridComponent";
import { LineContainerComponent } from "../../../lineContainerComponent";
import { CheckBoxLineComponent } from "../../../lines/checkBoxLineComponent";
import { FloatLineComponent } from "../../../lines/floatLineComponent";
import { SliderLineComponent } from "../../../lines/sliderLineComponent";
import { Vector3LineComponent } from "../../../lines/vector3LineComponent";

interface IArcRotateCameraPropertyGridComponentProps {
    camera: ArcRotateCamera,
    onPropertyChangedObservable?: Observable<PropertyChangedEvent>
}

export class ArcRotateCameraPropertyGridComponent extends React.Component<IArcRotateCameraPropertyGridComponentProps> {
    private _timerIntervalId: number;

    constructor(props: IArcRotateCameraPropertyGridComponentProps) {
        super(props);
    }

    componentWillMount() {
        this._timerIntervalId = window.setInterval(() => this.forceUpdate(), 500);
    }

    componentWillUnmount() {
        window.clearInterval(this._timerIntervalId);
    }

    render() {
        const camera = this.props.camera;

        return (
            <div className="pane">
                <CommonCameraPropertyGridComponent camera={camera} onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                <LineContainerComponent title="TRANSFORMS">
                    <SliderLineComponent label="Alpha" target={camera} propertyName="alpha" minimum={camera.lowerAlphaLimit || 0} maximum={camera.upperAlphaLimit || 2 * Math.PI} step={0.01} onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <SliderLineComponent label="Beta" target={camera} propertyName="beta" minimum={camera.lowerAlphaLimit || 0} maximum={camera.upperBetaLimit || 2 * Math.PI} step={0.01} onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <FloatLineComponent label="Radius" target={camera} propertyName="radius" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                </LineContainerComponent>
                <LineContainerComponent title="CONTROLS" closed={true}>
                    <FloatLineComponent label="Angular sensitivity X" target={camera} propertyName="angularSensibilityX" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <FloatLineComponent label="Angular sensitivity Y" target={camera} propertyName="angularSensibilityY" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <FloatLineComponent label="Panning sensitivity" target={camera} propertyName="panningSensibility" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <FloatLineComponent label="Pinch delta percentage" target={camera} propertyName="pinchDeltaPercentage" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <FloatLineComponent label="Wheel delta percentage" target={camera} propertyName="wheelDeltaPercentage" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <FloatLineComponent label="Speed" target={camera} propertyName="speed" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                </LineContainerComponent>
                <LineContainerComponent title="COLLISIONS" closed={true}>
                    <CheckBoxLineComponent label="Check collisions" target={camera} propertyName="checkCollisions" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <Vector3LineComponent label="Collision radius" target={camera} propertyName="collisionRadius" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                </LineContainerComponent>
                <LineContainerComponent title="LIMITS" closed={true}>
                    <FloatLineComponent label="Lower alpha limit" target={camera} propertyName="lowerAlphaLimit" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <FloatLineComponent label="Upper alpha limit" target={camera} propertyName="upperAlphaLimit" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <FloatLineComponent label="Lower beta limit" target={camera} propertyName="lowerBetaLimit" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <FloatLineComponent label="Upper beta limit" target={camera} propertyName="upperBetaLimit" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <FloatLineComponent label="Lower radius limit" target={camera} propertyName="lowerRadiusLimit" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <FloatLineComponent label="Upper radius limit" target={camera} propertyName="upperRadiusLimit" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                </LineContainerComponent>
                <LineContainerComponent title="BEHAVIORS" closed={true}>
                    <CheckBoxLineComponent label="Auto rotation" target={camera} propertyName="useAutoRotationBehavior" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <CheckBoxLineComponent label="Bouncing" target={camera} propertyName="useBouncingBehavior" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                    <CheckBoxLineComponent label="Framing" target={camera} propertyName="useFramingBehavior" onPropertyChangedObservable={this.props.onPropertyChangedObservable} />
                </LineContainerComponent>
            </div>
        );
    }
}