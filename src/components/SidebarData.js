/* eslint-disable prettier/prettier */
/* eslint-disable simple-import-sort/imports */
/* eslint-disable prettier/prettier */
import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
     icon: <AiIcons.AiFillHome />,
  },
  {
    title: 'Daily',
    path: '/daily',
     icon: <IoIcons.IoIosPaper />,
     iconClosed: <RiIcons.RiArrowDownSFill />,
     iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'History',
        path: '/daily/history',
         icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Participation metrics',
        path: '/daily/participation',
         icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Backlog',
    path: '/backlog',
     icon: <IoIcons.IoIosPaper />,
     iconClosed: <RiIcons.RiArrowDownSFill />,
     iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'History',
        path: '/backlog/history',
         icon: <IoIcons.IoIosPaper />,
        cName: 'sub-nav'
      },
      {
        title: 'Agile metrics',
        path: '/backlog/agile',
         icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Retrospective',
    path: '/retrospective',
     icon: <FaIcons.FaEnvelopeOpenText />,

     iconClosed: <RiIcons.RiArrowDownSFill />,
     iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'History',
        path: '/retrospective/history',
         icon: <IoIcons.IoIosPaper />
      },
      {
        title: 'Participation metrics',
        path: '/retrospective/participation',
         icon: <IoIcons.IoIosPaper />
      }
    ]
  },
  {
    title: 'Support',
    path: '/support',
     icon: <IoIcons.IoMdHelpCircle />
  }
];
