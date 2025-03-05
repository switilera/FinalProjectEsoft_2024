import React from 'react';
import {Footer} from 'antd/lib/layout/layout';
import {Flex, Typography} from 'antd';
import dayjs from "dayjs";

const {Text} = Typography;

const FooterContainer: React.FC = () => {
    const currentDate = dayjs().format("YYYY")
    return (
        <Footer >
            <Flex justify={"center"}>
                <Text >{`© ${currentDate} Made with ❤ by switilera`}</Text>
            </Flex>
        </Footer>
    );
};

export default FooterContainer;
