import React from "react";

import Layout from '../components/layout';
import { About, Photo} from './styles/index.style';
import profile from '../../static/profile.jpg'

export default props => (
    <Layout>
        <About>
            <Photo scr={profile}></Photo>
        </About>
    </Layout>
);