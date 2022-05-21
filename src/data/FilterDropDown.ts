export type options= {
    id?: number,
    alias: string,
    title: string
} 


export const categoriesOptions = [
    {
        id:1,
        value:'All'
    },
    {
        id:2,
        value:'Italian'
    },
    {
        id:3,
        value:'Seafood'
    },
    {
        id:4,
        value:'Steakhouses'
    },
    {
        id:5,
        value:'Japanese'
    },
    {
        id:6,
        value:'American'
    },
    {
        id:7,
        value:'Mexican'
    },
    {
        id:8,
        value:'Thai'
    },
];

export const priceOptions = [
    {
        id:1,
        alias:'All',
        title:'All'
    },
    {
        id:2,
        alias:'$',
        title:'$'
    },
    {
        id:3,
        alias:'$$',
        title:'$$'
    },
    {
        id:4,
        alias:'$$$',
        title:'$$$'
    },
    {
        id:5,
        alias:'$$$$',
        title:'$$$$'
    },
]