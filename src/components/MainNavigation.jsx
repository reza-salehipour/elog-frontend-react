import {Link} from 'react-router-dom';

import {Divider, Input, Typography, Button} from 'antd';

const {TextArea} = Input;
const {Title} = Typography;

function MainNavigation() {
    return (
        <>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Title style={{textAlign: 'left'}} level={2}>Jobs</Title>
                <Link to={`/buildings`}>
                    <Button type="primary" size={'large'}>Buildings</Button>
                </Link>

            </div>

            <Divider/>
        </>
    );
}


export default MainNavigation;


// const token = useRouteLoaderData('root');
// return (
//     <header>
//         <nav>
//             <ul>
//                 <li><NavLink to="/">Home</NavLink></li>
//
//                 {!token && (
//                     <li>
//                         <NavLink
//                             to="/auth?mode=login">
//                             Authentication
//                         </NavLink>
//                     </li>
//                 )}
//                 {token && (
//                     <li>
//                         <Form action="/logout" method="post">
//                             <button>Logout</button>
//                         </Form>
//                     </li>
//                 )}
//             </ul>
//         </nav>
//         <NewsletterSignup />
//     </header>
// );


