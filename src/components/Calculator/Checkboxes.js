import React from "react";

import './Checkboxes.scss'

const AddOptions = ({
                        onChangeExtraHour,
                        onChangeFacePainting,
                        onChangePiniata,
                        onChangeAnimator,
                        onChangeIllusionist,
                        isExtraHour,
                        isFacePainting,
                        isPiniata,
                        isAnimator,
                        isIllusionist
                    }) => (

            <div className='optionsContainer'>
                <label>
                    <input
                        name='extraHour'
                        type='checkbox'
                        checked={isExtraHour}
                        onChange={onChangeExtraHour}
                    />
                    <span className='checkbox'>
                        Dodatkowa godzina zabawy
                    </span>
                </label>
                <label>
                    <input
                        name='facePainting'
                        type='checkbox'
                        checked={isFacePainting}
                        onChange={onChangeFacePainting}
                    />
                    <span className='checkbox'>
                        Malowanie buziek
                    </span>
                </label>
                <label>
                    <input
                        name='piniata'
                        type='checkbox'
                        checked={isPiniata}
                        onChange={onChangePiniata}
                    />
                    <span className='checkbox'>
                        Piniata
                    </span>
                </label>
                <label>
                    <input
                        name='animator'
                        type='checkbox'
                        checked={isAnimator}
                        onChange={onChangeAnimator}
                    />
                    <span className='checkbox'>
                        Dodatkowy animator
                    </span>
                </label>
                <label>
                    <input
                        name='illusionist'
                        type='checkbox'
                        checked={isIllusionist}
                        onChange={onChangeIllusionist}
                    />
                    <span className='checkbox'>
                        Pokaz iluzjonisty
                    </span>
                </label>
            </div>
);

export default AddOptions;