import React, {FC} from 'react';
import {Figure} from '../models/figures/Figure';

interface LostFiguresProps {
    title: string;
    figures: Figure[]
}

const LostFigures: FC<LostFiguresProps> = ({title, figures}) => {
    return (
        <div className='lost'>
            <h3>{title}</h3>
            <div>
                {figures.map(figure =>
                    <div key={figure.id}>
                        {figure.logo && <img width={48} height={48} src={figure.logo} alt={figure.name}/>}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LostFigures;