import React from 'react';
import {Typography} from 'antd';
const { Text } = Typography;
import {getFormatDate} from '@packages/shared/src/utility';

const CurrentTime: React.FC = () => {
    const [time, setCurrentTime] = React.useState(getFormatDate(new Date()))

    React.useEffect(() => {
        const timer = () => setTimeout(() => setCurrentTime(getFormatDate(new Date())), 1000)

        timer()

        return () => clearTimeout(timer());
    }, [time])

    return <Text strong>{`Время покупать: ${time}`}</Text>
};

export default CurrentTime;
