import {useState} from 'react'
import {Form, Link, useActionData, useNavigation, useSearchParams} from 'react-router-dom';

import {EyeInvisibleOutlined, EyeTwoTone, UserOutlined} from '@ant-design/icons';
import {Button, Input} from 'antd';

function AuthForm() {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const data = useActionData();
    const navigation = useNavigation();

    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get('mode') === 'login';
    const isSubmitting = navigation.state === 'submitting';

    return (
        <div style={{textAlign: "center", paddingRight: "30%", paddingLeft: "30%"}}>
            <Form method="post">
                <h1>{isLogin ? 'Log in' : 'Create a new user'}</h1>
                {data && data.errors && (
                    <ul>
                        {Object.values(data.errors).map((err) => (
                            <li key={err}>{err}</li>
                        ))}
                    </ul>
                )}
                {data && data.message && <p>{data.message}</p>}


                <Input size="large" placeholder="Email" prefix={<UserOutlined/>}
                       style={{marginTop: "70px", marginBottom: "10px"}}/>

                <Input.Password
                    placeholder="Password" size="large"
                    iconRender={(visible) => (visible ? <EyeTwoTone/> : <EyeInvisibleOutlined/>)}/>

                <div style={{marginBottom: "10px", marginTop: "10px"}}>
                    Not a user
                    <Link to={`?mode=${isLogin ? 'signup' : 'login'}`}>
                        {isLogin ? ' Login' : ' Create new user'}
                    </Link>
                </div>
                <div>

                    <Button type="primary" size='large' disabled={isSubmitting}>slm</Button>

                </div>
            </Form>
        </div>
    );
}

export default AuthForm;
