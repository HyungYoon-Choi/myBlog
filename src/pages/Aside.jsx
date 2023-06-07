import React from 'react';
import styled from 'styled-components';
const Sidebar = styled.div`
    flex: 3;
    margin: 20px;
    padding-bottom: 30px;
    background=color: #fdfdfd;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SidebarItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

const SidebarTitle = styled.span`
    margin: 10px;
    padding: 5px;
    width: 80%;
    border-top: 1px solid #999;
    border-bottom: 1px solid #999;
    font-weight: 600;
    line-height: 20px;
    text-align: center;
    font-variant: small-caps;
`;

const Img = styled.img`
    width: 100%;
    height: 400px;
    object-fit: cover;
    object-position: bottom;
    margin-top: 15px;
`;

const Pr = styled.p`
    font-size: 14px;
    padding: 10px 0 30px;
`;

const SidebarList = styled.ul`
    list-style-type: none;
    display: flex;
    felx-wrap: wrap;
    width: 100%;
    margin: 0;
    padding: 0;
    margin-bottom: 30px;
`;

const SidebarListItem = styled.li`
    width: 50%;
    padding-left: 35px;
    line-height: 35px;
    font-weight: 600;
    cursor: pointer;
    text-transform: capitalize;
`;
const TagList = styled.ul`
    margin-top: 10px;
    margin-bottom: 30px;
    padding-left: 30px;
`;

const TagListItem = styled.span`
    font-size: 13px;
    color: #666;
    cursor: pointer; 
    margin-right: 10px;
    &::before{
        content: "#"; 
    }
`;

const Aside = () => {
    return (
        <Sidebar>
            <SidebarItem>
                <SidebarTitle>About Me</SidebarTitle>
                <Img src='images/about-me.png' alt='about' />
                <Pr>
                    남는 무엇을 실현에 사막이다. 용기가 피가 피는 웅대한 있을 생생하며, 찾아 위하여, 실로 때문이다. 따뜻한 그것은 불러 피어나는 주는 인생의 과실이 위하여서.
                </Pr>
            </SidebarItem>
            <SidebarItem>
                <SidebarTitle>Categories</SidebarTitle>
                <SidebarList>
                    <SidebarListItem> Asia </SidebarListItem>
                    <SidebarListItem> Europe </SidebarListItem>
                    <SidebarListItem> Africa </SidebarListItem>
                    <SidebarListItem> Australia </SidebarListItem>
                    <SidebarListItem> America </SidebarListItem>
                    <SidebarListItem> Etc </SidebarListItem>
                </SidebarList>
            </SidebarItem>

            <SidebarItem>
                <SidebarTitle>Tag</SidebarTitle>
                <TagList>
                    <TagListItem> 미국 </TagListItem>
                    <TagListItem> 배낭여행 </TagListItem>
                    <TagListItem> 바캉스 </TagListItem>
                    <TagListItem> 호캉스 </TagListItem>
                    <TagListItem> 어쩌구 </TagListItem>
                    <TagListItem> 저쩌구 </TagListItem>
                </TagList>
            </SidebarItem>
        </Sidebar>
    );
};

export default Aside;