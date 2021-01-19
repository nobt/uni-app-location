//index.js
//获取应用实例

Page({
  data: {
    motto: '打开持续定位'
  },
    tapName: function(event){
      wx.getSetting({
        success: res => {
          res.authSetting = {
            "scope.userLocation": true,
            "scope.userLocationBackground": true
          }
          wx.openSetting({
            withSubscriptions: true,
            success: (res) => {
              console.log(res, 11111111111)
              wx.startLocationUpdateBackground({
                success(res) {
                  console.log('开启后台定位', res)
                },
                fail(res) {
                  console.log('开启后台定位失败', res)
                }
              })
            },
            fail: (err) => {
              console.log(err)
            }
          })
        }
      })
      wx.onLocationChange(function(res) {
        console.log('location change', res)
      })
    }
})
