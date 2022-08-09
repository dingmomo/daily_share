const rules = {
  alpha: /^[a-zA-Z]+$/,
  alphanum: /^[a-zA-Z0-9]+$/,
  numeric: /^[0-9]+$/,
  hexadecimal: /^[a-fA-F0-9]+$/,
  hexcolor: /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
  rgb: /^rgb\(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5])\)$/,
  rgba: /^rgba\(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-4][0-9]|25[0-5]),(1|0|\.[1-9])\)$/,
  hsl: /^hsl\(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9]|360),([0-9]|[1-9][0-9]|100)%,([0-9]|[1-9][0-9]|100)%\)$/,
  hsla: /^hsla\(([0-9]|[1-9][0-9]|1[0-9][0-9]|2[0-9][0-9]|3[0-5][0-9]|360),([0-9]|[1-9][0-9]|100)%,([0-9]|[1-9][0-9]|100)%,(1|0|\.[1-9])\)$/,
  email: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/,
  url: /^([a-zA-Z0-9]{1,10}):\/\/(\S+)(\.\S+){1,4}(:(6[0-5]{2}[0-3][0-5])|([1-5]\d{4})|([1-9]\d{3})|([1-9]\d{2})|([1-9]\d)|([0-9])])?(\/\S+)*$/,
  uri: /^([a-zA-Z0-9]{1,10}):\/\/(\S+)(\.\S+){1,4}(:(6[0-5]{2}[0-3][0-5])|([1-5]\d{4})|([1-9]\d{3})|([1-9]\d{2})|([1-9]\d)|([0-9])])?(\/\S+)*$/,
  base64: /^[a-zA-Z0-9](=|===)?$/,
  uuid: /^[a-fA-F0-9]{8}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{4}-[a-fA-F0-9]{12}$/,
  latitude: /^[-+]?((0|([1-8]\d?))(\.\d{1,10})?|90(\.0{1,10})?)$/,
  longitude: /^[-+]?(0(\.\d{1,10})?|([1-9](\d)?)(\.\d{1,10})?|1[0-7]\d{1}(\.\d{1,10})?|180\.0{1,10})$/,
  ipv4: /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,
  ipv4s: /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\/((3[0-2])|([1-2][0-9])|([1-9]))$/,
  ipv6: /^([a-fA-F0-9]{0,4}:){2,7}[a-fA-F0-9]{0,4}$/,
  ipv6s: /^([a-fA-F0-9]{0,4}:){2,7}[a-fA-F0-9]{0,4}\/((3[0-2])|([1-2][0-9])|([1-9]))$/,
  int: /^-?\d+$/,
  double: /^-?(\d+\.\d+)$/,
  phone: /^(0)?(1[0-9]{10})$/,
  qq: /^[0-9]{5,15}$/,
  backid: /^([0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{7})|([0-9]{4}-[0-9]{4}-[0-9]{4}-[0-9]{4})|([0-9]{19})|([0-9]{16})$/,
  cardid: /^(\d{15})|(\d{18})|(\d{17}(\d|X|x))$/,
  domain: /^([a-z0-9*][a-z0-9\u4E00-\u9FA5\-_]{0,62})(\.[a-z0-9][a-z0-9\u4E00-\u9FA5\-_]{0,62}){1,5}$/,
  port: /^(6[0-5]{2}[0-3][0-5])|([1-5]\d{4})|([1-9]\d{3})|([1-9]\d{2})|([1-9]\d)|([0-9])$/,
  mask: /^((254|252|248|240|224|192|128|0).0.0.0)|((255.(254|252|248|240|224|192|128|0).0.0))|((255.255.(254|252|248|240|224|192|128|0).0))|(255.255.255.(254|252|248|240|224|192|128|0))$/,
  service: /^([a-zA-Z0-9]{1,10}):\/\/((([a-z0-9*][a-z0-9\u4E00-\u9FA5\-_]{0,62})(\.[a-z0-9][a-z0-9\u4E00-\u9FA5\-_]{0,62}){1,5})|(((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)))(:((6[0-5]{2}[0-3][0-5])|([1-5]\d{4})|([1-9]\d{3})|([1-9]\d{2})|([1-9]\d)|([0-9])))?$/,
  chinese: /^[\u4E00-\u9FA5]{1,255}$/,
  username: /^[,.\-_=+~!@#$%^&*\w]{5,50}$/,
  userpwd: /^[,.\-_=+~!@#$%^&*\w]{5,50}$/,
  code: /^[\w]{5,50}$/
}

const ToolsVerify = {
  // ********************************************************************************************************************************************************************************

  alpha: (value) => {
    return rules.alpha.test(value) // 大小写字母
  },
  alphanum: (value) => {
    return rules.alphanum.test(value) // 大小写字母、数字
  },
  numeric: (value) => {
    return rules.numeric.test(value) // 不带符号的整数
  },
  hexadecimal: (value) => {
    return rules.hexadecimal.test(value) // 16进制
  },
  hexcolor: (value) => {
    return rules.hexcolor.test(value) // 16进制颜色
  },
  rgb: (value) => {
    return rules.rgb.test(value) // RGB颜色
  },
  rgba: (value) => {
    return rules.rgba.test(value) // RGBA颜色
  },
  hsl: (value) => {
    return rules.hsl.test(value) // HSL颜色
  },
  hsla: (value) => {
    return rules.hsla.test(value) // HSLA颜色
  },
  email: (value) => {
    return rules.email.test(value) // 邮箱地址
  },
  url: (value) => {
    return rules.url.test(value) // 包含协议的网址
  },
  uri: (value) => {
    return rules.uri.test(value) // 包含协议的网址
  },
  base64: (value) => {
    return rules.base64.test(value) // BASE64代码
  },
  uuid: (value) => {
    return rules.uuid.test(value) // UUID
  },
  latitude: (value) => {
    return rules.latitude.test(value) // 纬度
  },
  longitude: (value) => {
    return rules.longitude.test(value) // 经度
  },
  ip: (value) => {
    return rules.ipv4.test(value) || rules.ipv4s.test(value) || rules.ipv6.test(value) || rules.ipv6s.test(value) // IP地址(IPv4、IPv6)
  },
  ipSimple: (value) => {
    return rules.ipv4.test(value) || rules.ipv6.test(value) // IP地址(IPv4、IPv6)
  },
  ip4: (value) => {
    return rules.ipv4.test(value) || rules.ipv4s.test(value) // IPv4地址
  },
  ip6: (value) => {
    return rules.ipv6.test(value) || rules.ipv6s.test(value) // IPv6地址
  },
  int: (value) => {
    return rules.int.test(value) // 可带符号的整数
  },
  double: (value) => {
    return rules.double.test(value) // 可带符号的小数
  },
  phone: (value) => {
    return rules.phone.test(value) // 手机号码
  },
  qq: (value) => {
    return rules.qq.test(value) // QQ号码
  },
  backid: (value) => {
    return rules.backid.test(value) // 验证银行帐号
  },
  cardid: (value) => {
    return rules.cardid.test(value) // 验证生份证号码
  },
  domain: (value) => {
    return rules.domain.test(value) // 域名(支持中文域名)
  },
  port: (value) => {
    return rules.port.test(value) // 端口
  },
  mask: (value) => {
    return rules.mask.test(value) || rules.port.test(value) // 掩码
  },
  service: (value) => {
    return rules.service.test(value) // 服务地址
  },
  chinese: (value) => {
    return rules.chinese.test(value) // 验证中文
  },
  username: (value) => {
    return rules.username.test(value) // 验证账号
  },
  userpwd: (value) => {
    return rules.userpwd.test(value) // 验证密码
  },
  code: (value) => {
    return rules.code.test(value) // 验证码、推荐码
  },

  // ********************************************************************************************************************************************************************************

  // 验证整数范围
  IntRange: function (value, min, max) {
    return parseInt(value) >= min && parseInt(value) <= max
  },
  // 验证浮点数范围
  DoubleRange: function (value, min, max) {
    return parseInt(value) >= min && parseInt(value) <= max
  },
  // 验证端口范围
  PortRange: (value) => {
    return /^((6[0-5]{2}[0-3][0-5])|([1-5]\d{4})|([1-9]\d{3})|([1-9]\d{2})|([1-9]\d)|([0-9]))-((6[0-5]{2}[0-3][0-5])|([1-5]\d{4})|([1-9]\d{3})|([1-9]\d{2})|([1-9]\d)|([0-9]))$/.test(value) && parseInt(value.split('-')[0]) > parseInt(value.split('-')[1])
  },
  // 验证域名后缀
  DomainSuffix: (value) => {
    return /^(\.[a-z0-9][a-z0-9\u4E00-\u9FA5\-_]{0,62}){1,3}$/.test(value)
  },
  // 验证是否包含符号
  CheckChart: (value) => {

    return /[`~!！@#$%^&*|;"'<>?/=+(){}\\]/.test(value)
  }
}

export default ToolsVerify