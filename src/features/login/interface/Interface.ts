import React from 'react'
export interface IInput {
    value:string,
    setText:React.ChangeEventHandler<HTMLInputElement>,
    placeholder:string,
    type:string,
    label:string
}

export interface ILoginForm {
    userNameOrEmailAddress: string,
    password: string,
    rememberClient: boolean
}

export type TLoginProps = {
    setToken: Function
};

export interface ITokenResultProps {
    error: null | object,
    result: null | {
        accessToken: string,
        encryptedAccessToken: string,
        expireInSeconds:number,
        userId: number
    }
    success:boolean,
    unAuthorizedRequest: boolean,
    __abp: boolean,
}