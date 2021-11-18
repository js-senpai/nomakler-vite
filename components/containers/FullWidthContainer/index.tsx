import {FullWidthContainerProps} from "./FullWidthContainer.props";
import './FullWidthContainer.module.sass'
import styles from './FullWidthContainer.module.sass'
import React from "react";
const FullWidthContainer = ({children,className = ''}:FullWidthContainerProps):JSX.Element => <div className={`${styles.fullWidthContainer} mx-auto ${className}`}>{children}</div>
export default FullWidthContainer
