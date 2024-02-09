import { Flex, Box } from '@chakra-ui/react'
import {useLocation} from 'react-router-dom';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../firebase/firebase';

const PageLayout = ({children}) => {
    const {pathname} = useLocation()
    const [user,loading,error] = useAuthState(auth);
    const renderSidebar = pathname != '/auth' && user;
    return (
        <Flex>
            {/* sidebar on the left */}
            {renderSidebar ? (
            <Box w={{base:"70px",  md:'240px'} }>
                <Sidebar />
            </Box>
            ) : null}
            {/* the page content on the right */}
            <Box flex={1} w={{base: 'calc(100%-70px)', md: "calc(100% - 240px)" }}>
                {children}
            </Box>
        </Flex>
    )
}

export default PageLayout;