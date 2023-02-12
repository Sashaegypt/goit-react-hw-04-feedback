import PropTypes from 'prop-types';

import { ListStyle, ButtonStyle } from './FeedbackOptions.styles';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <ListStyle>
            {options.map(option => (
                <li key={option}>
                    <ButtonStyle type="button" onClick={() => onLeaveFeedback(option)}>
                        {option}
                    </ButtonStyle>
                </li>
            ))}
        </ListStyle>
    );
};

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};