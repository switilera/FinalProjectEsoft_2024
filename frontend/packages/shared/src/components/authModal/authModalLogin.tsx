import React from 'react';
import {Button, Checkbox, Flex, Form, type FormProps, Input} from 'antd';
import {Typography} from 'antd';
const { Title } = Typography;

const AuthModalRegister: React.FC <props> = ({setIsLogin}) => {
    const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div>
            <Title level={4} style={{marginBottom: 16}}>{"Авторизация"}</Title>
            <Form
                name={"basic"}
                labelCol={{span: 4}}
                wrapperCol={{span: 16}}
                initialValues={{remember: true}}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item<FieldType>
                    label={"Логин"}
                    name={"username"}
                    rules={[{required: true, message: 'Пожалуйста, введите свой логин!'}]}
                >
                    <Input/>
                </Form.Item>

                <Form.Item<FieldType>
                    label={"Пароль"}
                    name={"password"}
                    rules={[{required: true, message: 'Пожалуйста, введите свой пароль!'}]}
                >
                    <Input.Password/>
                </Form.Item>

                <Form.Item<FieldType>
                    name={"remember"}
                    valuePropName={"checked"}
                    wrapperCol={{offset: 4, span: 16}}
                >
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>
                <Flex gap={8}>
                    <Form.Item>
                        <Button type={"primary"} htmlType={"submit"}>
                            {"Авторизоваться"}
                        </Button>
                    </Form.Item>
                    <Form.Item>
                        <Button
                            onClick={() => setIsLogin(false)}
                            type={'text'}
                        >
                            {'Регистрация'}
                        </Button>
                    </Form.Item>
                </Flex>
            </Form>
        </div>
    );
};

type FieldType = {
    username?: string;
    password?: string;
    remember?: string;
}


interface props {
    setIsLogin: (b: boolean) => void;
}

export default AuthModalRegister;

