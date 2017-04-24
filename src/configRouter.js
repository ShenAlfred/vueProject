/**
 * Created by admin on 2017/2/13.
 */

/**
 * 组件
 */
import Home from './components/Home/Home.com'
import News from './components/News/News.com'
import Message from './components/Message/Message.com'
import MessageDetail from './components/Message/MessageDetail.com'
import Organization from './components/OrganizationStructure/OrganizationStructure.com'
import Yun from './components/Yunapi/Yun.com'

/**
 * 路由
 */
import MessageRouter from './components/Message/Message.mod.vue'
import HomeRouter from './components/Home/Home.mod.vue'
import NewsRouter from './components/News/News.mod.vue'
import OrganizationRouter from './components/OrganizationStructure/OrganizationStructure.mod'
import YunRouter from './components/Yunapi/Yun.mod.vue'

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
  },
  {
    path: '/Yun',
    component: YunRouter,
    children: [
      {
        path: '/',
        component: Yun
      }
    ]
  }
]

export default routes
