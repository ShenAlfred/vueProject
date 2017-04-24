/**
 * Created by admin on 2017/2/13.
 */

const config = {
  baseUrl: process.env.NODE_ENV === 'development' ? 'http://10.52.30.105:8080' : 'http://10.52.30.193:8080'
}
/**
 * window.alert(process.env.NODE_ENV)
 * console.log(process.env.NODE_ENV)
 */

export default config
