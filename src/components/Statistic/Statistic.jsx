import PropTypes from 'prop-types'

import { TextStyle, SpanStyle } from './Statistic.style'

export const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <TextStyle>
                good: <SpanStyle>{good}</SpanStyle>
            </TextStyle>
            <TextStyle>
                neutral:<SpanStyle>{neutral}</SpanStyle>
            </TextStyle>
            <TextStyle>
                bad:<SpanStyle>{bad}</SpanStyle>
            </TextStyle>
            <TextStyle>
                total:<SpanStyle>{total}</SpanStyle>
            </TextStyle>
            <TextStyle>
                Positive feedback:<SpanStyle>{positivePercentage}</SpanStyle>
            </TextStyle>
        </>
    )
}

Statistic.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};