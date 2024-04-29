import {useEffect} from 'react';
import {Outlet, useLoaderData, useSubmit} from 'react-router-dom';

import MainNavigation from '../components/MainNavigation';
import {getTokenDuration} from '../util/auth';

function RootLayout() {
    const token = useLoaderData();
    const submit = useSubmit();
    // const navigation = useNavigation();
    useEffect(() => {
        if (!token) {
            return;
        }

        if (token === 'EXPIRED') {
            submit(null, {action: '/logout', method: 'post'});
            return;
        }

        const tokenDuration = getTokenDuration();
        console.log(tokenDuration);

        setTimeout(() => {
            submit(null, {action: '/logout', method: 'post'});
        }, tokenDuration);
    }, [token, submit]);

    return (
        // {{textAlign: 'center', paddingLeft: "20%", paddingRight: "20%"}}
        <div className="sm:container sm:mx-auto px-36 pt-8 h-screen">
            <MainNavigation/>
            <main>
                {/* {navigation.state === 'loading' && <p>Loading...</p>} */}
                <Outlet/>
            </main>
        </div>
    );
}

export default RootLayout;
