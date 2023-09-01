import {StudentType, ClientType, Tab} from '../types'

export const transitions = [
    {
        key: '1',
        title: `Bank Transfer`,
        date: 'Jan 04 2022',
        amount: 200000,
        status: 'Coplated',
    },
    {
        key: '2',
        title: `Paypal Transfer`,
        date: 'Jan 04 2022',
        amount: 100000,
        status: 'Pending',
    },
]

export const studentsData: StudentType[] = [
    {
      key: '1',
      firstName: 'John',
      lastName: 'Brown',
      age: 32,
      address: 'New York No. 1 Lake Park',
      tags: ['nice', 'developer'],
    },
    {
      key: '2',
      firstName: 'Jim',
      lastName: 'Green',
      age: 42,
      address: 'London No. 1 Lake Park',
      tags: ['loser'],
    },
    {
      key: '3',
      firstName: 'Joe',
      lastName: 'Black',
      age: 32,
      address: 'Sydney No. 1 Lake Park',
      tags: ['cool', 'teacher'],
    },
];

export const clientsData: ClientType[] = [
  {key: '1', firstName: "Jones", startDay: '31/28', first: '31/28', second: '31/28', fourth: '31/28', thirt: '31/28'},
  {key: '2', firstName: "Jones", startDay: '31/28', first: '31/28', second: '31/28', fourth: '31/28', thirt: '31/28'},
  {key: '3', firstName: "Jones", startDay: '31/28', first: '31/28', second: '31/28', fourth: '31/28', thirt: '31/28'},
  {key: '4', firstName: "Jones", startDay: '31/28', first: '31/28', second: '31/28', fourth: '31/28', thirt: '31/28'},
]

export const studentTabs: Tab[] = [
  {text: 'All', count: 20, key: 'all'},
  {text: 'Lorem Ipsum', count: 11, key: 'lorem1'},
  {text: 'Lorem', count: 14, key: 'lorem'},
  {text: 'News', count: 3, key: 'news'},
]