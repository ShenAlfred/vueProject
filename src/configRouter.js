/**
 * Created by admin on 2017/2/13.
 */

import Home from './components/Home/Home.com'
import News from './components/News/News.com'
import Message from './components/Message/Message.com'
import MessageDetail from './components/Message/MessageDetail.com'
import Organization from './components/OrganizationStructure/OrganizationStructure.com'

import MessageRouter from './components/Message/Message.mod.vue'
import HomeRouter from './components/Home/Home.mod.vue'
import NewsRouter from './components/News/News.mod.vue'
import OrganizationRouter from './components/OrganizationStructure/OrganizationStructure.mod'

const routes = [
  {
    path: '/home',
    component: HomeRouter,
    children: [
      {
        path: '/',
        component: Home
      }
    ]
  },
  {
    path: '/message',
    component: MessageRouter,
    children: [
      {
        path: '/',
        component: Message
      },
      {
        path: '/message/detail',
        component: MessageDetail
      }
    ]
  },
  {
    path: '/News',
    component: NewsRouter,
    children: [
      {
        path: '/',
        component: News
      }
    ]
  },
  {
    path: '/Organization',
    component: OrganizationRouter,
    children: [
      {
        path: '/',
        component: Organization
      }
    ]
  }
]

export default routes
