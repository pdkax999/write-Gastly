  const play = {
    n: 0,
    timer: null,
    speed: 50,
    uis: {
      //通过key : value 连接play对象绑定监听
      'text': document.querySelector('#text'),
      'styleCss': document.querySelector('#styleCss'),
      'textDiv': document.querySelector('#textDiv'),
    },
    events: {
      '.continue': 'play',
      '.stop': 'pause',
      '.normal': 'normal',
      '.fast': 'fast',
      '.slow': 'slow'
    },
    eventBind() {
      for (const key in play.events) {
        if (Object.hasOwnProperty.call(play.events, key)) {
          const value = play.events[key];
          document.querySelector(key).onclick = play[value]
        }
      }
    },
    init() {
      play.eventBind()
      play.play()
    },
    play() {
      clearInterval(play.timer)
      play.timer = setInterval(play.run, play.speed);
    },
    pause() {

      clearInterval(play.timer)

    },
    run() {
      play.n++
      play.uis['text'].innerHTML = cssString.substring(0, play.n);
      play.uis['styleCss'].innerHTML = cssString.substring(0, play.n);
      play.uis['textDiv'].scrollTop = play.uis['text'].scrollHeight
      if (play.n >= cssString) {
        clearInterval(play.timer)
        play.uis['styleCss'].innerHTML = cssString
      }
    },
    slow() {
      play.pause()
      play.speed = 60
      play.play()
    },
    normal() {
      play.pause()
      play.speed = 50
      play.play()
    },
    fast() {
      play.pause()
      play.speed = 10
      play.play()
    },
  }

  play.init()