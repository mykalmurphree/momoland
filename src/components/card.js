import React from 'react';
import styled from 'styled-components';
import avatar from '../images/img_avatar.png';

const Card = ({ children, ...props }) => children(props);

Card.defaultProps = {
  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,

  Card: styled.div`
    display: flex;
    flex-direction: column;
    margin: 0.5rem;
    text-align:left;
    background-color:#fff;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 100%;

    &:hover {
        box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
    }
  `,

  Thumbnail: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    `,

  Header: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
  `,

  Description: styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
  `,

  children: ({ Wrapper, Card, Thumbnail, Header, Description }) => (
    <Wrapper>
        <Card>
            <Thumbnail><img class="avatar" src={avatar} aria-label={'avatar'} aria-required="true" /></Thumbnail>
            <Header>Project Name</Header>
            <Description>Description Here</Description>
        </Card>
    </Wrapper>
  )
};

export default Card;