import React from "react";

export type StudentType = {
    key: React.Key;
    firstName: string;
    lastName: string;
    age: number;
    address: string;
    tags: string[];
}

export type ClientType = {
    key: React.Key,
    startDay: string,
    first: string,
    second: string,
    thirt: string,
    fourth: string,
    firstName: string
}

export type Tab = {text: string, count: number, key: string}

export type UserType = {
    email: string,
    password: string
}