import React from 'react';
import useHooks from '../useHooks';

export default () => {
    // это чисто для примера, что супер удобно переиспользовать хуки
    const resources = useHooks('posts');

    return resources ? (
        <ul className="hooks-list">
            {resources.map(({ title }, index) => (
                <li className="hooks-list__item" key={index}>
                    {title}
                </li>
            ))}
        </ul>
    ) : (
        <p>"no items"</p>
    );
};
