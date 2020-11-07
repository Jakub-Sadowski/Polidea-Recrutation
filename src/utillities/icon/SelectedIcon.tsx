import { Avatar } from '@material-ui/core';
import React, { FC } from 'react';
import python from '../../assets/icons/languages/python.svg';
import c from '../../assets/icons/languages/c.svg';
import cSharp from '../../assets/icons/languages/cSharp.svg';
import kotlin from '../../assets/icons/languages/kotlin.svg';
import html from '../../assets/icons/languages/html.svg';
import php from '../../assets/icons/languages/php.svg';
import java from '../../assets/icons/languages/java.svg';
import javascript from '../../assets/icons/languages/javascript.svg';
import objective from '../../assets/icons/languages/objective.svg';
import mollusc from '../../assets/icons/languages/mollusc.svg';
import unknown from '../../assets/icons/languages/default.svg';
import stargazer from '../../assets/icons/stargazing.svg';
import './icon.scss';

type SelectedIconProps = {
    icon: string;
};

export const SelectedIcon: FC<SelectedIconProps> = ({ icon }) => {
    switch (icon?.toLowerCase()) {
        case 'python':
            return <Avatar className="icon" alt="python" src={python} />;
        case 'c':
            return <Avatar className="icon" alt="c" src={c} />;
        case 'c#':
            return <Avatar className="icon" alt="cSharp" src={cSharp} />;
        case 'kotlin':
            return <Avatar className="icon" alt="kotlin" src={kotlin} />;
        case 'html':
            return <Avatar className="icon" alt="html" src={html} />;
        case 'php':
            return <Avatar className="icon" alt="php" src={php} />;
        case 'java':
            return <Avatar className="icon" alt="java" src={java} />;
        case 'javascript':
            return <Avatar className="icon" alt="javascript" src={javascript} />;
        case 'objective-c':
            return <Avatar className="icon" alt="objective" src={objective} />;
        case 'shell':
            return <Avatar className="icon" alt="javascript" src={mollusc} />;
        case 'stargazer':
            return <Avatar className="icon" alt="stargazer" src={stargazer} />;
        default:
            return <Avatar className="icon" alt="default" src={unknown} />;
    }
};
