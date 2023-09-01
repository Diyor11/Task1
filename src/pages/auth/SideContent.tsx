
import {Layout} from 'antd'
import Img from '../../assets/img/fone1.png'
import styled from 'styled-components'

const { Content } = Layout;

export const AuthTitle = styled.h2`
    font-size: 20px;
    font-weight: 600;
    line-height: 1.3;
    color: #fff;
    width: 70%;
    margin-inline: auto;
`


const SideContent = () => {
    return (
    <Content
        className="side-content"
    >
        <div>
            <div className="image-wrapper">
                <img src={Img} alt=" banner" />
            </div>
            <AuthTitle className='side-content__desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda totam iste amet quis itaque delectus?</AuthTitle>
        </div>
    </Content>
    );
};

export default SideContent