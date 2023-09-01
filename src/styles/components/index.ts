import styled from 'styled-components'

export const Paper  = styled.div`
    background: #fff;
    padding: 16px;
    border-radius: 8px;
    margin-bottom: 1rem;

    .paper__title{
        font-size: 18px !important;
    }

    .paper__header{
        display: flex;
        align-items: baseline;
        justify-content: space-between;
    }
` 

export const StatusBadge = styled.button<{send: boolean}>`
    width: 30px;
    height: 30px;
    background: #F2F4F7;
    border: none;
    outline-width: 0;
    border-radius: 2px;

    .status-icon{
        color: ${({send}) => send ? '#14D934':'#FF4D4F'};
    }
`

export const BalanceBox = styled.div`
    .price{
        margin-bottom: 12px;
        display: flex;
        align-items: baseline;
    }

    .amount{
        font-size: 25px;
        color: #1A202C;
        font-weight: 600;
    }
    .currency{
        color: #90A3BF;
        font-size: 13px;
        margin-left: 6px;
    }
`

export const EmployerTab = styled.div`
    display: flex;
    padding: 10px;
    border-radius: 6px;
    border-radius: 6px;
    background: #fff;
    width: fit-content;
    align-items: center;
    min-width: 250px;

    .user-icon{
        font-size: 25px;
        background-color: #F7F5FD;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: grid;
        place-items: center;
        margin-right: 12px;
        color: #4623E9;
    }

    .count{
        font-size: 20px;
        font-weight: 700;
    }

    .desc{
        font-size: 14px;
        color: #585858;
    }
`

export const SectionHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    .section__title{
        font-size: 20px !important;
    }
`